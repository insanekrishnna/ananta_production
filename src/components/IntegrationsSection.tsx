import { INTEGRATIONS } from "@/data/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const IntegrationsSection = () => {
  const left = useScrollReveal(0);
  const right = useScrollReveal(200);

  return (
    <section id="integrations" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left */}
        <div ref={left.ref} className={`flex-1 ${left.className}`}>
          <span className="bg-primary/10 text-primary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] inline-block mb-4">
            {INTEGRATIONS.tag}
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary leading-[1.2] mb-4">
            {INTEGRATIONS.heading}
          </h2>
          <p className="text-base text-text-secondary leading-[1.65] mb-6">{INTEGRATIONS.body}</p>
          <a href="#" className="text-[15px] font-semibold text-primary hover:underline">
            {INTEGRATIONS.cta}
          </a>
        </div>

        {/* Right grid */}
        <div ref={right.ref} className={`grid grid-cols-3 md:grid-cols-4 gap-4 ${right.className}`}>
          {INTEGRATIONS.apps.map((app) => (
            <div
              key={app.name}
              className="w-[72px] h-[72px] bg-canvas rounded-[14px] border border-input shadow-card flex items-center justify-center hover:shadow-float transition-shadow duration-200"
              title={app.name}
            >
              <div
                className="w-10 h-10 rounded-[8px] flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: app.bg, color: "#fff" }}
              >
                {app.letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
