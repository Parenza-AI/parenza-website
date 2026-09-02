/**
 * Page content. Kept out of components so copy can be reviewed in one place.
 *
 * Product facts here are taken from the running Parenza system (agent roster,
 * routine definitions, knowledge-base structure) — not from a roadmap. If a
 * capability is not live, it does not belong in this file.
 */

export const PROBLEM_POINTS = [
  {
    title: "Advice written for the average child",
    body: "Guidance assumes a baby you don't have: a different age, a different weight curve, a different feeding history. You do the translation yourself, at 3am.",
  },
  {
    title: "Two sources, opposite answers",
    body: "Neither one knows what you tried last week, what your health visitor said, or how the last three nights actually went — so neither can tell you which answer applies to you.",
  },
  {
    title: "Nothing joins up",
    body: "Feeding sits in one app, sleep in another, medical notes in a folder, nursery and school decisions in your head. The decisions that matter cut across all four.",
  },
  {
    title: "Your own record goes nowhere",
    body: "Months of logging turn into charts you scroll past, instead of context that makes the next answer better.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Your family record builds itself",
    body: "Log feeds, sleep, nappies, growth and health as they happen — or build your own routine, with the fields it actually needs. Every entry lands in a structured record alongside your family profile, household facts, principles and a decision log — a knowledge base, not a chart.",
  },
  {
    step: "02",
    title: "Specialists reason over it",
    body: "A panel of agents with defined remits — feeding, sleep, medical, psychology, education, and more — reads your actual context before it answers, and works from established guidance rather than opinion.",
  },
  {
    step: "03",
    title: "A Chief of Staff synthesizes",
    body: "One layer sits above the panel: it routes the question, reconciles the specialists who disagree, and returns a short answer with recommended actions, who informed it, and what to log as a decision.",
  },
  {
    step: "04",
    title: "Use it wherever you think",
    body: "Open the Parenza app, or connect Parenza to the AI you already use. Over MCP, your Claude or ChatGPT can read your family's context and put the same questions to the same panel.",
  },
] as const;

/**
 * The live agent roster (10 specialists + the Chief of Staff synthesis layer).
 * Descriptions are condensed from each agent's own remit — including the
 * limits each one states about itself.
 */
export const SPECIALISTS = [
  {
    name: "Feeding",
    body: "Breast and formula, latch and supply, weaning timing, reflux versus normal posseting. NHS-aligned, and explicit about when to escalate.",
  },
  {
    name: "Sleep",
    body: "Safe sleep first — the Lullaby Trust checklist, age-appropriate expectations, and one change at a time rather than five stacked at once.",
  },
  {
    name: "Medical",
    body: "Urgency triage, the vaccination schedule, home versus GP. It does not diagnose or prescribe; it tells you which tier a symptom sits in and what to do next.",
  },
  {
    name: "Psychology",
    body: "Perinatal and infant mental health — what's normal adjustment, what's a signal to get help, and the referral route. Not a therapist, and clear about it.",
  },
  {
    name: "Education planning",
    body: "Long-horizon learning staged by age, with no admissions promises and no flashcards in infancy.",
  },
  {
    name: "Cognitive skills",
    body: "Reasoning, structured thinking and speaking as their own thread, separate from school curriculum and sport — gated to what's developmentally appropriate.",
  },
  {
    name: "Sports & enrichment",
    body: "Age-appropriate movement and activity, exposure before specialization, and a refusal when the training is ahead of the child.",
  },
  {
    name: "Wealth & estate planning",
    body: "Frameworks and questions — education funding, JISA and pension concepts, wills and guardianship prompts. Not regulated financial advice, and it flags when you need a professional.",
  },
  {
    name: "Social capital",
    body: "Schools, networks and cultural navigation for a family with roots in more than one country — without turning childhood into a status project.",
  },
  {
    name: "Local concierge",
    body: "The admin nobody warns you about: registering a birth, registering with a GP, nursery waitlist timing, council services.",
  },
] as const;

export const MCP_POINTS = [
  {
    title: "It's a connection, not another app",
    body: "You paste one endpoint into Claude, ChatGPT, Cursor or Claude Code. From then on, that assistant can ask Parenza about your family — the same way it reads a file you've shared with it.",
  },
  {
    title: "Your assistant stops guessing",
    body: "Instead of answering from the average case, it can look up when your child last fed, how the past week of sleep went, and what you already decided and why.",
  },
  {
    title: "You control the connection",
    body: "You choose whether to connect at all, and you can disconnect. Nothing leaves Parenza until your assistant asks for it — and only the data that answers the question.",
  },
] as const;

/**
 * Routine definitions as they exist in the product today, with the kind each
 * one is built on. Names, kinds and accents are the live definitions; the meta
 * line is an illustrative last-entry summary in the shape the app renders.
 */
