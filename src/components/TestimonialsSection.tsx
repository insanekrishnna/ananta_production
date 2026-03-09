import { TESTIMONIALS } from "@/data/content";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const header = useScrollReveal(0);

  return (
    <section className="py-8 px-4 md:px-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-canvas mx-auto relative z-10">
        <div ref={header.ref} className={`flex flex-col items-center mb-6 ${header.className}`}>
          <h2 className="text-[24px] md:text-[28px] font-bold text-text-primary text-center leading-[1.2]">
            Trusted by ambitious brands worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.name} t={t} delay={index * 100} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t, delay, index }: { t: typeof TESTIMONIALS[number]; delay: number; index: number }) => {
  const reveal = useScrollReveal(delay);
  const isHighlighted = index === 1;

  return (
    <div
      ref={reveal.ref}
      className={`relative group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 ${reveal.className} ${
        isHighlighted
          ? "bg-primary text-primary-foreground shadow-[0_12px_40px_-10px_hsl(var(--primary)/0.4)] scale-[1.02]"
          : "bg-canvas border border-input shadow-card hover:shadow-float-hover"
      }`}
    >
      {/* Stars + Quote inline */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={isHighlighted ? "fill-yellow-300 text-yellow-300" : "fill-[#F59E0B] text-[#F59E0B]"}
            />
          ))}
        </div>
        <Quote size={20} strokeWidth={1.5} className={`${isHighlighted ? "text-primary-foreground/20" : "text-primary/10"} fill-current`} />
      </div>

      {/* Quote text */}
      <p className={`text-[13px] leading-[1.7] mb-4 line-clamp-3 ${
        isHighlighted ? "text-primary-foreground/90" : "text-text-nav"
      }`}>
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-2.5">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
            isHighlighted ? "text-primary-foreground" : "text-primary-foreground"
          }`}
          style={{ backgroundColor: isHighlighted ? "rgba(255,255,255,0.2)" : t.avatarBg }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className={`text-[13px] font-semibold truncate ${isHighlighted ? "text-primary-foreground" : "text-text-primary"}`}>
            {t.name}
          </div>
          <div className={`text-[11px] truncate ${isHighlighted ? "text-primary-foreground/70" : "text-text-secondary"}`}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
