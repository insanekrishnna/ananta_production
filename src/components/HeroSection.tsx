import { useState, useRef, useEffect } from "react";
import { HERO, FLOATING_ICONS } from "@/data/content";
import { Play, Globe, ShoppingBag, Sheet, Building2, Briefcase, Store, Landmark, Heart, Sparkles, Monitor, PlayCircle, Box, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";

const iconMap: Record<string, LucideIcon> = {
  Browser: Globe,
  Shopify: ShoppingBag,
  Sheets: Sheet,
};

const TwitterIcon = () => (
  <div className="w-8 h-8 rounded-[6px] bg-[#000000] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </div>
);

const DribbbleIcon = () => (
  <div className="w-8 h-8 rounded-[6px] bg-[#EA4C89] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  </div>
);

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

  const LucideIcon = iconMap[icon.name];

  return (
    <div
      className="absolute hidden md:flex w-12 h-12 rounded-[12px] bg-canvas/80 shadow-sm items-center justify-center animate-float"
      style={posStyle}
      aria-label={icon.name}
    >
      {icon.name === "Instagram" ? (
        <img src={instagramLogo} alt="Instagram" className="w-8 h-8 rounded-[6px]" />
      ) : icon.name === "LinkedIn" ? (
        <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 rounded-[6px]" />
      ) : icon.name === "Twitter" ? (
        <TwitterIcon />
      ) : icon.name === "Dribbble" ? (
        <DribbbleIcon />
      ) : LucideIcon ? (
        <LucideIcon size={18} strokeWidth={1.2} className="text-text-primary" />
      ) : (
        <span className="text-sm font-medium text-text-primary">{icon.letter}</span>
      )}
    </div>
  );
};

const companyItems: { label: string; icon: LucideIcon }[] = [
  { label: "Startups", icon: Building2 },
  { label: "Brands", icon: Briefcase },
  { label: "E-Commerce", icon: Store },
  { label: "Institutions", icon: Landmark },
  { label: "Non-Profits", icon: Heart },
];

const innovationItems: { label: string; icon: LucideIcon }[] = [
  { label: "Branding", icon: Sparkles },
  { label: "Digital", icon: Monitor },
  { label: "Motion", icon: PlayCircle },
  { label: "Product", icon: Box },
  { label: "Strategy", icon: Target },
];

const HeroSection = () => {
  const [openDropdown, setOpenDropdown] = useState<"companies" | "innovation" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="hero" className="relative min-h-[640px] pt-24 pb-0 overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none gradient-mesh" />

      {/* Floating icons */}
      {FLOATING_ICONS.map((icon) => (
        <FloatingIcon key={icon.name} icon={icon} />
      ))}

      {/* Content */}
      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary max-w-[960px] animate-hero-fade"
        >
          {HERO.heading.parts.map((part, i) =>
            part.text === "\n" ? (
              <br key={i} />
            ) : part.accent && part.text === "companies" ? (
              <span key={i} className={`relative inline-block ${openDropdown === "companies" ? "z-[999]" : ""}`}>
                <button
                  onClick={() => setOpenDropdown((prev) => prev === "companies" ? null : "companies")}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  {part.text}
                  <span
                    className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                    style={{ transform: openDropdown === "companies" ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[999]"
                  style={{
                    opacity: openDropdown === "companies" ? 1 : 0,
                    transform: openDropdown === "companies" ? "translateY(0)" : "translateY(10px)",
                    pointerEvents: openDropdown === "companies" ? "auto" : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div className="bg-background border border-input rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 min-w-[200px] backdrop-blur-none">
                    {companyItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150" onClick={() => setOpenDropdown(null)}>
                          <Icon size={16} className="text-primary" />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </span>
            ) : part.accent && part.text === "innovation" ? (
              <span key={i} className={`relative inline-block ${openDropdown === "innovation" ? "z-[999]" : ""}`}>
                <button
                  onClick={() => setOpenDropdown((prev) => prev === "innovation" ? null : "innovation")}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  {part.text}
                  <span
                    className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                    style={{ transform: openDropdown === "innovation" ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                  style={{
                    opacity: openDropdown === "innovation" ? 1 : 0,
                    transform: openDropdown === "innovation" ? "translateY(0)" : "translateY(10px)",
                    pointerEvents: openDropdown === "innovation" ? "auto" : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div className="bg-background border border-input rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 min-w-[200px] backdrop-blur-none">
                    {innovationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150" onClick={() => setOpenDropdown(null)}>
                          <Icon size={16} className="text-primary" />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </span>
            ) : part.accent ? (
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
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Active Projects</div>
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
