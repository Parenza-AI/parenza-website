/**
 * Single source for the /trust page.
 *
 * Rule for this file: nothing is marked `in-place` unless it is implemented and
 * verifiable in the running system today. Statuses were checked against the
 * platform Parenza runs on (API, app, MCP server, infrastructure) — not against
 * a roadmap document. Where a control is partially there, it says so.
 */

export type ControlStatus = "in-place" | "in-progress" | "planned";

export const STATUS_LABEL: Record<ControlStatus, string> = {
  "in-place": "In place",
  "in-progress": "In progress",
  planned: "Planned",
};

export const LAST_REVIEWED = "23 August 2026";

export const HONEST_VERSION =
  "Parenza is not SOC 2 or ISO 27001 certified, has not completed a Data Protection Impact Assessment, and is not registered with the ICO yet. Formal work is under way and dated below. What exists today is the part a certificate is meant to prove — the controls in this page, each with its real status, built by someone who has been through these audits from the inside. We will not display a badge we do not hold.";

export interface FrameworkArea {
  area: string;
  status: ControlStatus;
  note: string;
}

export interface Framework {
  name: string;
  status: string;
  summary: string;
  areas: FrameworkArea[];
}

export const FRAMEWORKS: Framework[] = [
  {
    name: "UK GDPR & Data Protection Act 2018",
    status: "In force today",
    summary:
      "The one set of obligations that already applies to us, and the backbone of the promise that this record is yours. Rights are meant to be product features, not an inbox — some already are, and the rest are dated.",
    areas: [
      {
        area: "Lawful basis & minimisation (Art. 5/6)",
        status: "in-place",
        note: "We collect what you choose to log and what the panel needs to answer you. No advertising identifiers, no data brokers, no third-party analytics in the product.",
      },
      {
        area: "Right of access & portability (Art. 15/20)",
        status: "in-progress",
        note: "Export is produced for you on request today; a self-serve machine-readable export is in development.",
      },
      {
        area: "Rectification (Art. 16)",
        status: "in-place",
        note: "Every routine entry and knowledge document is editable in the app.",
      },
      {
        area: "Erasure (Art. 17)",
        status: "in-progress",
        note: "Honoured on request within 30 days today, actioned by a person; automated cascade deletion is being built before general access.",
      },
      {
        area: "Records of processing (Art. 30)",
        status: "in-progress",
        note: "Being written as part of the DPIA, alongside the retention schedule.",
      },
      {
        area: "DPIA for high-risk processing (Art. 35)",
        status: "in-progress",
        note: "Required because this is children's health data. In progress; completion is a gate on onboarding beyond the design-partner cohort.",
      },
      {
        area: "Breach notification (Art. 33/34)",
        status: "in-progress",
        note: "The 72-hour ICO clock and the family-notification path are written into the incident plan; the plan has not been exercised yet.",
      },
      {
        area: "ICO registration",
        status: "planned",
        note: "Before general availability, with the DPIA.",
      },
    ],
  },
  {
    name: "ICO Children's Code (Age Appropriate Design)",
    status: "Designed to · self-assessment in progress",
    summary:
      "Parenza holds data about a child who cannot consent, entered by a parent who can. The Code's standards are the sharpest test of this product's design, so they get their own row.",
    areas: [
      {
        area: "Best interests of the child",
        status: "in-place",
        note: "Specialists are built to refuse age-inappropriate advice and to hand you to a clinician rather than answer past their remit.",
      },
      {
        area: "Data minimisation",
        status: "in-place",
        note: "Nothing about the child is collected automatically. Every entry is one a parent chose to make.",
      },
      {
        area: "No profiling for commercial purposes",
        status: "in-place",
        note: "No advertising, no selling of data, no behavioural profiling. Reasoning happens only in answer to a question you asked.",
      },
      {
        area: "Detriment & nudge techniques",
        status: "in-place",
        note: "No streaks, no guilt mechanics, no engagement-maximising notifications. Missing a day of logging costs you nothing.",
      },
      {
        area: "Formal Code self-assessment",
        status: "in-progress",
        note: "Documented alongside the DPIA.",
      },
    ],
  },
  {
    name: "SOC 2 — Trust Services Criteria",
    status: "Designed to · audit when there is a business to audit",
    summary:
      "A Type II report needs months of operating evidence from a real company. That evidence trail is being built now; the architecture it will be tested against already exists.",
    areas: [
      {
        area: "Logical access (CC6)",
        status: "in-place",
        note: "Federated sign-in with no password database, per-family scoping enforced at the query layer, least-privilege service credentials.",
      },
      {
        area: "Change management (CC8)",
        status: "in-place",
        note: "Contract-first API, generated clients, CI gates on lint, types and tests, infrastructure as code — no hand-edits in production.",
      },
      {
        area: "System operations & monitoring (CC7)",
        status: "in-progress",
        note: "Health checks and an audit trail for AI tool calls are live; centralised alerting across the whole surface is not finished.",
      },
      {
        area: "Risk & vendor management (CC3/CC9)",
        status: "in-progress",
        note: "Subprocessor register is published below; a formal risk register is being maintained as part of the DPIA work.",
      },
      {
        area: "Confidentiality (C1)",
        status: "in-place",
        note: "Per-family isolation, credentials encrypted at the application layer, secrets outside source control with separate keys per environment.",
      },
      {
        area: "Availability (A1)",
        status: "in-progress",
        note: "Nightly automated backups run to separate storage; scheduled restore testing with published RPO/RTO targets is the next resilience item.",
      },
    ],
  },
  {
    name: "ISO/IEC 27001:2022",
    status: "Designed to · certification with productization",
    summary:
      "An ISMS scaled honestly to a company of this size: the Annex A technological controls implemented in code rather than described in a binder, with the organisational half still being written.",
    areas: [
      {
        area: "Organizational & people controls (A.5/A.6)",
        status: "in-progress",
        note: "Policy set is being adapted from the platform's existing compliance documentation to Parenza's own scope.",
      },
      {
        area: "Identity & access (A.5.15–A.5.18)",
        status: "in-place",
        note: "Federated identity, scoped tokens, per-client authorization for AI assistants, revocable individually.",
      },
      {
        area: "Cryptography (A.8.24)",
        status: "in-place",
        note: "TLS on every public endpoint; stored third-party credentials encrypted at the application layer with keys held outside the repository.",
      },
      {
        area: "Logging & monitoring (A.8.15/A.8.16)",
        status: "in-progress",
        note: "Every AI tool call against your family's data is logged with actor, tool and timestamp. Coverage of ordinary app actions is being extended to match.",
      },
      {
        area: "Secure development (A.8.25–A.8.28)",
        status: "in-place",
        note: "Typed, parameterized persistence; validation against a single API contract; review and CI gates before merge.",
      },
      {
        area: "Vulnerability management (A.8.8)",
        status: "in-progress",
        note: "Dependency auditing runs in the workspace; automated scanning and update policy across every repository is being rolled out.",
      },
    ],
  },
];

