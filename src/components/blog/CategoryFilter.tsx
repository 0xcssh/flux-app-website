"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "All",
  "Science",
  "Lifestyle",
  "Performance",
  "Sleep",
  "Nutrition",
  "Mental Health",
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "All";

  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if (cat === "All") {
              params.delete("category");
            } else {
              params.set("category", cat);
            }
            router.push(`/blog?${params.toString()}`);
          }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-flux-blue text-white"
              : "bg-flux-card text-flux-muted hover:text-white border border-flux-border"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
