import { Users, ContactRound, LayoutDashboard, Database, Workflow, Blocks, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  { label: "airtable sync", top: "12%", left: "10%" },
  { label: "google sheets", top: "30%", left: "3%" },
  { label: "form builders", top: "54%", left: "3%" },
  { label: "email notifications", top: "72%", left: "10%" },
];

const SECONDARY_SERVICES_RIGHT = [
  { label: "REST APIs", top: "12%", right: "10%" },
  { label: "role-based access", top: "30%", right: "3%" },
  { label: "custom domains", top: "54%", right: "3%" },
  { label: "SSO", top: "42%", right: "16%" },
  { label: "embedded analytics", top: "72%", right: "8%" },
];

const ExpertiseMapSection = () => {
  return (
    <section className="py-14 px-4" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
          What We Build
        </h2>

        {/* Map container */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 450"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="400" cy="225" r="210" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" fill="none" />
            <circle cx="400" cy="225" r="130" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" fill="none" />
            <line x1="60" y1="225" x2="740" y2="225" stroke="#dcdcdc" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="70" cy="225" r="3" fill="#1a1a1a" />
            <circle cx="730" cy="225" r="3" fill="#1a1a1a" />
          </svg>

          {/* Axis labels */}
          <span className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-primary">
            Data
          </span>
          <span className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-primary">
            Tools
          </span>

          {/* Core service pills — diamond layout */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2.5 md:gap-3">
              {/* Row 1: 1 pill */}
              <div className="flex justify-center">
                <CorePill Icon={CORE_SERVICES[0].icon} label={CORE_SERVICES[0].label} />
              </div>
              {/* Row 2: 2 pills */}
              <div className="flex gap-3 justify-center">
                <CorePill Icon={CORE_SERVICES[1].icon} label={CORE_SERVICES[1].label} />
                <CorePill Icon={CORE_SERVICES[2].icon} label={CORE_SERVICES[2].label} />
              </div>
              {/* Row 3: 3 pills */}
              <div className="flex gap-3 justify-center">
                <CorePill Icon={CORE_SERVICES[3].icon} label={CORE_SERVICES[3].label} />
                <CorePill Icon={CORE_SERVICES[4].icon} label={CORE_SERVICES[4].label} />
                <CorePill Icon={CORE_SERVICES[5].icon} label={CORE_SERVICES[5].label} />
              </div>
              {/* Row 4: 1 pill */}
              <div className="flex justify-center">
                <CorePill Icon={CORE_SERVICES[6].icon} label={CORE_SERVICES[6].label} />
              </div>
            </div>
          </div>

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
  <span className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white rounded-[999px] px-5 py-2.5 text-[14px] font-medium cursor-default transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <Icon size={15} className="text-white" />
    {label}
  </span>
);

const SecondaryPill = ({ label, style }: { label: string; style: React.CSSProperties }) => (
  <span
    className="absolute hidden md:inline-flex items-center rounded-[999px] border border-[#e0e0e0] bg-white/60 px-4 py-1.5 text-[13px] font-medium text-muted-foreground opacity-60 cursor-default transition-all duration-200 hover:opacity-100 hover:border-[#c0c0c0] hover:shadow-sm"
    style={style}
  >
    {label}
  </span>
);

export default ExpertiseMapSection;
