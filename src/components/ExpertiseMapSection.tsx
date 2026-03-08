import { Users, ContactRound, LayoutDashboard, Database, Workflow, Blocks, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const CORE_SERVICES: { label: string; icon: LucideIcon }[] = [
  { label: "client portals", icon: Users },
  { label: "CRM tools", icon: ContactRound },
  { label: "internal dashboards", icon: LayoutDashboard },
  { label: "data integrations", icon: Database },
  { label: "workflow automation", icon: Workflow },
  { label: "no-code apps", icon: Blocks },
  { label: "custom permissions", icon: ShieldCheck },
];

const SECONDARY_SERVICES_LEFT = [
  { label: "airtable sync", top: "8%", left: "8%" },
  { label: "google sheets", top: "30%", left: "1%" },
  { label: "form builders", top: "56%", left: "1%" },
  { label: "email notifications", top: "78%", left: "8%" },
];

const SECONDARY_SERVICES_RIGHT = [
  { label: "REST APIs", top: "8%", right: "8%" },
  { label: "role-based access", top: "30%", right: "1%" },
  { label: "custom domains", top: "56%", right: "1%" },
  { label: "SSO", top: "42%", right: "14%" },
  { label: "embedded analytics", top: "78%", right: "6%" },
];

const ExpertiseMapSection = () => {
  return (
    <section className="py-8 px-4 bg-canvas">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          What We Build
        </h2>

        {/* Map container */}
        <div className="relative w-full" style={{ aspectRatio: "5 / 3" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 300"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="250" cy="150" r="140" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" fill="none" />
            <circle cx="250" cy="150" r="85" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" fill="none" />
            <line x1="30" y1="150" x2="470" y2="150" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="38" cy="150" r="2.5" fill="#1a1a1a" />
            <circle cx="462" cy="150" r="2.5" fill="#1a1a1a" />
          </svg>

          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={brandLogo} alt="Brand logo" className="w-10 h-10 object-contain" />
          </div>

          {/* Axis labels */}
          <span className="absolute left-0 md:left-1 top-1/2 -translate-y-1/2 text-xs font-semibold text-text-primary">
            Data
          </span>
          <span className="absolute right-0 md:right-1 top-1/2 -translate-y-1/2 text-xs font-semibold text-text-primary">
            Tools
          </span>

          {/* Core service pills — distributed around inner circle */}
          {CORE_SERVICES.map((service, i) => {
            const total = CORE_SERVICES.length;
            const angle = -90 + (i * 360) / total;
            const rad = (angle * Math.PI) / 180;
            const rx = 22;
            const ry = 28;
            const cx = 50 + rx * Math.cos(rad);
            const cy = 50 + ry * Math.sin(rad);
            return (
              <div
                key={service.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${cy}%`, left: `${cx}%` }}
              >
                <CorePill Icon={service.icon} label={service.label} />
              </div>
            );
          })}

          {/* Secondary pills */}
          {SECONDARY_SERVICES_LEFT.map((s) => (
            <SecondaryPill key={s.label} label={s.label} style={{ top: s.top, left: s.left }} />
          ))}
          {SECONDARY_SERVICES_RIGHT.map((s) => (
            <SecondaryPill key={s.label} label={s.label} style={{ top: s.top, right: s.right }} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CorePill = ({ Icon, label }: { Icon: LucideIcon; label: string }) => (
  <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-white rounded-[999px] px-4 py-2 text-[13px] font-medium cursor-default transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <Icon size={14} className="text-white" />
    {label}
  </span>
);

const SecondaryPill = ({ label, style }: { label: string; style: React.CSSProperties }) => (
  <span
    className="absolute hidden md:inline-flex items-center rounded-[999px] border border-[#e0e0e0] bg-white/60 px-3 py-1 text-[11px] font-medium text-muted-foreground opacity-50 cursor-default transition-all duration-200 hover:opacity-100 hover:border-[#c0c0c0] hover:shadow-sm"
    style={style}
  >
    {label}
  </span>
);

export default ExpertiseMapSection;
