import { TESTIMONIALS } from "@/data/content";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const header = useScrollReveal(0);

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-10 ${header.className}`}>
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-4">
            Testimonials
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center leading-[1.2]">
            Trusted by ambitious brands worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.name} t={t} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t, delay }: { t: typeof TESTIMONIALS[number]; delay: number }) => {
  const reveal = useScrollReveal(delay);
  return (
    <div
      ref={reveal.ref}
      className={`bg-canvas border border-input rounded-card p-8 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200 ${reveal.className}`}
    >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-[15px] text-text-nav leading-[1.65] mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                  <div className="text-sm text-text-secondary">{t.role}</div>
                </div>
              </div>
    </div>
  );
};

export default TestimonialsSection;
