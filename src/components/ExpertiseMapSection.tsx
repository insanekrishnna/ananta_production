import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, LayoutGrid, Database, GitBranch, AppWindow, ShieldCheck } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const CORE_SERVICES = [
  { icon: Users, label: "Client Portals" },
  { icon: Database, label: "CRM Tools" },
  { icon: LayoutGrid, label: "Dashboards" },
  { icon: Database, label: "Integrations" },
  { icon: GitBranch, label: "Automation" },
  { icon: AppWindow, label: "No-code Apps" },
  { icon: ShieldCheck, label: "Permissions" },
];

const SECONDARY = [
  "Airtable Sync", "REST APIs", "Google Sheets", "Role-based Access",
  "Form Builders", "SSO", "Custom Domains", "Email Alerts", "Analytics",
];

const ExpertiseMapSection = () => {
  const header = useScrollReveal(0);
  const map = useScrollReveal(150);

  return (
    <section id="expertise" className="py-4 px-4 md:px-10">
      <div className="max-w-[760px] mx-auto">
        <div ref={header.ref} className={header.className}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-text-primary leading-[1.1] tracking-tight mb-1">
            What We Build
          </h2>
        </div>

        <div ref={map.ref} className={`relative mt-3 ${map.className}`}>
          <div className="relative w-full max-w-[420px] mx-auto" style={{ aspectRatio: "1" }}>
            {/* Dashed orbits */}
            <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
              <circle cx="210" cy="210" r="195" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="210" cy="210" r="120" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            </svg>

            {/* Center logo – no border, transparent, just the logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <img src={brandLogo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            </div>

            {/* Core (black) pills – inner orbit r≈28% */}
            {CORE_SERVICES.map((s, i) => {
              const angle = (i * 360) / CORE_SERVICES.length - 90;
              const r = 28;
              const x = 50 + r * Math.cos((angle * Math.PI) / 180);
              const y = 50 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <div key={s.label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                  <div className="flex items-center gap-1 bg-text-primary text-canvas rounded-full px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[11px] font-medium whitespace-nowrap shadow-card">
                    <s.icon size={11} strokeWidth={1.5} className="text-canvas shrink-0" />
                    <span>{s.label}</span>
                  </div>
                </div>
              );
            })}

            {/* Secondary (white) tags – outer orbit r≈46% */}
            {SECONDARY.map((label, i) => {
              const angle = (i * 360) / SECONDARY.length - 70;
              const r = 46;
              const x = 50 + r * Math.cos((angle * Math.PI) / 180);
              const y = 50 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <span key={label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 text-[7px] md:text-[10px] font-medium text-text-secondary/40 border border-border rounded-full px-1.5 py-0.5 md:px-2.5 md:py-0.5 bg-canvas whitespace-nowrap" style={{ left: `${x}%`, top: `${y}%` }}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMapSection;
