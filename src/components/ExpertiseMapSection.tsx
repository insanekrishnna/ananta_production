import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, LayoutGrid, Database, GitBranch, AppWindow, ShieldCheck } from "lucide-react";

const CORE_SERVICES = [
  { icon: Users, label: "Client Portals" },
  { icon: Database, label: "CRM Tools" },
  { icon: LayoutGrid, label: "Internal Dashboards" },
  { icon: Database, label: "Data Integrations" },
  { icon: GitBranch, label: "Workflow Automation" },
  { icon: AppWindow, label: "No-code Apps" },
  { icon: ShieldCheck, label: "Custom Permissions" },
];

const SECONDARY_SERVICES = [
  { label: "Airtable Sync", position: "top-[12%] left-[8%] md:left-[10%]" },
  { label: "REST APIs", position: "top-[12%] right-[8%] md:right-[10%]" },
  { label: "Google Sheets", position: "top-[32%] left-[2%] md:left-[4%]" },
  { label: "Role-based Access", position: "top-[32%] right-[2%] md:right-[4%]" },
  { label: "Form Builders", position: "top-[52%] left-[2%] md:left-[4%]" },
  { label: "SSO", position: "top-[40%] right-[12%] md:right-[14%]" },
  { label: "Custom Domains", position: "top-[56%] right-[2%] md:right-[4%]" },
  { label: "Email Notifications", position: "top-[76%] left-[8%] md:left-[12%]" },
  { label: "Embedded Analytics", position: "top-[76%] right-[8%] md:right-[10%]" },
];

const ExpertiseMapSection = () => {
  const header = useScrollReveal(0);
  const map = useScrollReveal(200);

  return (
    <section id="expertise" className="py-8 px-4 md:px-10">
      <div className="max-w-[760px] mx-auto">
        {/* Header */}
        <div ref={header.ref} className={header.className}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-text-primary leading-[1.1] tracking-tight mb-2">
            What We Build
          </h2>
        </div>

        {/* Map */}
        <div ref={map.ref} className={`relative mt-6 ${map.className}`}>
          {/* Circle SVG */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <circle cx="300" cy="300" r="250" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="300" cy="300" r="170" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              {/* Horizontal axis */}
              <line x1="30" y1="300" x2="570" y2="300" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="300" r="4" fill="hsl(var(--text-primary))" />
              <circle cx="550" cy="300" r="4" fill="hsl(var(--text-primary))" />
            </svg>

            {/* Axis labels */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[13px] md:text-[14px] font-semibold text-text-primary">
              Data
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] md:text-[14px] font-semibold text-text-primary">
              Tools
            </span>

            {/* Core services – diamond-ish layout inside circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[75%] h-[65%]">
                {/* Row 1 – top center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2">
                  <CorePill icon={CORE_SERVICES[0].icon} label={CORE_SERVICES[0].label} />
                </div>
                {/* Row 2 – two items */}
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex gap-2">
                  <CorePill icon={CORE_SERVICES[1].icon} label={CORE_SERVICES[1].label} />
                  <CorePill icon={CORE_SERVICES[2].icon} label={CORE_SERVICES[2].label} />
                </div>
                {/* Row 3 – three items (middle, widest) */}
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 flex gap-2">
                  <CorePill icon={CORE_SERVICES[3].icon} label={CORE_SERVICES[3].label} />
                  <CorePill icon={CORE_SERVICES[4].icon} label={CORE_SERVICES[4].label} />
                  <CorePill icon={CORE_SERVICES[5].icon} label={CORE_SERVICES[5].label} />
                </div>
                {/* Row 4 – bottom center */}
                <div className="absolute top-[75%] left-1/2 -translate-x-1/2 flex gap-2">
                  <CorePill icon={CORE_SERVICES[6].icon} label={CORE_SERVICES[6].label} />
                </div>
              </div>
            </div>

            {/* Secondary services – scattered around */}
            {SECONDARY_SERVICES.map((s) => (
              <span
                key={s.label}
                className={`absolute ${s.position} text-[10px] md:text-[12px] font-medium text-text-secondary/50 border border-border rounded-full px-3 py-1 bg-canvas whitespace-nowrap`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CorePill = ({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>; label: string }) => (
  <div className="flex items-center gap-1.5 bg-text-primary text-canvas rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] font-medium whitespace-nowrap shadow-card">
    <Icon size={14} strokeWidth={1.5} className="text-canvas shrink-0" />
    <span>{label}</span>
  </div>
);

export default ExpertiseMapSection;
