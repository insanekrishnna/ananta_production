import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, LayoutGrid, Database, GitBranch, AppWindow, ShieldCheck } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const CORE_SERVICES = [
  { icon: Users, label: "Client Portals" },
  { icon: Database, label: "CRM Tools" },
  { icon: LayoutGrid, label: "Internal Dashboards" },
  { icon: Database, label: "Data Integrations" },
  { icon: GitBranch, label: "Workflow Automation" },
  { icon: AppWindow, label: "No-code Apps" },
  { icon: ShieldCheck, label: "Custom Permissions" },
];

const SECONDARY = [
  "Airtable Sync", "REST APIs", "Google Sheets", "Role-based Access",
  "Form Builders", "SSO", "Custom Domains", "Email Notifications", "Embedded Analytics",
];

// Angles for placing items around a circle (in degrees)
const coreAngles = [-90, -40, 10, 50, 90, 140, 190];    // 7 core pills on inner orbit
const secAngles  = [-110, -60, -20, 20, 60, 100, 145, 190, 235]; // 9 secondary on outer orbit

const placeOnOrbit = (angleDeg: number, rx: number, ry: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + rx * Math.cos(rad), y: 50 + ry * Math.sin(rad) };
};

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
          {/* Square container for circular layout */}
          <div className="relative w-full max-w-[500px] mx-auto" style={{ aspectRatio: "1" }}>

            {/* Dashed orbit circles */}
            <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" fill="none">
              {/* Outer orbit (secondary) */}
              <circle cx="250" cy="250" r="230" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="6 6" />
              {/* Inner orbit (core) */}
              <circle cx="250" cy="250" r="155" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            </svg>

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-canvas border border-border shadow-card flex items-center justify-center">
                <img src={brandLogo} alt="Logo" className="w-7 h-7 md:w-9 md:h-9 object-contain" />
              </div>
            </div>

            {/* Core services – inner orbit (black pills) */}
            {CORE_SERVICES.map((s, i) => {
              const pos = placeOnOrbit(coreAngles[i], 30, 30);
              return (
                <div
                  key={s.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <CorePill icon={s.icon} label={s.label} />
                </div>
              );
            })}

            {/* Secondary services – outer orbit (white tags) */}
            {SECONDARY.map((label, i) => {
              const pos = placeOnOrbit(secAngles[i], 44, 44);
              return (
                <span
                  key={label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 text-[8px] md:text-[11px] font-medium text-text-secondary/40 border border-border rounded-full px-2 py-0.5 md:px-2.5 md:py-0.5 bg-canvas whitespace-nowrap"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
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

const CorePill = ({ icon: Icon, label }: { icon: React.ComponentType<any>; label: string }) => (
  <div className="flex items-center gap-1 bg-text-primary text-canvas rounded-full px-2 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[12px] font-medium whitespace-nowrap shadow-card hover:scale-105 transition-transform duration-200">
    <Icon size={12} strokeWidth={1.5} className="text-canvas shrink-0" />
    <span>{label}</span>
  </div>
);

export default ExpertiseMapSection;
