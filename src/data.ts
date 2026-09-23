export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Role {
  company: string;
  title: string;
  period: string;
  note: string;
}

export interface Project {
  org: string;
  name: string;
  blurb: string;
  stack: string[];
  points: string[];
  num: string;
}

type ProjectInput = Omit<Project, "num">;

export const skillGroups: SkillGroup[] = [
  { label: "LANGUAGES", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "FRONTEND",
    items: [
      "React",
      "React Router (SSR)",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix",
      "Chakra UI",
      "Material UI",
      "TanStack Table",
      "Recharts",
    ],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "SQLite / libSQL", "Supabase"],
  },
  { label: "CLOUD", items: ["AWS Lambda", "S3", "SES", "CloudFront", "GitLab CI"] },
  { label: "DESKTOP", items: ["Electron", "electron-builder", "Code signing (macOS, Windows)"] },
  { label: "TESTING", items: ["Cypress", "Vitest", "Istanbul", "Sentry"] },
  {
    label: "AI & AUTOMATION",
    items: ["LLM integration (Claude, Nova)", "Agentic workflows", "LLM orchestration", "CI guardrails"],
  },
  { label: "OTHER", items: ["i18n & RTL (Arabic)", "PDF generation", "Accessibility"] },
];

// Short list that loops in the stack marquee.
export const marqueeStack = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "React Router",
  "Tailwind CSS",
  "Electron",
  "AWS",
  "MongoDB",
  "Vitest",
  "Cypress",
];

export const roles: Role[] = [
  {
    company: "IONAI Technology Solutions",
    title: "Senior Software Developer",
    period: "Jun 2025 — Present",
    note: "Shipped Maktaabi, RetailOS, ProMag and HiserWorld — multi-tenant SaaS, an offline-first desktop ERP and an AI-assisted catalog, from data model to cloud deploy.",
  },
  {
    company: "Geeky Nerds Infotech Pvt Ltd",
    title: "Senior Software Developer",
    period: "Sep 2022 — Jun 2025",
    note: "Built a hospital admin panel and patient portal on AWS Lambda and S3, and secured, documented REST APIs for a cross-system risk-assessment platform.",
  },
  {
    company: "Tata Consultancy Services",
    title: "Assistant System Engineer",
    period: "Oct 2020 — Sep 2022",
    note: "Built features and backend functionality for an internal customer-engagement platform on Node.js, PostgreSQL and Heroku.",
  },
];

export const education = [
  {
    degree: "Master of Computer Application",
    school: "Vellore Institute of Technology, Bhopal",
    year: "2019",
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Raj Rishi Government College, Alwar",
    year: "2017",
  },
];

export const certifications = ["JavaScript — Udemy", "ReactJS — Udemy", "Git Version Control — Udemy"];