export const ROUTINES = [
  { name: "Sleeping", kind: "Timed", meta: "Running · 1h 12m", accent: "info" },
  {
    name: "Feeding",
    kind: "Timed",
    meta: "Bottle (formula) · 90 ml · 18m",
    accent: "danger",
  },
  { name: "Diaper", kind: "Moment", meta: "Wet, dirty · yellow", accent: "warning" },
  { name: "Pumping", kind: "Timed", meta: "160 ml · 15m", accent: "purple" },
  { name: "Growth", kind: "Moment", meta: "4,100 g · 55 cm", accent: "green" },
  { name: "Health", kind: "Moment", meta: "Medical · prescription", accent: "info" },
  { name: "Shopping list", kind: "To-do", meta: "2 open", accent: "pink" },
] as const;

/**
 * The three shapes a routine can take. Labels and descriptions are the app's
 * own — a family builds its own routines out of these.
 */
export const ROUTINE_KINDS = [
  {
    name: "Moment",
    body: "Recorded at a single point in time — a weight, a temperature, a nappy.",
  },
  {
    name: "Timed",
    body: "Has a start and a stop, so it has a duration — a feed, a nap, a pumping session.",
  },
  {
    name: "To-do",
    body: "Something to act on later; stays open until you mark it done.",
  },
] as const;

/**
 * Documents that exist in the running system, with the folder each one sits in.
 * A sample of the family record, not the whole of it.
 */
export const KNOWLEDGE_DOCS = [
  { folder: "Context", title: "Family profile", status: "Published" },
  { folder: "Context", title: "Current status", status: "Published" },
  { folder: "Context", title: "Language plan (bilingual)", status: "Published" },
  { folder: "Parenting", title: "Parenting principles", status: "Published" },
  { folder: "Milestones", title: "Feeding and sleep milestones", status: "Published" },
  { folder: "Knowledge", title: "Medications", status: "Published" },
  { folder: "Decisions", title: "Decision log", status: "Published" },
  { folder: "Context", title: "Antenatal history", status: "Draft" },
] as const;

/**
 * What the app does with a log once it has one. Every point here is a shipped
 * behaviour in the running app — checked against the code, not the roadmap.
 */
export const CAPTURE_POINTS = [
  {
    title: "Started, or ended",
    body: "A feed you are starting runs a timer. A feed that has just finished doesn't need one: tap Ended and Parenza works the start time backwards from how long your feeds actually run. One tap, no arithmetic at 3am.",
  },
  {
    title: "The form knows what it is asking",
    body: "Amount appears for a bottle and not for a breastfeed. Side appears for a breastfeed and not for a bottle. Colour appears once a nappy is dirty. You see the fields that apply and nothing else.",
  },
  {
    title: "Time you didn't have to type",
    body: "Today defaults to now, yesterday is one tap, and an overnight sleep can cross midnight without a fight. If two entries overlap, the app trims them rather than rejecting your log.",
  },
  {
    title: "A week you can see the shape of",
    body: "Day, week, month and agenda views over the same entries. Drag one to correct a time you logged late. Stats over a day, a week or a month put totals and averages next to the period before.",
  },
  {
    title: "Findable in either language",
    body: "Search spans routines, entries and documents, indexed both for English word forms and for exact tokens — so a note written in Russian inside an otherwise English record still comes back.",
  },
  {
    title: "Built to be your child's, not your account's",
    body: "The app carries your child's name, photo and live age — 6w 3d — at the top of every screen. The photo is cropped and shrunk in your own browser before it is sent, which removes the GPS coordinates a phone photo carries.",
  },
] as const;

/**
 * Shipped UI languages. Each is a complete translation of the same string tree,
 * not a partial overlay.
 */
export const LANGUAGES = ["English", "Russian", "German", "Spanish", "French"] as const;

export const TRUST_TEASER = [
  {
    title: "Children's health data, treated as such",
    body: "Your family's record is stored per-family and scoped to your account. It is not sold, and it is not used to advertise to you.",
  },
  {
    title: "In progress, stated plainly",
    body: "We are working through a formal Data Protection Impact Assessment and ICO registration before we onboard families beyond the design-partner cohort. We are not claiming certifications we don't hold.",
  },
  {
    title: "You can see the mechanism",
    body: "When you connect your own AI assistant, we explain exactly what leaves Parenza and when — because a novel mechanism deserves more than a paragraph in a policy.",
  },
] as const;

export const DESIGN_PARTNER_BENEFITS = [
  {
    title: "A small cohort, not a launch list",
    body: "We are onboarding a handful of families we can work with directly. If that isn't a fit right now, say so in the form and we'll keep you for general access instead.",
  },
  {
    title: "You shape the panel",
    body: "Design partners tell us which specialists matter, where the synthesis is wrong, and what a useful daily brief actually looks like.",
  },
  {
    title: "Honest about the stage",
    body: "Pre-launch. No billing, no public signup, and no promises about a date we haven't earned.",
  },
] as const;

export const CHILD_AGE_OPTIONS = [
  "Expecting",
  "0–3 months",
  "3–6 months",
  "6–12 months",
  "1–2 years",
  "2–4 years",
  "4+ years",
] as const;
