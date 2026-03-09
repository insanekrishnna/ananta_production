import { TESTIMONIALS } from "@/data/content";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import avatarMale from "@/assets/avatar-male.png";
import avatarFemale from "@/assets/avatar-female.png";

// Sarah=female, David=male, Elena=female
const AVATARS = [avatarFemale, avatarMale, avatarFemale];

const TestimonialsSection = () => {
  const header = useScrollReveal(0);

  return (
    <section className="py-8 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-canvas mx-auto relative z-10">
        <div ref={header.ref} className={`flex flex-col items-center mb-6 ${header.className}`}>
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1a1a] text-center leading-[1.2]">
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

  return (
    <div
      ref={reveal.ref}
      className={`relative group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 bg-white border border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] ${reveal.className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="fill-[#1a1a1a] text-[#1a1a1a]" />
          ))}
        </div>
        <Quote size={20} strokeWidth={1.5} className="text-[#1a1a1a]/10 fill-current" />
      </div>

      <p className="text-[13px] leading-[1.7] mb-4 text-[#666]">
        "{t.quote}"
      </p>

      <div className="flex items-center gap-2.5">
        <img
          src={AVATARS[index]}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-[#e8e8e8]"
        />
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-[#1a1a1a] truncate">{t.name}</div>
          <div className="text-[11px] text-[#999] truncate">{t.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
