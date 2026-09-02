/**
 * Centralized site metadata, routes, and facts.
 * Single source of truth for SEO helpers, JSON-LD, and components.
 */

export const SITE_URL = "https://parenza.ai";

export const SITE = {
  name: "Parenza",
  legalName: "Parenza",
  title: "Parenza — Parenting decision support, in your own AI or ours",
  description:
    "Parenza keeps a structured record of your family, puts a panel of specialist agents to work on it — feeding, sleep, medical, education, money — and returns one synthesized answer. Use it in the Parenza app, or inside your own Claude or ChatGPT over MCP.",
  ogTitle: "Parenza — The parenting app that thinks with you",
  ogDescription:
    "A structured family knowledge base, a panel of specialist agents, and a Chief of Staff that synthesizes their input into one clear answer — in your own AI, or ours.",
  twitterDescription:
    "Decision support for parents who want reasoning, not reassurance. Specialist agents over your family's own record — usable inside the AI you already have.",
  locale: "en_GB",
  foundingDate: "2026",
} as const;

export const KEYWORDS = [
  "parenting decision support",
  "AI parenting assistant",
  "family knowledge base",
  "specialist AI agents",
  "MCP parenting",
  "infant feeding guidance",
  "infant sleep guidance",
  "education planning",
  "data driven parenting",
  "parenting app for professionals",
];

export const CONTACT_EMAIL = "hello@parenza.ai";
export const SECURITY_EMAIL = "security@parenza.ai";

/** SHIP supplies the platform Parenza runs on (app, API, agents, MCP). */
export const SHIP_URL = "https://shipplatform.ai";

/** Founder facts used on /about and the homepage founder section. */
export const FOUNDER = {
  name: "Anton Batiaev",
  site: "https://batiaev.com",
  role: "VP Product & Engineering, Capital.com",
} as const;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/parenza/",
};

export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "The panel", href: "/#panel" },
  { label: "In your own AI", href: "/#mcp" },
  { label: "Trust", href: "/trust" },
  { label: "Why", href: "/about" },
];

export const EARLY_ACCESS_BANNER =
  "Pre-launch — recruiting a small design-partner cohort of families for autumn 2026.";

/**
 * Verified counts from the running system as of 2 September 2026 — the founder's
 * own family record, not a user-base claim. Re-check before editing these.
 *
 * - routineEntries: sum of entryCount across the eight live routine definitions.
 * - knowledgeDocs: family documents only (context, parenting, knowledge/*,
 *   milestones, sources, decisions, agent roster). The tenant also holds
 *   business documents; those are deliberately not counted here.
 * - locales: shipped UI languages, each a complete translation of the same
 *   string tree (en, ru, de, es, fr).
 */
export const FACTS = {
  routineEntries: "1,300+",
  knowledgeDocs: 44,
  specialists: 10,
  locales: 5,
  since: "July 2026",
} as const;

/** Public env (inlined at build). Empty string disables submission. */
export const PARENZA_API_BASE = (
  import.meta.env.PUBLIC_PARENZA_API_URL ?? ""
).replace(/\/$/, "");
