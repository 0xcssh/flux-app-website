import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Science: "bg-flux-blue/10 text-flux-blue",
  Lifestyle: "bg-flux-green/10 text-flux-green",
  Performance: "bg-flux-amber/10 text-flux-amber",
  Sleep: "bg-purple-500/10 text-purple-400",
  Nutrition: "bg-emerald-500/10 text-emerald-400",
  "Mental Health": "bg-pink-500/10 text-pink-400",
};

export default function ArticleCard({ post }: { post: BlogPostMeta }) {
  const colorClass = categoryColors[post.category] || categoryColors.Science;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-flux-border bg-flux-card p-6 transition-all duration-300 hover:border-flux-blue/30 glow-blue-hover"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}>
          {post.category}
        </span>
        <span className="text-xs text-flux-muted">{post.readingTime}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-flux-blue transition-colors">
        {post.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-flux-muted line-clamp-2">
        {post.description}
      </p>
      <div className="flex items-center justify-between text-xs text-flux-muted">
        <span>{post.author}</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
