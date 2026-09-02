/**
 * JSON-LD builders. Only factual, on-page claims — no ratings, reviews,
 * prices, or user-count assertions.
 */
import { SITE, SITE_URL, SOCIALS } from "../consts";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    description:
      "Parenza is a parenting decision-support system: a structured family knowledge base, a panel of specialist AI agents, and a Chief of Staff layer that synthesizes their input into clear guidance — usable in the Parenza app or inside a family's own AI assistant over MCP.",
    foundingDate: SITE.foundingDate,
    sameAs: [SOCIALS.linkedin],
    knowsAbout: [
      "Parenting decision support",
      "Infant feeding guidance",
      "Infant sleep guidance",
      "Family knowledge base",
      "Model Context Protocol",
      "Education planning",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE_URL },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).href,
    })),
  };
}
