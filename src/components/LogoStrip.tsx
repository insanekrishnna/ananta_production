import { LOGOS } from "@/data/content";

const LogoStrip = () => {
  return (
    <section className="pt-8 pb-0 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-sm text-[#999] font-medium">Collaboration with</span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-[15px] font-semibold text-[#555] border border-[#e8e8e8] rounded-pill px-4 py-1.5 inline-block hover:bg-[#f5f5f5] transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
