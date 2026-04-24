"use client";

import { useCallback, useMemo, useRef, useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

type IndexRow = {
  slug: string;
  title: string;
  summary: string;
  collection: string;
  subCollection: string | null;
  bodyPlainText: string;
};

function articlePath(row: IndexRow): string {
  if (row.subCollection) {
    return `/help/${row.collection}/${row.subCollection}/${row.slug}`;
  }
  return `/help/${row.collection}/${row.slug}`;
}

function highlightTitle(title: string, q: string): ReactNode {
  const query = q.trim();
  if (!query) return title;
  const lower = title.toLowerCase();
  const qi = lower.indexOf(query.toLowerCase());
  if (qi < 0) return title;
  return (
    <>
      {title.slice(0, qi)}
      <mark className="rounded bg-amber-100 px-0.5 text-gray-900">{title.slice(qi, qi + query.length)}</mark>
      {title.slice(qi + query.length)}
    </>
  );
}

export function HelpSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [index, setIndex] = useState<IndexRow[] | null>(null);
  const [loading, setLoading] = useState(false);
  const fuseRef = useRef<Fuse<IndexRow> | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedQuery(query.trim()), 200);
    return () => window.clearTimeout(t);
  }, [query]);

  const load = useCallback(async () => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    setLoading(true);
    try {
      const res = await fetch("/help-index.json");
      const data = (await res.json()) as IndexRow[];
      setIndex(data);
      fuseRef.current = new Fuse(data, {
        keys: [
          { name: "title", weight: 0.45 },
          { name: "summary", weight: 0.25 },
          { name: "bodyPlainText", weight: 0.3 },
        ],
        threshold: 0.42,
        ignoreLocation: true,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const results = useMemo(() => {
    if (debouncedQuery.length < 2 || !fuseRef.current) return [];
    return fuseRef.current.search(debouncedQuery).slice(0, 8).map((r) => r.item);
  }, [debouncedQuery, index]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <label htmlFor="help-search" className="sr-only">
        Search help articles
      </label>
      <input
        id="help-search"
        type="search"
        autoComplete="off"
        placeholder="Search articles (e.g. Instagram, recurring post, custom domain)…"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none ring-indigo-500/0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          void load();
        }}
      />
      {loading && <p className="mt-2 text-center text-sm text-gray-500">Loading search…</p>}
      {debouncedQuery.length >= 2 && index && (
        <ul
          className="mt-2 max-h-80 overflow-auto rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
          role="listbox"
          aria-label="Search results"
        >
          {results.length === 0 ?
            <li className="px-4 py-3 text-sm text-gray-600">No matches. Try another keyword.</li>
          : results.map((row) => (
              <li key={`${row.collection}-${row.slug}`} role="option">
                <Link
                  href={articlePath(row)}
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setQuery("")}
                >
                  <span className="font-medium text-gray-900">{highlightTitle(row.title, debouncedQuery)}</span>
                  <span className="mt-0.5 line-clamp-2 block text-sm text-gray-600">{row.summary}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
