import { LOGOS } from "@/data/content";

const LogoStrip = () => {
  return (
    <section className="pt-2 pb-0 px-4 py-[2px]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-sm text-muted-foreground font-medium">Collaboration with</span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {LOGOS.map((logo) =>
          <span
            key={logo}
            className="text-[15px] font-semibold text-text-nav border border-input rounded-pill px-4 py-1.5 inline-block">
            
              {logo}
            </span>
          )}
        </div>
      </div>
    </section>);

};

export default LogoStrip;