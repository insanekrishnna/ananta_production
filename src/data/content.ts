export const NAV_LINKS = ["Home", "Services", "Work", "Process", "Pricing"] as const;

export const HERO = {
  heading: {
    parts: [
      { text: "We transform ", accent: false },
      { text: "companies", accent: true },
      { text: "\n", accent: false },
      { text: "through ", accent: false },
      { text: "innovation", accent: true },
      { text: " ", accent: false },
    ],
  },
  subheading: "A full-service creative studio crafting innovative digital experiences across every brand touchpoint.\n\n",
  cta: { label: "Watch ", sub: "2mins" },
};

export const FLOATING_ICONS = [
  { name: "Instagram", letter: "IG", bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", top: "8%", left: "4%", delay: "0s" },
  { name: "Pinterest", letter: "P", bg: "#E60023", top: "28%", left: "2%", delay: "0.4s" },
  { name: "Browser", letter: "🌐", bg: "#4285F4", top: "48%", left: "5%", delay: "0.8s" },
  { name: "Behance", letter: "Bē", bg: "#1769FF", top: "68%", left: "3%", delay: "1.2s" },
  { name: "Twitter", letter: "𝕏", bg: "#000000", top: "8%", right: "4%", delay: "1.4s" },
  { name: "LinkedIn", letter: "in", bg: "#0A66C2", top: "28%", right: "2%", delay: "1.8s" },
  { name: "Dribbble", letter: "🏀", bg: "#EA4C89", top: "48%", right: "5%", delay: "2.0s" },
  { name: "Figma", letter: "F", bg: "#A259FF", top: "68%", right: "3%", delay: "2.4s" },
] as const;

export const LOGOS = ["avtar®", "Samuk", "Twinkle artist", "Cont.", "Rabbit"];

export const FEATURES = [
  {
    icon: "Fingerprint" as const,
    iconBg: "rgba(79,70,229,0.08)",
    iconColor: "#4F46E5",
    title: "Brand Strategy & Identity",
    body: "We define your brand's DNA — positioning, voice, visual identity — to create a foundation that resonates and endures.",
  },
  {
    icon: "Box" as const,
    iconBg: "rgba(16,185,129,0.08)",
    iconColor: "#10B981",
    title: "UI/UX & Product Design",
    body: "Human-centered interfaces crafted for clarity and delight. From wireframes to pixel-perfect design systems.",
  },
  {
    icon: "Earth" as const,
    iconBg: "rgba(245,158,11,0.08)",
    iconColor: "#F59E0B",
    title: "Web & Motion Design",
    body: "Award-winning websites, immersive animations, and interactive experiences that captivate your audience.",
  },
];

export const INTEGRATIONS = {
  tag: "Our Process",
  heading: "From blank canvas to iconic brand — in six moves",
  body: "From discovery to delivery, our cross-disciplinary team follows a battle-tested methodology - blending strategy, design, and technology at every stage.",
  cta: "See our case studies →",
  apps: [
    { name: "Discovery", letter: "01", bg: "#4F46E5" },
    { name: "Research", letter: "02", bg: "#7C3AED" },
    { name: "Strategy", letter: "03", bg: "#2563EB" },
    { name: "Wireframes", letter: "04", bg: "#0891B2" },
    { name: "Design", letter: "05", bg: "#059669" },
    { name: "Prototype", letter: "06", bg: "#D97706" },
    { name: "Development", letter: "07", bg: "#DC2626" },
    { name: "Testing", letter: "08", bg: "#9333EA" },
    { name: "Launch", letter: "09", bg: "#EA580C" },
    { name: "Iterate", letter: "10", bg: "#0D9488" },
    { name: "Optimize", letter: "11", bg: "#4338CA" },
    { name: "Scale", letter: "12", bg: "#1D4ED8" },
  ],
};

export const TESTIMONIALS = [
  {
    quote: "They completely reimagined our brand. The new identity drove a 40% increase in engagement within the first quarter.",
    name: "Sarah Mitchell",
    role: "CMO, Elevate Studios",
    initials: "SM",
    avatarBg: "#4F46E5",
  },
  {
    quote: "The UI/UX redesign transformed our product. User retention jumped 65% and our NPS went through the roof.",
    name: "David Kim",
    role: "VP Product, NovaTech",
    initials: "DK",
    avatarBg: "#10B981",
  },
  {
    quote: "Working with this team felt like having a world-class creative department in-house. Truly exceptional work.",
    name: "Elena Vasquez",
    role: "Founder, Lumina Brands",
    initials: "EV",
    avatarBg: "#F59E0B",
  },
];

export const PRICING_PLANS = [
  {
    name: "Sprint",
    price: "$99",
    period: "/project",
    description: "Ideal for startups needing a strong visual foundation",
    features: ["Brand identity design", "Logo & color system", "1 landing page", "Social media kit"],
    cta: "Book a call",
    highlighted: false,
  },
  {
    name: "Studio",
    price: "$12,500",
    period: "/month",
    description: "For brands that need ongoing creative partnership",
    features: ["Unlimited design requests", "Brand strategy", "UI/UX design", "Motion & animation", "Dedicated art director"],
    cta: "Book a call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex creative needs",
    features: ["Full creative team", "Product design", "Brand campaigns", "Video production", "Dedicated account lead"],
    cta: "Contact us",
    highlighted: false,
  },
];

export const FOOTER = {
  tagline: "Full-service creative studio for ambitious brands.",
  columns: [
    { heading: "Services", links: ["Brand Strategy", "Identity Design", "UI/UX Design", "Web Development", "Motion Design"] },
    { heading: "Company", links: ["About", "Careers", "Blog", "Press", "Contact"] },
    { heading: "Resources", links: ["Case Studies", "Design Process", "Style Guides", "FAQ", "Support"] },
  ],
};
