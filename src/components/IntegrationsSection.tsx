import { INTEGRATIONS } from "@/data/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Origami, UserCheck, ChartPie, Layout, Palette, BadgeCheck } from "lucide-react";

const PROCESS_STEPS = [
  { icon: Origami, label: "Discovery" },
  { icon: UserCheck, label: "Audience" },
  { icon: ChartPie, label: "Strategy" },
  { icon: Layout, label: "Design" },
  { icon: Palette, label: "Refine" },
  { icon: BadgeCheck, label: "Launch" },
];

const IntegrationsSection = () => {
  const header = useScrollReveal(0);
  const flow = useScrollReveal(150);

  return (
    <section id="integrations" className="py-10 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        {/* Header */}
        <div ref={header.ref} className={`mb-6 max-w-2xl ${header.className}`}>
          <h2 className="text-[28px] md:text-[36px] text-text-primary leading-[1.2] font-medium mb-3">
            {INTEGRATIONS.heading}
          </h2>
        </div>

        {/* Single-row flow with connecting line */}
        <div ref={flow.ref} className={flow.className}>
          <div className="relative grid grid-cols-3 md:grid-cols-6 gap-3">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[50px] right-[50px] h-px bg-border -translate-y-1/2 z-0" />

            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative z-10 flex justify-center">
                  <div className="bg-canvas border border-input rounded-xl w-full h-[72px] flex flex-col items-center justify-center gap-1.5 shadow-card hover:shadow-float hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group">
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