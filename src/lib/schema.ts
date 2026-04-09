import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, APP_STORE_URL } from "./constants";
import type { BlogPostMeta } from "./blog";

export function generateAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    url: SITE_URL,
    installUrl: APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Meara",
      url: "https://meara.fr",
    },
  };
}

export function generateArticleSchema(post: BlogPostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Flux",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Meara",
      url: "https://meara.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: "Meara",
    },
  };
}
