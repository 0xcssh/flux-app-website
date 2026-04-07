import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Blog — Men's Health & Hormonal Science",
  description:
    "Science-backed articles on testosterone, circadian rhythms, sleep, nutrition, and male hormonal optimization. No bro science.",
};

function BlogContent({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category;
  const posts = category ? getPostsByCategory(category) : getAllPosts();

  return (
    <>
      {posts.length === 0 ? (
        <p className="text-center text-flux-muted py-20">
          No articles yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Flux Blog
          </h1>
          <p className="text-lg text-flux-muted">
            Science-backed insights on men&apos;s hormonal health, performance, and
            optimization.
          </p>
        </div>

        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>

        <BlogContent searchParams={params} />
      </div>
      <Footer />
    </>
  );
}
