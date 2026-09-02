# Parenza — Website Build Prompt

Use this as a single detailed brief for an AI website builder (v0, Lovable, bolt.new, Claude Code, Cursor, etc.) or a human designer/developer. It consolidates the brand positioning, visual system, page structure, and copy direction established for Parenza.

---

## 1. Brand brief (paste this first for context)

```
Parenza is an AI-powered parenting decision-support system — not a baby tracker.
It combines a structured, constantly-updated family knowledge base with a panel of
specialist AI agents (feeding, sleep, medical, education, financial planning) and a
"Chief of Staff" layer that synthesizes their input into clear, actionable guidance.

Positioning: "the parenting app that thinks with you, in your own AI or ours."
Key differentiator: Parenza is exposed via MCP (Model Context Protocol), so a family
can use it directly inside their own Claude or ChatGPT, not just inside a proprietary
app — infrastructure, not just another app to download.

Brand personality: composed, trustworthy, intelligent, precise — closer to a premium
fintech/productivity brand (Stripe, Ramp, Linear, Revolut) than a typical pastel baby
app. Warmth comes from clarity and competence, not cuteness. Built for data-driven,
framework-minded, professional parents who want rigor applied to parenting decisions,
not reassurance-only advice.

Explicitly avoid: baby clichés (storks, teddy bears, rattles), pastel rainbow palettes,
cursive/script logos, cartoon mascots, saccharine "mommy blog" tone, and anything that
reads as a diary/tracker app rather than a decision-support system.

Current stage: pre-launch, recruiting a small design-partner cohort of real families.
This is NOT a fully self-serve signup site yet — no live billing, no public account
creation. Primary goal of the site is credibility + a waitlist/early-access capture,
not conversion to paid signup.
```

---

## 2. Visual system (reuse across every page)

```
Color palette:
- Primary: warm terracotta/amber (#C7794F or similar muted terracotta)
- Secondary: muted sage green (#7C9A82 or similar)
- Text/dark mode base: warm charcoal (#2B2521 or similar, NOT pure black)
- Background: soft cream/off-white (#FAF6EF or similar, NOT pure white)
- Accent: dusty rose, soft warm gray for neutral UI elements
- Explicitly avoid: bright primary colors, baby pastels (pink/baby-blue/mint), neon

Typography:
- Headlines: a confident modern serif with editorial warmth (e.g. a Georgia/Iowan
  Old Style/Tiempos-like feel) — NOT a rounded, playful, or script font
- Body/UI: a clean humanist sans-serif (e.g. Inter, Söhne, or similar)
- Generous whitespace, editorial magazine feel rather than dense SaaS-dashboard feel

Layout/tone references: Linear, Ramp, Stripe, Notion marketing sites — clean,
confident, precise, minimal ornamentation, real product screenshots over stock
illustration wherever possible.
```

---

## 3. Site goals for this build

1. Establish credibility fast — this audience is skeptical, framework-minded professionals, not impulse downloaders.
2. Clearly communicate the "decision-support system, not a tracker" positioning within the first screen.
3. Explain the specialist-agent-panel + MCP differentiator in plain language, without requiring the visitor to already know what MCP is.
4. Capture design-partner / early-access signups — this is the primary conversion goal, not a paid signup or app download.
5. Include a genuinely honest security/trust page — do NOT claim certifications, DPIA completion, or ICO registration that hasn't happened yet. Use accurate, in-progress language (see Section 6).

---

## 4. Page structure & section-by-section content brief

### Homepage
- **Hero:** Headline stating the core positioning in one sentence (e.g. "The parenting app that thinks with you — in your own AI, or ours"). Subhead explaining the specialist-panel + synthesis concept in one more sentence. Primary CTA: "Request early access" (waitlist form, not signup). Secondary CTA: "See how it works" (scrolls to next section).
- **Problem framing section:** Briefly name the problem this solves — parents drowning in generic advice, contradictory Google searches, no synthesis across feeding/sleep/medical/education decisions. Keep this short and factual, not fear-based or alarmist.
- **How it works (3–4 step visual):** (1) Your family's structured knowledge base grows as you log routines and decisions. (2) A panel of specialist AI agents reasons over that context. (3) A Chief-of-Staff layer synthesizes it into a clear daily/weekly brief. (4) Access it in your own Claude/ChatGPT via MCP, or in the Parenza app directly.
- **Specialist panel showcase:** Visual grid or list of the specialist areas (feeding, sleep, medical, education planning, financial planning, etc.) — treat this like a "meet the team" section but for AI specialists, professional tone not cartoonish avatars.
- **The MCP differentiator, explained simply:** A dedicated section explaining "use it inside the AI you already have" without assuming technical knowledge — analogy-driven copy (e.g. "like giving your existing AI assistant a permanent, up-to-date briefing on your family").
- **Trust/security teaser:** Short section linking to the full Trust & Security page (see below) — a visible trust signal given the category (children's health data).
- **Early-access / design-partner signup form:** Name, email, child's age (optional), a short "why are you interested" free-text field. Explicitly frame this as a small early cohort, not a general waitlist — reinforces credibility/exclusivity honestly rather than implying scale that doesn't exist yet.
- **Footer:** Links to Trust & Security, Privacy Policy, Terms (placeholder pages acceptable if not finalized — mark clearly as "in progress" rather than faking content), contact.

### Trust & Security page (important — build this honestly)
- Explain data handling in plain language: what's collected, why, how it's stored.
- Be explicit and honest about current compliance stage — e.g. "We are completing a formal Data Protection Impact Assessment and ICO registration ahead of onboarding families outside our design-partner cohort" rather than claiming compliance that isn't yet in place.
- Explain the MCP data-sharing model specifically: when a family connects their own Claude/ChatGPT, what data leaves Parenza's systems and why — this needs to be unusually clear given it's a novel mechanism most visitors won't have seen before.
- No fake badges, no fabricated certification logos.

### About / Why Parenza page (optional but recommended)
- Founder story: built out of a real, structured system used for the founder's own child, generalized into a product — this is a genuinely strong, credible origin story for this specific audience. Keep it factual, not sentimental.

---

## 5. Copywriting tone guardrails

- Confident, precise, second-person, active voice — "you get a clear answer," not "parents may find value in receiving guidance."
- No baby-talk, no exclamation-point enthusiasm, no "journey" clichés.
- Never claim clinical/medical authority the product doesn't have — frame specialist agents as synthesizing established guidance (NHS-aligned, etc.), not as a replacement for a doctor.
- Avoid comparison-bait language ("better than Huckleberry") — let the positioning stand on its own.

---

## 6. Technical requirements

- Stack preference: React/TypeScript (consistent with the existing Parenza/Cradlyn product codebase), Next.js static export or similar acceptable for a fast-loading marketing site.
- Fully responsive — mobile-first, since most visitors will arrive via social/press links on mobile.
- Real, working waitlist form with backend capture (even a simple email-collection endpoint) — this is the actual conversion goal of the site, must function.
- Accessible (proper heading hierarchy, contrast ratios respecting the muted palette, alt text).
- Fast load — minimal JS bloat, optimize images, no heavy animation libraries needed for a credibility-focused B2C-professional audience.
- No fabricated user testimonials, review counts, or "trusted by X families" claims until real numbers exist.

---

### Notes for whoever builds this
- This is a pre-launch credibility site, not a full product marketing site — resist the urge to overbuild pricing pages, feature comparison tables, or anything implying a mature, scaled product.
- If asked for a tagline shorter than the hero headline above, keep it in the same register: precise and confident, not cute.
