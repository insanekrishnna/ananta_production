const CORE_SERVICES = [
  { label: "client portals", emoji: "🟡", row: 0, col: 1 },
  { label: "CRM tools", emoji: "🔵", row: 1, col: 0 },
  { label: "internal dashboards", emoji: "🟪", row: 1, col: 1 },
  { label: "data integrations", emoji: "❤️", row: 2, col: 0 },
  { label: "workflow automation", emoji: "▶️", row: 2, col: 1 },
  { label: "no-code apps", emoji: "🟩", row: 3, col: 0 },
  { label: "custom permissions", emoji: "🟪", row: 3, col: 1 },
];

const SECONDARY_SERVICES_LEFT = [
  { label: "airtable sync", top: "18%", left: "8%" },
  { label: "google sheets", top: "32%", left: "4%" },
  { label: "form builders", top: "48%", left: "6%" },
  { label: "email notifications", top: "64%", left: "8%" },
];

const SECONDARY_SERVICES_RIGHT = [
  { label: "REST APIs", top: "18%", right: "4%" },
  { label: "role-based access", top: "32%", right: "2%" },
  { label: "custom domains", top: "48%", right: "6%" },
  { label: "SSO", top: "48%", right: "18%" },
  { label: "embedded analytics", top: "64%", right: "4%" },
];

const ExpertiseMapSection = () => {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="max-w-[960px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            What we do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            What We Build
          </h2>
        </div>

        {/* Map container */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/8]">
          {/* SVG rings and axis */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 500"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Outer ring */}
            <ellipse
              cx="400"
              cy="260"
              rx="340"
              ry="220"
              stroke="#dcdcdc"
              strokeWidth="1"
              strokeDasharray="4 6"
              fill="none"
            />
            {/* Inner ring */}
            <ellipse
              cx="400"
              cy="260"
              rx="200"
              ry="140"
              stroke="#dcdcdc"
              strokeWidth="1"
              strokeDasharray="4 6"
              fill="none"
            />
            {/* Horizontal axis */}
            <line
              x1="40"
              y1="260"
              x2="760"
              y2="260"
              stroke="#dcdcdc"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            {/* Axis dots */}
            <circle cx="60" cy="260" r="3" fill="#1a1a1a" />
            <circle cx="740" cy="260" r="3" fill="#1a1a1a" />
          </svg>

          {/* Axis labels */}
          <span className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-primary">
            Data
          </span>
          <span className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-primary">
            Tools
          </span>

          {/* Core service pills — positioned in center grid */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-[480px]">
              {/* Row 0: single centered */}
              <div className="col-span-2 flex justify-center">
                <CorePill emoji="🟡" label="client portals" />
              </div>
              {/* Row 1 */}
              <div className="flex justify-end">
                <CorePill emoji="🔵" label="CRM tools" />
              </div>
              <div className="flex justify-start">
                <CorePill emoji="🟪" label="internal dashboards" />
              </div>
              {/* Row 2 */}
              <div className="flex justify-end">
                <CorePill emoji="❤️" label="data integrations" />
              </div>
              <div className="flex justify-start">
                <CorePill emoji="▶️" label="workflow automation" />
              </div>
              {/* Row 3 */}
              <div className="flex justify-end">
                <CorePill emoji="🟩" label="no-code apps" />
              </div>
              <div className="flex justify-start">
                <CorePill emoji="🟪" label="custom permissions" />
              </div>
            </div>
          </div>

          {/* Secondary pills — left side */}
          {SECONDARY_SERVICES_LEFT.map((s) => (
            <SecondaryPill
              key={s.label}
              label={s.label}
              style={{ top: s.top, left: s.left }}
            />
          ))}

          {/* Secondary pills — right side */}
          {SECONDARY_SERVICES_RIGHT.map((s) => (
            <SecondaryPill
              key={s.label}
              label={s.label}
              style={{ top: s.top, right: s.right }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CorePill = ({ emoji, label }: { emoji: string; label: string }) => (
  <span className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white rounded-[999px] px-5 py-2.5 text-[15px] font-medium cursor-default transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <span className="text-sm">{emoji}</span>
    {label}
  </span>
);

const SecondaryPill = ({
  label,
  style,
}: {
  label: string;
  style: React.CSSProperties;
}) => (
  <span
    className="absolute hidden md:inline-flex items-center rounded-[999px] border border-[#e0e0e0] bg-white/60 px-4 py-1.5 text-[13px] font-medium text-muted-foreground opacity-60 cursor-default transition-all duration-200 hover:opacity-100 hover:border-[#c0c0c0] hover:shadow-sm"
    style={style}
  >
    {label}
  </span>
);

export default ExpertiseMapSection;
