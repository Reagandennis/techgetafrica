import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  content: string;
  className?: string;
};

/**
 * Minimal Markdown-lite renderer for blog post bodies.
 * Supports:
 *   - `## ` headings (rendered as h2)
 *   - Blank-line-separated paragraphs
 *   - `**bold**` inline emphasis
 *
 * The post bodies in src/data/posts.ts use this dialect.
 */
export function Prose({ content, className }: Props) {
  const blocks = React.useMemo(
    () =>
      content
        .split(/\n{2,}/)
        .map((b) => b.trim())
        .filter(Boolean),
    [content],
  );

  return (
    <div
      className={cn(
        "max-w-none space-y-6 text-[17px] leading-[1.75] text-ink-soft",
        className,
      )}
    >
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-12 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl"
            >
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }
        return (
          <p key={i}>
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}

function renderInline(text: string) {
  const nodes: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <strong key={`b-${key++}`} className="font-semibold text-ink">
        {match[1]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
