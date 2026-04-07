import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "..", "content", "blog");

const CATEGORIES = [
  "Science",
  "Lifestyle",
  "Performance",
  "Sleep",
  "Nutrition",
  "Mental Health",
];

const KEYWORD_POOL = [
  "what time does testosterone peak in men",
  "do men have hormonal cycles like women",
  "how does sleep affect testosterone levels",
  "best time to workout for testosterone",
  "testosterone and mood swings in men",
  "how to increase testosterone naturally",
  "circadian rhythm and male performance",
  "does nofap increase testosterone",
  "testosterone decline after 30",
  "morning routine for hormonal health",
  "how stress affects male hormones",
  "seasonal testosterone variation men",
  "testosterone and coffee timing",
  "best foods for testosterone production",
  "how exercise affects testosterone levels",
  "male energy fluctuations throughout the day",
  "testosterone and decision making",
  "why am I tired in the afternoon male",
  "hormonal optimization for men",
  "testosterone and sleep quality connection",
  "cold exposure testosterone benefits",
  "intermittent fasting testosterone effects",
  "vitamin d testosterone connection",
  "zinc and testosterone production",
  "alcohol effects on testosterone",
  "cortisol testosterone relationship",
  "testosterone and mental clarity",
  "optimal protein intake testosterone",
  "sunlight exposure and male hormones",
  "testosterone and aging what to expect",
  "meditation effects on testosterone",
  "sugar and testosterone levels",
  "testosterone and body composition",
  "how dehydration affects hormones",
  "testosterone boosting supplements truth",
  "overtraining and testosterone decline",
  "testosterone and social behavior",
  "sleep apnea testosterone connection",
  "testosterone and cardiovascular health",
  "male fertility and hormonal cycles",
];

function getExistingArticles() {
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
    return [];
  }
  return fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
}

function pickKeyword(existing) {
  const existingSlugs = existing.map((f) => f.replace(/\.md$/, ""));
  const available = KEYWORD_POOL.filter((kw) => {
    const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return !existingSlugs.includes(slug);
  });

  if (available.length === 0) {
    // Generate a variation
    const randomKw = KEYWORD_POOL[Math.floor(Math.random() * KEYWORD_POOL.length)];
    return `${randomKw} guide ${new Date().getFullYear()}`;
  }

  return available[Math.floor(Math.random() * available.length)];
}

async function generateArticle(keyword) {
  const client = new Anthropic();

  const today = new Date().toISOString().split("T")[0];
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

  const existing = getExistingArticles();
  const existingSlugs = existing.map((f) => f.replace(/\.md$/, ""));
  const internalLinks = existingSlugs
    .map((slug) => `/blog/${slug}`)
    .join(", ");

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `Write a blog article about "${keyword}" for Flux, a men's hormonal cycle tracking app.

REQUIREMENTS:
- 1200-1800 words
- Scientific, evidence-based tone. Cite real studies with author names and years.
- Never use "bro science" or unsubstantiated claims
- Target the keyword "${keyword}" naturally throughout the article
- Use H2 (##) and H3 (###) headings for structure
- Include a section at the end about how Flux helps with this topic
- Include 2-3 internal links to existing articles: ${internalLinks || "none yet"}
- End with a sources list

FORMAT: Output ONLY the markdown file content starting with the frontmatter block. No explanation before or after.

FRONTMATTER FORMAT:
---
title: "Article Title Here"
description: "150-character SEO description targeting the keyword"
date: "${today}"
category: "${category}"
keywords: ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
author: "Flux Team"
---

Write the article content here with proper markdown formatting.`,
      },
    ],
  });

  const content = message.content[0].text;

  // Extract title from frontmatter to create slug
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : keyword;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const filePath = path.join(contentDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    console.log(`Article already exists: ${slug}.md — skipping.`);
    return null;
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Generated: ${slug}.md`);
  return slug;
}

async function main() {
  const existing = getExistingArticles();
  console.log(`Existing articles: ${existing.length}`);

  const keyword = pickKeyword(existing);
  console.log(`Selected keyword: "${keyword}"`);

  try {
    const slug = await generateArticle(keyword);
    if (slug) {
      console.log(`Successfully generated article: ${slug}`);
    }
  } catch (error) {
    console.error("Failed to generate article:", error.message);
    process.exit(1);
  }
}

main();
