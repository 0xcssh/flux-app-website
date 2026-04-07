import type { BlogPost } from "@/lib/blog";
import AppStoreButton from "@/components/ui/AppStoreButton";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  Science: "bg-flux-blue/10 text-flux-blue",
  Lifestyle: "bg-flux-green/10 text-flux-green",
  Performance: "bg-flux-amber/10 text-flux-amber",
  Sleep: "bg-purple-500/10 text-purple-400",
  Nutrition: "bg-emerald-500/10 text-emerald-400",
  "Mental Health": "bg-pink-500/10 text-pink-400",
};

export default function ArticleLayout({ post }: { post: BlogPost }) {
  const colorClass = categoryColors[post.category] || categoryColors.Science;

  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-20">
      {/* Back */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-flux-muted hover:text-white transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-flux-muted">{post.readingTime}</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mb-4 text-lg text-flux-muted">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-flux-muted">
          <span>{post.author}</span>
          <span>&middot;</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-p:text-flux-muted prose-p:leading-relaxed
          prose-a:text-flux-blue prose-a:no-underline hover:prose-a:underline
          prose-strong:text-flux-text
          prose-li:text-flux-muted
          prose-blockquote:border-flux-blue prose-blockquote:text-flux-muted
          prose-hr:border-flux-border"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-flux-blue/20 bg-gradient-to-br from-flux-blue/10 via-flux-surface to-flux-surface p-8 text-center sm:p-12">
        <h3 className="mb-2 text-xl font-bold text-white">
          Track Your Own Hormonal Rhythm
        </h3>
        <p className="mb-6 text-flux-muted">
          60 seconds a day. Free to use. Built on the science you just read.
        </p>
        <AppStoreButton />
      </div>
    </article>
  );
}
