import { INTEGRATIONS } from "@/data/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, Users, Target, Layout, Palette, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  { icon: Search, label: "Discovery", desc: "Research & audit" },
  { icon: Users, label: "Audience", desc: "Define personas" },
  { icon: Target, label: "Strategy", desc: "Position & voice" },
  { icon: Layout, label: "Design", desc: "Visual identity" },
  { icon: Palette, label: "Refine", desc: "Iterate & polish" },
  { icon: Rocket, label: "Launch", desc: "Deploy & scale" },
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
        <div ref={right.ref} className={`flex-1 min-w-0 ${right.className}`}>
          <div className="relative">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.label} className="relative flex items-start gap-4">
                  {/* Vertical line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-11 h-11 rounded-full border-2 border-primary/20 bg-canvas flex items-center justify-center z-10 group hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <Icon size={18} strokeWidth={1.5} className="text-primary" />
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-primary/5" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-2 pb-4 ${isEven ? '' : 'md:translate-x-4'}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-primary/40 tracking-widest uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-[15px] font-semibold text-text-primary">{step.label}</h4>
                    </div>
                    <p className="text-[13px] text-text-secondary">{step.desc}</p>
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
