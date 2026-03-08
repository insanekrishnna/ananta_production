export const NAV_LINKS = ["Home", "Solutions", "Product", "Resources", "Pricing"] as const;

export const HERO = {
  heading: {
    parts: [
      { text: "We transform ", accent: false },
      { text: "companies", accent: true },
      { text: " through ", accent: false },
      { text: "", accent: false },
      { text: "design innovation", accent: true },
      { text: " ", accent: false },
    ],
  },
  subheading: "A full-service creative studio crafting innovative digital experiences across every brand touchpoint.\n\n",
  cta: { label: "Watch Demo", sub: "3mins" },
};

export const FLOATING_ICONS = [
  { name: "Instagram", letter: "IG", bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", top: "8%", left: "4%", delay: "0s" },
  { name: "Browser", letter: "🌐", bg: "#4285F4", top: "36%", left: "2%", delay: "0.4s" },
  { name: "Shopify", letter: "🛍", bg: "#96BF48", top: "62%", left: "6%", delay: "0.8s" },
  { name: "Twitter", letter: "𝕏", bg: "#000000", top: "8%", right: "4%", delay: "1.2s" },
  { name: "LinkedIn", letter: "in", bg: "#0A66C2", top: "36%", right: "2%", delay: "1.6s" },
  { name: "Sheets", letter: "≡", bg: "#0F9D58", top: "62%", right: "6%", delay: "2.0s" },
] as const;

export const LOGOS = ["OpenPurpose®", "LaunchPad", "FinanceFlow", "ScaleUp", "VentureStudio"];

export const FEATURES = [
  {
    icon: "Database" as const,
    iconBg: "rgba(79,70,229,0.08)",
    iconColor: "#4F46E5",
    title: "Connect any data source",
    body: "Integrate with Airtable, Google Sheets, SQL, REST APIs and more in seconds.",
  },
  {
    icon: "Layers" as const,
    iconBg: "rgba(16,185,129,0.08)",
    iconColor: "#10B981",
    title: "Drag-and-drop builder",
    body: "Build portals and tools visually — no code required. Launch in minutes.",
  },
  {
    icon: "Users" as const,
    iconBg: "rgba(245,158,11,0.08)",
    iconColor: "#F59E0B",
    title: "Role-based permissions",
    body: "Control exactly who sees and edits what with granular access controls.",
  },
];

export const INTEGRATIONS = {
  tag: "Integrations",
  heading: "Works with the tools your team already uses",
  body: "Connect to 50+ data sources including Airtable, Salesforce, Google Sheets, HubSpot, and more — no engineering required.",
  cta: "Explore integrations →",
  apps: [
    { name: "Airtable", letter: "A", bg: "#18BFFF" },
    { name: "Notion", letter: "N", bg: "#000000" },
    { name: "Salesforce", letter: "S", bg: "#0070D2" },
    { name: "HubSpot", letter: "H", bg: "#FF7A59" },
    { name: "Shopify", letter: "🛍", bg: "#96BF48" },
    { name: "Sheets", letter: "≡", bg: "#0F9D58" },
    { name: "Excel", letter: "X", bg: "#217346" },
    { name: "QuickBooks", letter: "Q", bg: "#2CA01C" },
    { name: "Stripe", letter: "S", bg: "#635BFF" },
    { name: "PostgreSQL", letter: "P", bg: "#336791" },
    { name: "MySQL", letter: "M", bg: "#4479A1" },
    { name: "REST API", letter: "{}", bg: "#6B7280" },
  ],
};

export const TESTIMONIALS = [
  {
    quote: "Stacker saved us months of engineering time. We launched our client portal in a single afternoon.",
    name: "Alex Chen",
    role: "Head of Operations, FinanceFlow",
    initials: "AC",
    avatarBg: "#4F46E5",
  },
  {
    quote: "The best no-code tool we've found for internal tooling. Our team was up and running in under an hour.",
    name: "Maria Lopez",
    role: "Product Manager, ScaleUp Co",
    initials: "ML",
    avatarBg: "#10B981",
  },
  {
    quote: "We replaced three different tools with one Stacker portal. It's transformed how our ops team works.",
    name: "James Park",
    role: "COO, Venture Studio",
    initials: "JP",
    avatarBg: "#F59E0B",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: ["3 apps", "Up to 5 users", "1,000 records", "Email support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "For growing teams that need more power",
    features: ["Unlimited apps", "Up to 25 users", "50,000 records", "Priority support", "Custom domain"],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: ["Unlimited everything", "SSO / SAML", "SLA guarantee", "Dedicated support", "Custom contracts"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const FOOTER = {
  tagline: "Build internal tools without code.",
  columns: [
    { heading: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
    { heading: "Resources", links: ["Documentation", "API Reference", "Community", "Status", "Support"] },
  ],
};
