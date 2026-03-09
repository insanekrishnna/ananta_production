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
  const left = useScrollReveal(0);
  const right = useScrollReveal(200);

  return (
    <section id="integrations" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        {/* Header */}
        <div ref={left.ref} className={`mb-10 max-w-2xl ${left.className}`}>
          <span className="bg-primary/10 text-primary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] inline-block mb-4">
            {INTEGRATIONS.tag}
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary leading-[1.2] mb-4">
            {INTEGRATIONS.heading}
          </h2>
          <p className="text-base text-text-secondary leading-[1.65]">{INTEGRATIONS.body}</p>
        </div>

        {/* Horizontal Flow */}
        <div ref={right.ref} className={`overflow-x-auto ${right.className}`}>
          <div className="flex items-center gap-0 min-w-max px-2 py-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  {/* Card node */}
                  <div className="bg-canvas border border-input rounded-xl px-4 py-3 shadow-card flex flex-col items-center gap-2 hover:shadow-float transition-shadow duration-200 min-w-[100px]">
                    <div className="w-9 h-9 rounded-full bg-muted/40 flex items-center justify-center">
                      <Icon size={16} strokeWidth={1.5} className="text-text-primary" />
                    </div>
                    <span className="text-[13px] font-medium text-text-primary">{step.label}</span>
                  </div>

                  {/* Connector */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="flex items-center mx-1">
                      <div className="h-px w-4 bg-border" />
                      <div className="w-2 h-2 rounded-full border-2 border-border bg-canvas shrink-0" />
                      <div className="h-px w-4 bg-border" />
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
