import { ArrowDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import samukOld from "@/assets/samuk-old-logo.png";
import samukNew from "@/assets/samuk-new-logo.png";

const CaseStudySection = () => {
  const header = useScrollReveal(0);
  const card = useScrollReveal(150);

  return (
    <section id="case-study" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-10 ${header.className}`}>
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-3">
            Case Study
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center max-w-[560px] leading-[1.2]">
            Logo Evolution
          </h2>
          <p className="text-base text-text-secondary leading-[1.65] text-center max-w-[440px] mt-4">
            Transforming the brand from a simple mark to a vibrant modern identity.
          </p>
        </div>

        <div ref={card.ref} className={`flex justify-center ${card.className}`}>
          <div className="flex flex-col items-center gap-6 max-w-[360px] w-full">
            {/* Old Identity */}
            <div className="w-full bg-canvas border border-input rounded-[16px] p-8 shadow-float flex flex-col items-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary mb-4">Old Identity</span>
              <img src={samukOld} alt="Samuk old logo" className="max-h-[100px] object-contain" />
            </div>

            {/* Flow Arrow */}
            <div className="flex flex-col items-center gap-1 text-text-secondary">
              <div className="w-px h-8 bg-border" />
              <ArrowDown className="w-5 h-5" />
              <div className="w-px h-8 bg-border" />
            </div>

            {/* New Identity */}
            <div className="w-full bg-canvas border border-input rounded-[16px] p-8 shadow-float flex flex-col items-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary mb-4">New Identity</span>
              <img src={samukNew} alt="Samuk new logo" className="max-h-[100px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
