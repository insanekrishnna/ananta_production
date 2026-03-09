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
    <section id="integrations" className="py-10 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`mb-6 max-w-2xl ${header.className}`}>
          <h2 className="text-[28px] md:text-[36px] text-[#1a1a1a] leading-[1.2] font-medium mb-3">
            {INTEGRATIONS.heading}
          </h2>
        </div>

        <div ref={flow.ref} className={flow.className}>
          <div className="relative grid grid-cols-3 md:grid-cols-6 gap-3">
            <div className="hidden md:block absolute top-1/2 left-[50px] right-[50px] h-px bg-[#e8e8e8] -translate-y-1/2 z-0" />

            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative z-10 flex justify-center">
                  <div className="bg-white border border-[#e8e8e8] rounded-xl w-full h-[72px] flex flex-col items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#ccc] transition-all duration-300 group">
                    <Icon size={18} strokeWidth={1.5} className="text-[#1a1a1a] group-hover:text-black transition-colors duration-300" />
                    <span className="text-[12px] font-medium text-[#1a1a1a]">{step.label}</span>
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