export interface ControlCategory {
  category: string;
  controls: { name: string; status: ControlStatus; note: string }[];
}

export const CONTROL_CATEGORIES: ControlCategory[] = [
  {
    category: "Access control",
    controls: [
      {
        name: "Passwordless sign-in",
        status: "in-place",
        note: "Google OAuth. Parenza never sees or stores a password, so there is no password database to breach.",
      },
      {
        name: "Multi-factor authentication",
        status: "in-place",
        note: "Delegated to your Google account — if MFA is on there, it protects Parenza. We do not offer a bypass.",
      },
      {
        name: "Per-family data isolation",
        status: "in-place",
        note: "Every read and write is scoped to your family's tenant at the query layer. There is no cross-family access path in the API.",
      },
      {
        name: "Per-client AI authorization",
        status: "in-place",
        note: "Each assistant you connect authorizes separately over OAuth and can be revoked on its own.",
      },
      {
        name: "Rate limiting on unauthenticated surfaces",
        status: "in-place",
        note: "The public OAuth endpoints are rate-limited per IP.",
      },
      {
        name: "Named, separated production access",
        status: "in-progress",
        note: "Operational access is limited to the founder today. Role separation is being formalised as the team grows.",
      },
    ],
  },
  {
    category: "Data security",
    controls: [
      {
        name: "Encryption in transit",
        status: "in-place",
        note: "TLS on every public endpoint, certificates issued and renewed automatically.",
      },
      {
        name: "Application-layer encryption of stored credentials",
        status: "in-place",
        note: "Third-party keys and tokens are encrypted before they are written, with the master key held outside source control and separate per environment.",
      },
      {
        name: "Automated backups",
        status: "in-place",
        note: "Nightly logical database backups, compressed and written to separate volume storage.",
      },
      {
        name: "Tested restores with published RPO/RTO",
        status: "in-progress",
        note: "Backups exist; a scheduled restore drill and published targets do not yet.",
      },
      {
        name: "Self-serve export",
        status: "in-progress",
        note: "Export is produced on request today; the one-click version is being built.",
      },
      {
        name: "Automated erasure & retention purge",
        status: "in-progress",
        note: "Deletion is honoured by a person on request; the automated cascade and a published retention schedule are in development.",
      },
    ],
  },
  {
    category: "Infrastructure",
    controls: [
      {
        name: "EU hosting",
        status: "in-place",
        note: "Application and database run on European infrastructure (Hetzner, Finland).",
      },
      {
        name: "Infrastructure as code",
        status: "in-place",
        note: "Servers, networking and volumes are declared in Terraform with remote state — not clicked together in a console.",
      },
      {
        name: "Secrets outside source control",
        status: "in-place",
        note: "No credentials in the repository or in images; a pre-commit check warns on secret-shaped strings.",
      },
      {
        name: "Private binding for data services",
        status: "in-place",
        note: "Database and cache are bound to private addresses, not exposed publicly.",
      },
      {
        name: "Environment separation",
        status: "in-progress",
        note: "Separate keys and configuration per environment today; fully separate infrastructure stacks are planned.",
      },
    ],
  },
  {
    category: "Application security",
    controls: [
      {
        name: "Contract-first validation",
        status: "in-place",
        note: "Every request is validated against a single API contract, and clients are generated from it rather than hand-written.",
      },
      {
        name: "Injection-safe persistence",
        status: "in-place",
        note: "Typed, parameterized queries only — no string-built SQL.",
      },
      {
        name: "Photo metadata stripped before upload",
        status: "in-place",
        note: "A child's photo added to the app is cropped and resized in your own browser before anything is sent. The re-encode keeps the pixels and discards the metadata, including the GPS coordinates a phone photo carries — for most families, their home address.",
      },
      {
        name: "Security headers & CSP",
        status: "in-progress",
        note: "Standard protective headers are sent; the Content Security Policy runs in report-only mode while auth flows are validated.",
      },
      {
        name: "Dependency auditing",
        status: "in-progress",
        note: "Audited on change today; scheduled automated scanning across every repository is being rolled out.",
      },
      {
        name: "External penetration test",
        status: "planned",
        note: "Commissioned before general availability. The summary will be published here.",
      },
    ],
  },
  {
    category: "AI & data governance",
    controls: [
      {
        name: "No training on your data",
        status: "in-place",
        note: "Model providers are used under terms that do not permit training on customer data. Your family's record is never a training set.",
      },
      {
        name: "Consent-gated assistant access",
        status: "in-place",
        note: "An outside assistant can reach your data only through a connection you created and can revoke.",
      },
      {
        name: "Audit trail for AI tool calls",
        status: "in-place",
        note: "Every tool call an assistant makes against your family's data is recorded with the account, the tool and the time.",
      },
      {
        name: "Scoped responses",
        status: "in-place",
        note: "A request returns the records that answer it — connecting does not hand over a copy of your whole record.",
      },
      {
        name: "Stated limits on advice",
        status: "in-place",
        note: "Each specialist carries a written remit and escalation rules; medical, psychological and financial questions are routed to professionals rather than answered past competence.",
      },
    ],
  },
  {
    category: "Organizational",
    controls: [
      {
        name: "Responsible disclosure",
        status: "in-place",
        note: "A published security.txt and a monitored address; reports go straight to the person who writes the code.",
      },
      {
        name: "Policy pack",
        status: "in-progress",
        note: "Adapted from the platform's existing compliance documentation to Parenza's scope. Available to design partners on request as sections are finished.",
      },
      {
        name: "Incident response plan",
        status: "in-progress",
        note: "Written, including the regulatory clock and the family-notification path. Not yet exercised.",
      },
      {
        name: "Subprocessor register",
        status: "in-place",
        note: "Published below and updated when it changes.",
      },
    ],
  },
];

