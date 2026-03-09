import { INTEGRATIONS } from "@/data/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, Users, Target, Layout, Palette, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  { icon: Search, label: "Discovery" },
  { icon: Users, label: "Audience" },
  { icon: Target, label: "Strategy" },
  { icon: Layout, label: "Design" },
  { icon: Palette, label: "Refine" },
  { icon: Rocket, label: "Launch" },
];

const IntegrationsSection = () => {
  const header = useScrollReveal(0);
  const flow = useScrollReveal(150);

  return (
    <section id="integrations" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        {/* Header */}
        <div ref={header.ref} className={`mb-12 max-w-2xl ${header.className}`}>
          <span className="bg-primary/10 text-primary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] inline-block mb-4">
            {INTEGRATIONS.tag}
          </span>
          <h2 className="text-[32px] md:text-[36px] text-text-primary leading-[1.2] font-medium">
            {INTEGRATIONS.heading}
          </h2>
        </div>

        {/* Process Flow — responsive grid, no scroll */}
        <div ref={flow.ref} className={flow.className}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative group">
                  {/* Rectangle card */}
                  <div className="relative bg-canvas border border-input rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-float hover:border-primary/20 hover:-translate-y-1">
                    {/* Step number */}
                    <span className="absolute top-3 right-3 text-[11px] font-semibold text-muted-foreground/40">
                      0{i + 1}
                    </span>

                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.5} className="text-text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>

                    {/* Label */}
                    <span className="text-sm font-medium text-text-primary">{step.label}</span>

                    {/* Bottom accent bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-10 transition-all duration-300" />
                  </div>

                  {/* Connector arrow (desktop only) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-[10px] -translate-y-1/2 z-10">
                      <div className="w-[18px] h-[2px] bg-border relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-border" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;