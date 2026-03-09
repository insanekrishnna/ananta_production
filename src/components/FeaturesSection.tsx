import { FEATURES } from "@/data/content";
import { Compass, PenTool, Earth } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const iconMap = { Compass, PenTool, Earth } as const;

const FeaturesSection = () => {
  const header = useScrollReveal(0);

  return (
    <section id="features" className="py-12 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-start mb-8 ${header.className}`}>
          <h2 className="text-[20px] md:text-[24px] font-medium text-muted-foreground max-w-[640px] leading-[1.4] text-left tracking-tight">
            Our cross-disciplinary team combines strategy, branding, UX design, and technology for swift, impactful results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feat, index) => {
            const Icon = iconMap[feat.icon];
            return <FeatureCard key={feat.title} feat={feat} Icon={Icon} delay={index * 150} />;
          })}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feat,
  Icon,
  delay,
}: {
  feat: (typeof FEATURES)[number];
  Icon: any;
  delay: number;
}) => {
  const reveal = useScrollReveal(delay);
  return (
    <div
      ref={reveal.ref}
      className={`bg-canvas border border-input rounded-card p-6 hover:shadow-float-hover hover:-translate-y-1 transition-all duration-300 group ${reveal.className}`}
    >
      <div className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
        <Icon size={18} strokeWidth={1.2} className="text-text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-1.5">{feat.title}</h3>
      <p className="text-[14px] text-text-secondary leading-[1.6]">{feat.body}</p>
    </div>
  );
};

export default FeaturesSection;