/**
 * The policy pack behind this page. `platform` documents exist today for the
 * infrastructure Parenza runs on and can be shared on request; `drafting` ones
 * are the Parenza-specific versions still being written.
 */
export interface PolicyDoc {
  name: string;
  state: "platform" | "drafting";
}

export const DOCUMENTS: PolicyDoc[] = [
  { name: "Information Security Policy", state: "platform" },
  { name: "Access & Identity Policy", state: "platform" },
  { name: "Infrastructure & System Security Policy", state: "platform" },
  { name: "Backups, Logging & Recovery Policy", state: "platform" },
  { name: "Incident Response & Communication Plan", state: "platform" },
  { name: "Continuity & Resilience Plan", state: "platform" },
  { name: "Vendor & Third-Party Risk Policy", state: "platform" },
  { name: "Data Protection & Compliance Policy", state: "platform" },
  { name: "Detection & Monitoring Policy", state: "platform" },
  { name: "Data Protection Impact Assessment (children's data)", state: "drafting" },
  { name: "Record of Processing Activities (Art. 30)", state: "drafting" },
  { name: "Data Retention & Deletion Schedule", state: "drafting" },
  { name: "AI & Data Use Policy", state: "drafting" },
];

export const DOCUMENT_STATE_LABEL: Record<PolicyDoc["state"], string> = {
  platform: "On request",
  drafting: "In draft",
};

