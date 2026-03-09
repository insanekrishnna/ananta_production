import { INTEGRATIONS } from "@/data/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, Users, Target, Layout, Palette, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  { icon: Search, label: "Discovery & Research" },
  { icon: Users, label: "Audience & Personas" },
  { icon: Target, label: "Strategy & Positioning" },
  { icon: Layout, label: "Visual Identity Design" },
  { icon: Palette, label: "Refine & Iterate" },
  { icon: Rocket, label: "Launch & Scale" },
];

const IntegrationsSection = () => {
  const left = useScrollReveal(0);
  const right = useScrollReveal(200);

  return (
    <section id="integrations" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left */}
        <div ref={left.ref} className={`flex-1 min-w-0 ${left.className}`}>
          <span className="bg-primary/10 text-primary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] inline-block mb-4">
            {INTEGRATIONS.tag}
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary leading-[1.2] mb-4">
            {INTEGRATIONS.heading}
          </h2>
          <p className="text-base text-text-secondary leading-[1.65] mb-6">{INTEGRATIONS.body}</p>
          <a href="#" className="text-[15px] font-semibold text-primary hover:underline">
            {INTEGRATIONS.cta}
          </a>
        </div>

        {/* Right - Flow Diagram */}
        <div ref={right.ref} className={`flex-1 min-w-0 flex justify-center ${right.className}`}>
          <div className="flex flex-col items-center">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-center">
                  {/* Card node */}
                  <div className="bg-canvas border border-input rounded-xl px-5 py-3 shadow-card flex items-center gap-3 hover:shadow-float transition-shadow duration-200 min-w-[200px]">
                    <Icon size={16} strokeWidth={1.5} className="text-text-primary shrink-0" />
                    <span className="text-[14px] font-medium text-text-primary">{step.label}</span>
                  </div>

                  {/* Connector */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3 bg-border" />
                      <div className="w-2 h-2 rounded-full border-2 border-border bg-canvas" />
                      <div className="w-px h-3 bg-border" />
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
