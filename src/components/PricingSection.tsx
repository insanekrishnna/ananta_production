import { PRICING_PLANS } from "@/data/content";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const header = useScrollReveal(0);

  return (
    <section id="pricing" className="py-12 px-4 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-8 ${header.className}`}>
          <h2 className="text-[26px] md:text-[30px] font-bold text-text-primary text-center leading-[1.2] mb-6">
            Simple, transparent pricing
          </h2>

          <div className="flex items-center bg-[#f3f3f3] rounded-pill p-0.5 gap-0">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-pill text-[13px] font-medium transition-all duration-200 ${!annual ? "bg-[#1a1a1a] text-white shadow-sm" : "text-[#999]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-pill text-[13px] font-medium transition-all duration-200 ${annual ? "bg-[#1a1a1a] text-white shadow-sm" : "text-[#999]"}`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={index * 100} annual={annual} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, delay, annual }: { plan: typeof PRICING_PLANS[number]; delay: number; annual: boolean }) => {
  const reveal = useScrollReveal(delay);
  const displayPrice = annual ? plan.annualPrice : plan.price;
  const displayPeriod = annual ? plan.annualPeriod : plan.period;
  const isDark = plan.highlighted;

  return (
    <div
      ref={reveal.ref}
      className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col ${reveal.className} ${
        isDark
          ? "bg-[#1a1a1a] text-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.3)]"
          : "bg-white text-[#1a1a1a] border border-[#e8e8e8] shadow-[0_1px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_-6px_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="text-[15px] font-semibold tracking-tight mb-4">{plan.name}</div>

      <div className="flex items-baseline gap-0.5 mb-1.5">
        <span className="text-[36px] font-extrabold leading-none tracking-tight">{displayPrice}</span>
        {displayPeriod && (
          <span className={`text-[13px] ${isDark ? "text-white/40" : "text-[#aaa]"}`}>
            {displayPeriod}
          </span>
        )}
      </div>

      <p className={`text-[12px] mb-5 leading-relaxed ${isDark ? "text-white/50" : "text-[#999]"}`}>
        {plan.description}
      </p>

      <div className={`w-full h-px mb-5 ${isDark ? "bg-white/10" : "bg-[#f0f0f0]"}`} />

      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-[12px]">
            <Check
              size={14}
              strokeWidth={2.5}
              className={isDark ? "text-white/50 shrink-0" : "text-[#1a1a1a] shrink-0"}
            />
            <span className={isDark ? "text-white/80" : "text-[#555]"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2.5 rounded-pill text-[13px] font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 group ${
          isDark
            ? "bg-white text-[#1a1a1a] hover:bg-[#f5f5f5]"
            : "bg-[#1a1a1a] text-white hover:bg-[#333]"
        }`}
      >
        {plan.cta}
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default PricingSection;
