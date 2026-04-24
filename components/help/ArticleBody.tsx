import { replaceTokens } from "@/lib/help/replace-tokens";
import { HelpMarkdownBody } from "@/lib/help/help-markdown";
import { MediaPlaceholder } from "@/components/help/MediaPlaceholder";
import { splitMediaPlaceholders } from "@/lib/help/split-media-placeholders";

export function ArticleBody({ markdown }: { markdown: string }) {
  const replaced = replaceTokens(markdown);
  const segments = splitMediaPlaceholders(replaced);

  return (
    <div className="help-article-body prose prose-lg max-w-none text-gray-800 prose-headings:scroll-mt-24 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline">
      {segments.map((seg, i) =>
        seg.type === "md" ?
          <HelpMarkdownBody key={i} markdown={seg.text} bare />
        : <MediaPlaceholder key={i} kind={seg.kind} label={seg.label} />
      )}
    </div>
  );
}
