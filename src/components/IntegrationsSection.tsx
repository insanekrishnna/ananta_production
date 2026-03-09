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

        {/* Single-row flow with connecting line */}
        <div ref={flow.ref} className={flow.className}>
          <div className="relative flex items-center justify-between">
            {/* Connecting line behind cards */}
            <div className="absolute top-1/2 left-[60px] right-[60px] h-px bg-border -translate-y-1/2 z-0" />

            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative z-10 flex flex-col items-center gap-2">
                  {/* Card */}
                  <div className="bg-canvas border border-input rounded-xl w-[100px] h-[80px] flex flex-col items-center justify-center gap-1.5 shadow-card hover:shadow-float hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group">
                    <Icon size={18} strokeWidth={1.5} className="text-text-primary group-hover:text-primary transition-colors duration-300" />
                    <span className="text-[12px] font-medium text-text-primary">{step.label}</span>
                  </div>
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