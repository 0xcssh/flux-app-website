import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, APP_STORE_URL } from "./constants";

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
