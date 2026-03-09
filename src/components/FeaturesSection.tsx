import { FEATURES } from "@/data/content";
import { Fingerprint, Box, Earth } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const iconMap = { Fingerprint, Box, Earth } as const;

const FeaturesSection = () => {
  const header = useScrollReveal(0);

  return (
    <section id="features" className="py-12 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-start mb-8 ${header.className}`}>
          <h2 className="text-[20px] md:text-[24px] font-medium text-[#999] max-w-[640px] leading-[1.4] text-left tracking-tight">
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
      className={`bg-white border border-[#e8e8e8] rounded-2xl p-6 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group ${reveal.className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center mb-4 group-hover:bg-[#1a1a1a] transition-colors duration-300">
        <Icon size={18} strokeWidth={1.2} className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1.5">{feat.title}</h3>
      <p className="text-[13px] text-[#888] leading-[1.6]">{feat.body}</p>
    </div>
  );
};

export default FeaturesSection;
