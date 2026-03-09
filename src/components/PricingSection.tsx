import { PRICING_PLANS } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const header = useScrollReveal(0);

  return (
    <section id="pricing" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-10 ${header.className}`}>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center leading-[1.2] mb-8">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="flex items-center bg-[#f5f5f5] rounded-pill p-1 gap-0">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-all ${!annual ? "bg-black text-white" : "text-black/50"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-all ${annual ? "bg-black text-white" : "text-black/50"}`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={index * 150} annual={annual} />
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

  return (
    <div
      ref={reveal.ref}
      className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 flex flex-col ${reveal.className} ${
        plan.highlighted
          ? "bg-black text-white border-black shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] scale-[1.02] relative z-10"
          : "bg-white text-black border-black/10 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]"
      }`}
    >
      <div className="text-lg font-bold tracking-tight mb-3">{plan.name}</div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-[44px] font-extrabold leading-none tracking-tight">{displayPrice}</span>
        {displayPeriod && (
          <span className={`text-sm ${plan.highlighted ? "text-white/50" : "text-black/40"}`}>
            {displayPeriod}
          </span>
        )}
      </div>
      <p className={`text-[13px] mb-6 leading-relaxed ${plan.highlighted ? "text-white/60" : "text-black/50"}`}>
        {plan.description}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[13px]">
            <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 ${
              plan.highlighted ? "bg-white/15" : "bg-black/5"
            }`}>
              <Check
                size={12}
                strokeWidth={2.5}
                className={plan.highlighted ? "text-white" : "text-black"}
              />
            </div>
            <span className={plan.highlighted ? "text-white/90" : "text-black/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-pill text-sm font-semibold transition-all duration-200 ${
          plan.highlighted
            ? "bg-white text-black hover:bg-white/90"
            : "bg-black text-white hover:bg-black/90"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
};

export default PricingSection;
