import { HERO, FLOATING_ICONS } from "@/data/content";
import { Play, Twitter } from "lucide-react";

const FloatingIcon = ({
  icon,
}: {
  icon: (typeof FLOATING_ICONS)[number];
}) => {
  const posStyle: React.CSSProperties = {
    top: icon.top,
    animationDelay: icon.delay,
  };
  if ("left" in icon && icon.left) posStyle.left = icon.left;
  if ("right" in icon && icon.right) posStyle.right = icon.right;

  return (
    <div
      className="absolute hidden md:flex w-16 h-16 rounded-float-icon bg-canvas shadow-float items-center justify-center animate-float"
      style={posStyle}
      aria-label={icon.name}
    >
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-primary-foreground font-bold text-sm"
        style={{ background: icon.bg, color: icon.bg === "#FFFFFF" ? "#000" : "#fff" }}
      >
        {icon.name === "Twitter" ? <Twitter size={20} fill="white" stroke="none" /> : icon.letter}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[640px] pt-24 pb-0 overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none gradient-mesh" />

      {/* Floating icons */}
      {FLOATING_ICONS.map((icon) => (
        <FloatingIcon key={icon.name} icon={icon} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary max-w-[720px] animate-hero-fade"
        >
          {HERO.heading.parts.map((part, i) =>
            part.accent ? (
              <span key={i} className="text-primary">{part.text}</span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h1>

        <p
          className="text-base text-text-secondary leading-[1.65] max-w-[440px] mt-6 animate-hero-fade"
          style={{ animationDelay: "100ms" }}
        >
          {HERO.subheading}
        </p>

        <button
          className="mt-10 flex items-center gap-2 bg-demo text-primary-foreground rounded-pill px-7 h-14 text-[15px] font-semibold hover:scale-[1.02] transition-transform animate-hero-fade"
          style={{ animationDelay: "200ms" }}
        >
          <span className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center">
            <Play className="w-4 h-4 text-text-primary fill-text-primary" />
          </span>
          <span>{HERO.cta.label}</span>
          <span className="text-muted-foreground text-sm">{HERO.cta.sub}</span>
        </button>

        {/* App Window Preview */}
        <div
          className="w-full max-w-[960px] mt-16 rounded-t-[16px] border border-input shadow-app overflow-hidden animate-hero-fade"
          style={{ animationDelay: "300ms" }}
        >
          {/* Title bar */}
          <div className="h-10 bg-secondary flex items-center gap-1.5 px-4 border-b border-input">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
          </div>
          {/* Mock content */}
          <div className="bg-canvas p-6 flex gap-4 min-h-[280px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-3 w-48 pr-4 border-r border-input">
              <div className="h-3 w-24 bg-secondary rounded-pill" />
              <div className="h-3 w-32 bg-primary/10 rounded-pill" />
              <div className="h-3 w-28 bg-secondary rounded-pill" />
              <div className="h-3 w-20 bg-secondary rounded-pill" />
              <div className="h-3 w-36 bg-secondary rounded-pill" />
            </div>
            {/* Table */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Customer Onboarding</div>
              {[80, 65, 90, 55, 72].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-sm bg-primary/20" />
                  <div className="h-3 bg-secondary rounded-pill" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
