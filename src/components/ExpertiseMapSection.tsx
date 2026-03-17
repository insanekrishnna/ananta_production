import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Users,
  LayoutGrid,
  Database,
  GitBranch,
  AppWindow,
  ShieldCheck,
} from "lucide-react";
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
  "Airtable Sync",
  "REST APIs",
  "Google Sheets",
  "Role-based Access",
  "Form Builders",
  "SSO",
  "Custom Domains",
  "Email Alerts",
  "Analytics",
];

const ExpertiseMapSection = () => {
  const header = useScrollReveal(0);
  const map = useScrollReveal(150);

  return (
    <section id="expertise" className="py-10 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`mb-6 max-w-2xl ${header.className}`}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-text-primary leading-[1.1] tracking-tight mb-2">
            What We Build
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-[1.7]">
            We design connected systems, not isolated screens. Every solution is built
            with a clear architecture so your team can ship faster and scale cleanly.
          </p>
        </div>

        <div className="grid grid-cols-1">
          <div
            ref={map.ref}
            className={`relative overflow-hidden rounded-[28px] border border-input bg-canvas p-5 md:p-8 shadow-card ${map.className}`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_18%_15%,rgba(99,102,241,0.16),transparent_46%),radial-gradient(circle_at_80%_76%,rgba(59,130,246,0.12),transparent_48%)]" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-input bg-canvas/80 px-3 py-1 text-[11px] font-medium text-text-secondary">
                Core Delivery Architecture
              </span>

              <div className="relative mt-6 w-full max-w-[520px] mx-auto" style={{ aspectRatio: "1" }}>
                <svg
                  viewBox="0 0 520 520"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                >
                  <circle
                    cx="260"
                    cy="260"
                    r="218"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="6 8"
                  />
                  <circle
                    cx="260"
                    cy="260"
                    r="145"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    opacity="0.7"
                  />
                </svg>

                <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-input bg-canvas/95 shadow-float flex flex-col items-center justify-center gap-2 animate-float">
                    <img
                      src={brandLogo}
                      alt="Brand logo"
                      className="w-9 h-9 md:w-10 md:h-10 object-contain"
                    />
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                      Build Core
                    </span>
                  </div>
                </div>

                {CORE_SERVICES.map((service, index) => {
                  const angle = (index * 360) / CORE_SERVICES.length - 92;
                  const radius = 31;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      key={service.label}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="flex items-center gap-1.5 bg-text-primary text-canvas rounded-full px-2.5 py-1.5 md:px-3.5 md:py-2 text-[9px] md:text-[12px] font-medium whitespace-nowrap shadow-card">
                        <service.icon size={13} strokeWidth={1.8} className="text-canvas shrink-0" />
                        <span>{service.label}</span>
                      </div>
                    </div>
                  );
                })}

                {SECONDARY.map((label, index) => {
                  const angle = (index * 360) / SECONDARY.length - 66;
                  const radius = 47;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <span
                      key={label}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 text-[8px] md:text-[11px] font-medium text-text-secondary/75 border border-input rounded-full px-2 py-1 md:px-3 md:py-1 bg-canvas/95 whitespace-nowrap"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseMapSection;
