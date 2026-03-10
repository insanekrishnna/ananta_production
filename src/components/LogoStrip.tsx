import { LOGOS } from "@/data/content";

const LogoStrip = () => {
  // Double the logos for seamless loop
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="pt-2 pb-0 px-0 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-6">
            {doubled.map((logo, i) =>
            <span
              key={`${logo}-${i}`}
              className="text-[15px] font-semibold text-text-nav border border-input rounded-pill px-5 py-1.5 inline-block shrink-0">
              
                {logo}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default LogoStrip;