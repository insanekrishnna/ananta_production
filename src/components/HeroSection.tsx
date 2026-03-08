import { useState, useRef, useEffect } from "react";
import { HERO, FLOATING_ICONS } from "@/data/content";
import { Play, Globe, ShoppingBag, Sheet, Building2, Briefcase, Store, Landmark, Heart, Sparkles, Monitor, PlayCircle, Box, Target } from "lucide-react";
import heroPreview from "@/assets/hero-preview.png";
import type { LucideIcon } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";
import pinterestLogo from "@/assets/pinterest-logo.png";
import dribbbleLogo from "@/assets/dribbble-logo-new.png";

const iconMap: Record<string, LucideIcon> = {
  Browser: Globe,
  Shopify: ShoppingBag,
  Sheets: Sheet
};

const TwitterIcon = () =>
<div className="w-8 h-8 rounded-[6px] bg-[#000000] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </div>;


const DribbbleIcon = () =>
<div className="w-8 h-8 rounded-[6px] bg-[#EA4C89] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  </div>;


const PinterestIcon = () =>
<div className="w-8 h-8 rounded-[6px] bg-[#E60023] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  </div>;


const BehanceIcon = () =>
<div className="w-8 h-8 rounded-[6px] bg-[#1769FF] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.554-.283.416-.7.757-1.25 1.026.744.218 1.305.591 1.689 1.118.38.529.574 1.164.574 1.912 0 .621-.13 1.158-.389 1.617-.261.457-.605.832-1.034 1.126-.433.292-.921.506-1.461.641-.543.137-1.089.205-1.636.205H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 00-.417-.428 1.683 1.683 0 00-.597-.215 3.609 3.609 0 00-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.027.76-.083.241-.055.453-.143.636-.261a1.335 1.335 0 00.449-.476c.112-.197.168-.45.168-.756 0-.609-.187-1.049-.563-1.321-.376-.271-.857-.407-1.448-.407H4.71v3.304h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.277-.374.354-.249.57-.515.646-.798h2.14c-.339 1.063-.862 1.814-1.572 2.257-.707.441-1.56.663-2.557.663-.702 0-1.334-.113-1.9-.343a4.074 4.074 0 01-1.461-1.003 4.493 4.493 0 01-.928-1.571 5.884 5.884 0 01-.33-2.028c0-.702.114-1.358.34-1.967a4.553 4.553 0 01.977-1.58 4.498 4.498 0 011.49-1.05c.58-.254 1.228-.381 1.935-.381.779 0 1.456.157 2.03.472.573.316 1.041.734 1.404 1.257.363.524.622 1.121.777 1.794.155.672.2 1.374.135 2.105h-6.416c.023.82.272 1.452.639 1.81zm2.767-4.676c-.291-.321-.783-.482-1.384-.482a2.22 2.22 0 00-.975.196 1.856 1.856 0 00-.629.478c-.161.19-.27.399-.327.627a3.04 3.04 0 00-.1.596h4.159c-.081-.645-.353-1.094-.744-1.415zM15.4 5h4.2v1.4h-4.2V5z" />
    </svg>
  </div>;


const FigmaIcon = () =>
<div className="w-8 h-8 rounded-[6px] bg-[#A259FF] flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 8.962h-4.588c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM9.618 8.962c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.962H9.618zm3.117 8.962H9.618c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h3.117v8.98zm0 0c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49h4.49v4.49zm4.49-8.962c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49z" />
    </svg>
  </div>;


const FloatingIcon = ({
  icon


}: {icon: (typeof FLOATING_ICONS)[number];}) => {
  const posStyle: React.CSSProperties = {
    top: icon.top,
    animationDelay: icon.delay
  };
  if ("left" in icon && icon.left) posStyle.left = icon.left;
  if ("right" in icon && icon.right) posStyle.right = icon.right;

  const LucideIcon = iconMap[icon.name];

  return (
    <div
      className="absolute hidden md:flex w-12 h-12 rounded-[12px] bg-canvas/80 shadow-sm items-center justify-center animate-float"
      style={posStyle}
      aria-label={icon.name}>
      
      {icon.name === "Instagram" ?
      <img src={instagramLogo} alt="Instagram" className="w-8 h-8 rounded-[6px]" /> :
      icon.name === "LinkedIn" ?
      <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 rounded-[6px]" /> :
      icon.name === "Twitter" ?
      <TwitterIcon /> :
      icon.name === "Dribbble" ?
      <img src={dribbbleLogo} alt="Dribbble" className="w-8 h-8 rounded-[6px]" /> :
      icon.name === "Pinterest" ?
      <img src={pinterestLogo} alt="Pinterest" className="w-8 h-8 rounded-[6px]" /> :
      icon.name === "Behance" ?
      <BehanceIcon /> :
      icon.name === "Figma" ?
      <FigmaIcon /> :
      LucideIcon ?
      <LucideIcon size={18} strokeWidth={1.2} className="text-text-primary" /> :

      <span className="text-sm font-medium text-text-primary">{icon.letter}</span>
      }
    </div>);

};

