import { TESTIMONIALS } from "@/data/content";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const header = useScrollReveal(0);

  return (
    <section className="py-16 px-4 md:px-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-canvas mx-auto relative z-10">
        <div ref={header.ref} className={`flex flex-col items-center mb-12 ${header.className}`}>
          <span className="inline-flex items-center gap-2 bg-primary/[0.06] text-primary rounded-pill px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] mb-5">
            <Star size={14} className="fill-primary" />
            Testimonials
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-primary text-center leading-[1.15] max-w-xl">
            Trusted by ambitious brands worldwide
          </h2>
          <p className="text-base text-text-secondary text-center mt-3 max-w-md leading-[1.65]">
            See what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.name} t={t} delay={index * 150} index={index} />
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
      className={`relative group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${reveal.className} ${
        isHighlighted
          ? "bg-primary text-primary-foreground shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)] scale-[1.02]"
          : "bg-canvas border border-input shadow-card hover:shadow-float-hover"
      }`}
    >
      {/* Quote icon */}
      <div className={`mb-5 ${isHighlighted ? "text-primary-foreground/30" : "text-primary/15"}`}>
        <Quote size={40} strokeWidth={1.5} className="fill-current" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={isHighlighted ? "fill-yellow-300 text-yellow-300" : "fill-[#F59E0B] text-[#F59E0B]"}
          />
        ))}
      </div>

      {/* Quote text */}
      <p className={`text-[15px] leading-[1.75] mb-8 ${
        isHighlighted ? "text-primary-foreground/90" : "text-text-nav"
      }`}>
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ring-2 transition-all duration-300 ${
            isHighlighted
              ? "ring-primary-foreground/20 text-primary-foreground"
              : "ring-transparent group-hover:ring-primary/20 text-primary-foreground"
          }`}
          style={{ backgroundColor: isHighlighted ? "rgba(255,255,255,0.2)" : t.avatarBg }}
        >
          {t.initials}
        </div>
        <div>
          <div className={`text-sm font-semibold ${isHighlighted ? "text-primary-foreground" : "text-text-primary"}`}>
            {t.name}
          </div>
          <div className={`text-[13px] ${isHighlighted ? "text-primary-foreground/70" : "text-text-secondary"}`}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