const projectInputs: ProjectInput[] = [
  {
    org: "IONAI TECHNOLOGY SOLUTIONS",
    name: "Maktaabi — Multi-tenant Construction Project Management SaaS",
    blurb:
      "A construction ERP covering BOQ, RFQ, tendering, purchase planning, inventory, invoicing, asset management and Gantt-based scheduling.",
    stack: ["React Router (SSR)", "React", "TypeScript", "Chakra UI", "Prisma", "PostgreSQL", "AWS"],
    points: [
      "Built a granular authorization system across organisations, roles, modules and per-user permission overrides, with tenant data isolation enforced application-wide.",
      "Diagnosed and fixed a class of silent financial data loss in production — caught by writing a concurrency test rather than by inspection.",
      "Improved dashboard load time from 15–26 seconds to near-instant by resolving inefficient queries in the project-timeline and purchase-planning flows.",
      "Delivered full Arabic RTL localisation, server-rendered PDF generation for invoices and purchase orders, and spreadsheet import/export, backed by a Vitest and Cypress suite.",
    ],
  },
  {
    org: "IONAI TECHNOLOGY SOLUTIONS",
    name: "RetailOS — Offline-first Retail ERP (signed desktop app)",
    blurb:
      "A local-first, on-premise ERP for UAE wholesale retailers, packaged as a signed desktop app for Windows and macOS and delivered to a 1.0 release.",
    stack: ["Electron", "React Router (SSR)", "TypeScript", "Prisma", "libSQL / SQLite", "Tailwind CSS", "shadcn/ui", "AWS"],
    points: [
      "Built a single-writer LAN setup — the host machine runs the server and shop terminals connect over the local network, so multi-terminal use needs no server infrastructure.",
      "Built the transactional accounting core — purchases, sales invoices, receipts, payments, returns — with double-entry ledgers, moving-average costing, oversell prevention and credit-limit enforcement.",
      "Implemented an append-only ledger so financial history can never be altered, with reversal-only voiding of documents.",
      "Built a license activation service on AWS with hardware-bound fingerprinting, a code-signing release pipeline, and nightly USB backup with a recovery-code restore path.",
    ],
  },
  {
    org: "IONAI TECHNOLOGY SOLUTIONS",
    name: "ProMag — Sales-to-Procurement & Asset Lifecycle Platform",
    blurb:
      "A platform spanning the full commercial lifecycle: lead, opportunity, BOQ, proposal, sales order, project, procurement, inventory and fixed-asset management.",
    stack: ["React Router (SSR)", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "PostgreSQL", "AWS"],
    points: [
      "Built a complete fixed-asset module: receiving, assignment and transfer approvals, stocktaking, depreciation, write-off, audit logging and a role-based permission matrix.",
      "Extended test coverage reporting to server-side code so it reflects the whole application, not just the browser bundle.",
      "Integrated an AI vendor-quote extraction service for automated document ingestion into procurement, and set the reusable component and coding standards the team builds against.",
    ],
  },
  {
    org: "IONAI TECHNOLOGY SOLUTIONS",
    name: "HiserWorld — AI-Assisted Product Catalog & Lead Generation",
    blurb:
      "A server-rendered product catalog and dealer-enquiry platform on AWS, with a conversational sales assistant grounded in live catalog data.",
    stack: ["React Router (SSR)", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
    points: [
      "Built a streaming conversational assistant with tool use for structured lead capture and conversation persistence.",
      "Implemented layered abuse protection — per-IP rate limiting, turn caps, request validation — degrading gracefully when the model is unavailable.",
      "Achieved a perfect Lighthouse score for accessibility, best practices and SEO, with a 0.8-second load time and zero layout shift.",
    ],
  },
  {
    org: "GEEKY NERDS INFOTECH",
    name: "Hospital Admin Panel & Patient Portal",
    blurb:
      "A responsive admin panel for hospitals to manage patient data, plus a secure portal for patients to access their medical documents.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS Lambda / S3", "JWT"],
    points: [
      "Integrated AWS S3 and Lambda for scalable, serverless document storage.",
      "Protected sensitive patient data with JWT authentication and access controls.",
    ],
  },
  {
    org: "GEEKY NERDS INFOTECH",
    name: "Risk Assessment Profiler (RAP)",
    blurb: "Scalable REST APIs for cross-system risk assessment, secured and documented for third-party consumption.",
    stack: ["Node.js", "Express", "REST API", "MongoDB", "JWT", "Swagger", "Procore", "ChatGPT API"],
    points: [
      "Secured the API surface with JWT authentication and access controls, documented with Swagger.",
      "Integrated the ChatGPT API and Procore developer tools to extend platform capabilities.",
    ],
  },
  {
    org: "TATA CONSULTANCY SERVICES",
    name: "Customer Engagement Tool (CET)",
    blurb: "Responsive features and backend functionality for an internal customer-interaction platform.",
    stack: ["Handlebars", "Bootstrap", "Node.js", "Express", "PostgreSQL", "Heroku"],
    points: [
      "Managed third-party API integrations and optimised PostgreSQL performance.",
      "Deployed and maintained the platform on Heroku.",
    ],
  },
];

export const projects: Project[] = projectInputs.map((p, i) => ({
  ...p,
  num: String(i + 1).padStart(2, "0"),
}));

export const contact = {
  email: "tiwadijuganu@gmail.com",
  phone: "+91 89496 70624",
  phoneHref: "+918949670624",
  linkedin: "linkedin.com/in/jay52",
  linkedinHandle: "/in/jay52",
  location: "Jaipur, Rajasthan, IN",
  github: "github.com/jtiwadii",
};

// Hero stats: `accent` renders in the accent colour after `value`.
export const stats = [
  { value: "5", accent: "+", label: "Years" },
  { value: "8", accent: "", label: "Platforms shipped" },
  { value: "26s", accent: "→0", label: "Dashboard load" },
];