const companyItems: {label: string;icon: LucideIcon;}[] = [
{ label: "Startups", icon: Building2 },
{ label: "Brands", icon: Briefcase },
{ label: "E-Commerce", icon: Store },
{ label: "Institutions", icon: Landmark },
{ label: "Non-Profits", icon: Heart }];


const innovationItems: {label: string;icon: LucideIcon;}[] = [
{ label: "Branding", icon: Sparkles },
{ label: "Digital", icon: Monitor },
{ label: "Motion", icon: PlayCircle },
{ label: "Product", icon: Box },
{ label: "Strategy", icon: Target }];


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
    <section id="hero" className="relative min-h-[560px] pt-20 pb-0 overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none gradient-mesh" />

      {/* Floating icons */}
      {FLOATING_ICONS.map((icon) =>
      <FloatingIcon key={icon.name} icon={icon} />
      )}

      {/* Content */}
      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center px-[16px]">
        <h1
          className="text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary max-w-[960px] animate-hero-fade">
          
          {HERO.heading.parts.map((part, i) =>
          part.text === "\n" ?
          <br key={i} /> :
          part.accent && part.text === "companies" ?
          <span key={i} className={`relative inline-block ${openDropdown === "companies" ? "z-[999]" : ""}`}>
                <button
              onClick={() => setOpenDropdown((prev) => prev === "companies" ? null : "companies")}
              className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none">
              
                  {part.text}
                  <span
                className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                style={{ transform: openDropdown === "companies" ? "rotate(180deg)" : "rotate(0deg)" }}>
                
                    ▾
                  </span>
                </button>
                <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[999]"
              style={{
                opacity: openDropdown === "companies" ? 1 : 0,
                transform: openDropdown === "companies" ? "translateY(0)" : "translateY(10px)",
                pointerEvents: openDropdown === "companies" ? "auto" : "none",
                transition: "all 0.25s ease"
              }}>
              
                  <div className="bg-background border border-input rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 min-w-[200px] backdrop-blur-none">
                    {companyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150" onClick={() => setOpenDropdown(null)}>
                          <Icon size={16} className="text-primary" />
                          {item.label}
                        </button>);

                })}
                  </div>
                </div>
              </span> :
          part.accent && part.text === "innovation" ?
          <span key={i} className={`relative inline-block ${openDropdown === "innovation" ? "z-[999]" : ""}`}>
                <button
              onClick={() => setOpenDropdown((prev) => prev === "innovation" ? null : "innovation")}
              className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none">
              
                  {part.text}
                  <span
                className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                style={{ transform: openDropdown === "innovation" ? "rotate(180deg)" : "rotate(0deg)" }}>
                
                    ▾
                  </span>
                </button>
                <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[999]"
              style={{
                opacity: openDropdown === "innovation" ? 1 : 0,
                transform: openDropdown === "innovation" ? "translateY(0)" : "translateY(10px)",
                pointerEvents: openDropdown === "innovation" ? "auto" : "none",
                transition: "all 0.25s ease"
              }}>
              
                  <div className="bg-background border border-input rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 min-w-[200px] backdrop-blur-none">
                    {innovationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150" onClick={() => setOpenDropdown(null)}>
                          <Icon size={16} className="text-primary" />
                          {item.label}
                        </button>);

                })}
                  </div>
                </div>
              </span> :
          part.accent ?
          <span key={i} className="text-primary">{part.text}</span> :

          <span key={i}>{part.text}</span>

          )}
        </h1>

        <p
          className="text-base text-text-secondary leading-[1.65] max-w-[440px] mt-6 animate-hero-fade font-normal"
          style={{ animationDelay: "100ms" }}>
          
          {HERO.subheading}
        </p>

        <button
          className="mt-10 flex items-center gap-2 bg-demo text-primary-foreground rounded-pill h-14 text-[15px] font-semibold hover:scale-[1.02] transition-transform animate-hero-fade my-0 px-[19px]"
          style={{ animationDelay: "200ms" }}>
          
          <span className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center">
            <Play className="w-4 h-4 text-text-primary fill-text-primary" />
          </span>
          <span>{HERO.cta.label}</span>
          
        </button>

        {/* App Window Preview */}
        <div
          className="w-full max-w-[960px] mt-12 rounded-t-[16px] border border-input shadow-app overflow-hidden animate-hero-fade"
          style={{ animationDelay: "300ms" }}>
          
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
              {[80, 65, 90, 55, 72].map((w, i) =>
              <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-sm bg-primary/20" />
                  <div className="h-3 bg-secondary rounded-pill" style={{ width: `${w}%` }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;