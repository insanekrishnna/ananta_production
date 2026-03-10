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
  { label: "Airtable Sync", top: "8%", left: "10%" },
  { label: "REST APIs", top: "8%", right: "10%" },
  { label: "Google Sheets", top: "28%", left: "4%" },
  { label: "Role-based Access", top: "28%", right: "4%" },
  { label: "Form Builders", top: "50%", left: "4%" },
  { label: "SSO", top: "38%", right: "12%" },
  { label: "Custom Domains", top: "54%", right: "4%" },
  { label: "Email Notifications", top: "74%", left: "10%" },
  { label: "Embedded Analytics", top: "74%", right: "8%" },
];

const ExpertiseMapSection = () => {
  const header = useScrollReveal(0);
  const map = useScrollReveal(150);

  return (
    <section id="expertise" className="py-6 px-4 md:px-10">
      <div className="max-w-[760px] mx-auto">
        <div ref={header.ref} className={header.className}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-text-primary leading-[1.1] tracking-tight mb-1">
            What We Build
          </h2>
        </div>

        <div ref={map.ref} className={`relative mt-4 ${map.className}`}>
          <div className="relative w-full max-w-[520px] mx-auto" style={{ aspectRatio: "1 / 0.85" }}>
            {/* Circle SVG */}
            <svg viewBox="0 0 520 440" className="absolute inset-0 w-full h-full" fill="none">
              <ellipse cx="260" cy="220" rx="210" ry="200" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="30" y1="220" x2="490" y2="220" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="220" r="3.5" fill="hsl(var(--text-primary))" />
              <circle cx="470" cy="220" r="3.5" fill="hsl(var(--text-primary))" />
            </svg>

            {/* Axis labels */}
            <span className="absolute left-0 top-[50%] -translate-y-1/2 text-[12px] md:text-[13px] font-semibold text-text-primary">Data</span>
            <span className="absolute right-0 top-[50%] -translate-y-1/2 text-[12px] md:text-[13px] font-semibold text-text-primary">Tools</span>

            {/* Core pills – diamond layout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-2.5 pointer-events-none">
              <div className="flex justify-center">
                <CorePill icon={CORE_SERVICES[0].icon} label={CORE_SERVICES[0].label} />
              </div>
              <div className="flex justify-center gap-2">
                <CorePill icon={CORE_SERVICES[1].icon} label={CORE_SERVICES[1].label} />
                <CorePill icon={CORE_SERVICES[2].icon} label={CORE_SERVICES[2].label} />
              </div>
              <div className="flex justify-center gap-2">
                <CorePill icon={CORE_SERVICES[3].icon} label={CORE_SERVICES[3].label} />
                <CorePill icon={CORE_SERVICES[4].icon} label={CORE_SERVICES[4].label} />
                <CorePill icon={CORE_SERVICES[5].icon} label={CORE_SERVICES[5].label} />
              </div>
              <div className="flex justify-center">
                <CorePill icon={CORE_SERVICES[6].icon} label={CORE_SERVICES[6].label} />
              </div>
            </div>

            {/* Secondary tags */}
            {SECONDARY_SERVICES.map((s) => (
              <span
                key={s.label}
                className="absolute text-[9px] md:text-[11px] font-medium text-text-secondary/40 border border-border rounded-full px-2.5 py-0.5 bg-canvas whitespace-nowrap"
                style={{ top: s.top, left: s.left, right: s.right }}
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

const CorePill = ({ icon: Icon, label }: { icon: React.ComponentType<any>; label: string }) => (
  <div className="pointer-events-auto flex items-center gap-1.5 bg-text-primary text-canvas rounded-full px-3 py-1.5 text-[10px] md:text-[12px] font-medium whitespace-nowrap shadow-card hover:scale-105 transition-transform duration-200">
    <Icon size={13} strokeWidth={1.5} className="text-canvas shrink-0" />
    <span>{label}</span>
  </div>
);

export default ExpertiseMapSection;