export interface Subprocessor {
  vendor: string;
  purpose: string;
  data: string;
  location: string;
}

export const SUBPROCESSORS: Subprocessor[] = [
  {
    vendor: "Hetzner Online",
    purpose: "Hosting — application servers, database, backup volumes",
    data: "All family data at rest",
    location: "Finland (EU)",
  },
  {
    vendor: "Google (OAuth)",
    purpose: "Sign-in identity",
    data: "Account identity — email address, account subject id",
    location: "Global",
  },
  {
    vendor: "Anthropic",
    purpose: "Model inference for the specialist panel and briefs",
    data: "The family context relevant to the question you asked",
    location: "US",
  },
  {
    vendor: "GitHub (Pages)",
    purpose: "This marketing site only — no product data, no analytics script",
    data: "IP address and request metadata of site visitors",
    location: "Global (US entity)",
  },
];

export const ASSISTANT_NOTE =
  "An AI assistant you connect yourself is not a subprocessor: it is your account with that provider, acting on your instruction. What it reads from Parenza is handled under your terms with them — which is why the MCP section spells this out rather than burying it here.";

export const ROADMAP = [
  { item: "Data Protection Impact Assessment completed", when: "Before general access" },
  { item: "ICO registration", when: "Before general access" },
  { item: "Self-serve export and automated account deletion", when: "Before general access" },
  { item: "Published retention schedule with automated purge", when: "Q4 2026" },
  { item: "Scheduled restore drills with published RPO/RTO", when: "Q4 2026" },
  { item: "External penetration test, summary published here", when: "Before general access" },
  { item: "SOC 2 Type II and ISO 27001 audits", when: "When there is a company to certify" },
] as const;

export const SECURITY_FAQ = [
  {
    question: "Why is there no SOC 2 or ISO 27001 badge on this page?",
    answer:
      "Because we don't hold one, and a badge we haven't earned would be the first lie we told you. The controls those audits examine are listed above with honest statuses. The founder has worked inside regulated businesses through SOC 2, ISO 27001 and DORA audits, which is why the architecture is built to that shape now — so certification is a milestone rather than a rebuild.",
  },
  {
    question: "Who can see my family's data?",
    answer:
      "You, and anyone you invite into your family's account. Every query is scoped to your tenant at the data layer, so there is no cross-family access path in the API. Operationally, production access exists for the founder to run the service — used for operations, not for reading family records. An AI assistant sees data only through a connection you created and can revoke.",
  },
  {
    question: "Do you train AI models on my child's data?",
    answer:
      "No. Model providers are used under terms that don't permit training on customer data, and we don't build models of our own. If you connect your own assistant, whatever it pulls from Parenza is then governed by your settings with that provider — worth checking before you connect.",
  },
  {
    question: "What happens if Parenza shuts down?",
    answer:
      "You take the record with you. Export is produced on request today and self-serve export is being built before general access. A family's history of feeds, sleep and decisions should never be hostage to whether a company survives.",
  },
  {
    question: "Is this a medical device?",
    answer:
      "No. Parenza is not a medical device, is not registered with the MHRA, and does not diagnose or prescribe. The specialists summarize published guidance and are built to escalate — to your GP, health visitor, NHS 111, or emergency services — rather than answer past their competence.",
  },
  {
    question: "How do I report a vulnerability?",
    answer:
      "Email the security address below or use /.well-known/security.txt. Good-faith research is welcome: stay within scope, don't touch other families' data, and we won't pursue legal action. Reports go straight to the engineer responsible for the code — acknowledgement within 72 hours. There is no bug bounty yet.",
  },
] as const;
