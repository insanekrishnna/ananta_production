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
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-4">
            Pricing
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center leading-[1.2] mb-8">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="flex items-center bg-secondary rounded-pill p-1 gap-0">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-all ${!annual ? "bg-primary text-primary-foreground" : "text-text-secondary"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-all ${annual ? "bg-primary text-primary-foreground" : "text-text-secondary"}`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, delay }: { plan: typeof PRICING_PLANS[number]; delay: number }) => {
  const reveal = useScrollReveal(delay);
  return (
    <div
      ref={reveal.ref}
      className={`rounded-card p-8 border transition-all duration-200 ${reveal.className} ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary scale-[1.02] shadow-[0_16px_48px_rgba(79,70,229,0.25)]"
                  : "bg-canvas text-text-primary border-input shadow-card"
              }`}
            >
              <div className="text-xl font-semibold mb-2">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[40px] font-extrabold leading-none">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-primary-foreground/60" : "text-text-secondary"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-text-secondary"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check
                      size={16}
                      strokeWidth={2}
                      className={plan.highlighted ? "text-primary-foreground/60" : "text-primary"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero-ghost" : plan.name === "Enterprise" ? "ghost" : "hero-primary"}
                size="lg"
                className={`w-full ${plan.highlighted ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none" : ""}`}
              >
                {plan.cta}
              </Button>
    </div>
  );
};

export default PricingSection;
