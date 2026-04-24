import React from "react";
import Link from "next/link";

function parseInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let k = 0;
  while (remaining.length > 0) {
    const link = remaining.match(/^(.*?)\[([^\]]+)\]\(([^)]+)\)(.*)$/s);
    if (link && link[1] !== undefined) {
      const before = link[1];
      const label = link[2];
      const href = link[3];
      const rest = link[4] ?? "";
      if (before) nodes.push(...parseInline(before, `${keyBase}-b${k++}`));
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        isExternal ? (
          <a
            key={`${keyBase}-a${k++}`}
            href={href}
            className="text-indigo-600 underline decoration-indigo-600/30 underline-offset-2 hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {parseInline(label, `${keyBase}-l${k}`)}
          </a>
        ) : (
          <Link
            key={`${keyBase}-a${k++}`}
            href={href}
            className="text-indigo-600 underline decoration-indigo-600/30 underline-offset-2 hover:text-indigo-700"
          >
            {parseInline(label, `${keyBase}-l${k}`)}
          </Link>
        )
      );
      remaining = rest;
      continue;
    }
    const bold = remaining.match(/^(.*?)\*\*([^*]+)\*\*(.*)$/s);
    if (bold && bold[1] !== undefined) {
      const before = bold[1];
      const mid = bold[2];
      const rest = bold[3] ?? "";
      if (before) nodes.push(...parseInline(before, `${keyBase}-x${k++}`));
      nodes.push(
        <strong key={`${keyBase}-s${k++}`} className="font-semibold text-gray-900">
          {parseInline(mid, `${keyBase}-m${k}`)}
        </strong>
      );
      remaining = rest;
      continue;
    }
    const code = remaining.match(/^(.*?)`([^`]+)`(.*)$/s);
    if (code && code[1] !== undefined && !code[1].includes("**")) {
      const before = code[1];
      const mid = code[2];
      const rest = code[3] ?? "";
      if (before) nodes.push(...parseInline(before, `${keyBase}-c${k++}`));
      nodes.push(
        <code
          key={`${keyBase}-cd${k++}`}
          className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-gray-800"
        >
          {mid}
        </code>
      );
      remaining = rest;
      continue;
    }
    nodes.push(
      <span key={`${keyBase}-t${k++}`} className="text-inherit">
        {remaining}
      </span>
    );
    break;
  }
  return nodes;
}

function Paragraph({ text }: { text: string }) {
  const t = text.trim();
  if (!t) return null;
  return <p className="mb-4 leading-relaxed text-gray-700 last:mb-0">{parseInline(t, "p")}</p>;
}

export function HelpMarkdownBody({
  markdown,
  bare,
}: {
  markdown: string;
  /** Omit outer prose wrapper (parent supplies typography). */
  bare?: boolean;
}) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let bi = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(
        <h3
          key={`h3-${bi++}`}
          className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-gray-900"
        >
          {parseInline(line.slice(4), `h3-${bi}`)}
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={`h2-${bi++}`}
          className="mt-10 scroll-mt-24 border-b border-gray-100 pb-2 text-2xl font-semibold tracking-tight text-gray-900 first:mt-0"
        >
          {parseInline(line.slice(3), `h2-${bi}`)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(
        <h1
          key={`h1-${bi++}`}
          className="mb-4 text-3xl font-semibold tracking-tight text-gray-900"
        >
          {parseInline(line.slice(2), `h1-${bi}`)}
        </h1>
      );
      i++;
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`ul-${bi++}`} className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item, `li-${bi}-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${bi++}`} className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item, `oli-${bi}-${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }
    if (line.startsWith("> ")) {
      const qs: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        qs.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={`q-${bi++}`}
          className="mb-6 border-l-4 border-gray-200 pl-4 italic text-gray-600"
        >
          {qs.map((q, idx) => (
            <Paragraph key={idx} text={q} />
          ))}
        </blockquote>
      );
      continue;
    }
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("> ") &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<Paragraph key={`para-${bi++}`} text={para.join(" ")} />);
  }

  const inner = <>{blocks}</>;
  if (bare) return inner;
  return (
    <div className="help-prose prose prose-lg max-w-none text-gray-800 prose-headings:scroll-mt-24 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline">
      {inner}
    </div>
  );
}
