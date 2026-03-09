import { useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CASE_STUDIES = [
  {
    title: "Samuk",
    category: "Brand Identity",
    color: "hsl(var(--primary))",
    gradient: "from-[hsl(243,75%,59%)] to-[hsl(243,75%,40%)]",
  },
  {
    title: "Avtar®",
    category: "Visual System",
    color: "hsl(160, 84%, 39%)",
    gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,84%,25%)]",
  },
  {
    title: "Twinkle",
    category: "Motion Design",
    color: "hsl(32, 95%, 44%)",
    gradient: "from-[hsl(32,95%,44%)] to-[hsl(32,95%,30%)]",
  },
  {
    title: "Rabbit",
    category: "Product Design",
    color: "hsl(0, 84%, 60%)",
    gradient: "from-[hsl(0,84%,60%)] to-[hsl(0,84%,40%)]",
  },
  {
    title: "Cont.",
    category: "Web Experience",
    color: "hsl(220, 13%, 26%)",
    gradient: "from-[hsl(220,13%,26%)] to-[hsl(220,13%,14%)]",
  },
];

const ExpertiseMapSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const header = useScrollReveal(0);

  return (
    <section id="expertise" className="py-12 px-0">
      <div className="max-w-canvas mx-auto px-4 md:px-10">
        <div ref={header.ref} className={`flex items-end justify-between mb-8 ${header.className}`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Selected Work</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary leading-[1.1] tracking-tight">
              Case Studies
            </h2>
          </div>
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" })}
            className="hidden md:flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Scroll →
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-10 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {CASE_STUDIES.map((study, i) => (
          <div
            key={study.title}
            className={`shrink-0 w-[280px] md:w-[340px] h-[420px] rounded-2xl bg-gradient-to-br ${study.gradient} snap-start relative overflow-hidden group cursor-pointer`}
          >
            {/* Minimal text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/50 mb-1">
                {study.category}
              </p>
              <h3 className="text-[28px] font-bold text-white leading-none tracking-tight">
                {study.title}
              </h3>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Number */}
            <span className="absolute top-5 right-6 text-[11px] font-semibold text-white/30">
              0{i + 1}
            </span>
          </div>
        ))}

        {/* CTA card */}
        <div className="shrink-0 w-[280px] md:w-[340px] h-[420px] rounded-2xl border border-input bg-canvas snap-start flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-primary/30 transition-colors duration-300">
          <span className="text-[36px] font-extralight text-text-secondary group-hover:text-primary transition-colors duration-300">→</span>
          <span className="text-[13px] font-medium text-text-secondary group-hover:text-text-primary transition-colors">View all work</span>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMapSection;
