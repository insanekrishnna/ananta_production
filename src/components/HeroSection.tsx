import { useState, useRef, useEffect } from "react";
import { HERO } from "@/data/content";
import { Play, Building2, Briefcase, Store, Landmark, Heart, Sparkles, Monitor, PlayCircle, Box, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import samukCard from "@/assets/samuk-card.png";
import brandLogo from "@/assets/sidebar-logo.png";
import VideoModal from "@/components/VideoModal";

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
    <section id="hero" className="relative min-h-[560px] pt-20 pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none gradient-mesh" />

      <div ref={containerRef} className="relative z-10 text-center px-[16px] items-center justify-start flex flex-col gap-0 py-[10px]">
        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary max-w-[960px]">
          {HERO.heading.parts.map((part, i) =>
            part.text === "\n" ? (
              <br key={i} />
            ) : part.accent && part.text === "companies" ? (
              <span key={i} className={`relative inline-block animate-hero-word ${openDropdown === "companies" ? "z-[999]" : ""}`} style={{ animationDelay: `${i * 80}ms` }}>
                <DropdownTrigger
                  label={part.text}
                  isOpen={openDropdown === "companies"}
                  onToggle={() => setOpenDropdown((prev) => (prev === "companies" ? null : "companies"))}
                  items={companyItems}
                  onClose={() => setOpenDropdown(null)}
                />
              </span>
            ) : part.accent && part.text === "innovation" ? (
              <span key={i} className={`relative inline-block animate-hero-word ${openDropdown === "innovation" ? "z-[999]" : ""}`} style={{ animationDelay: `${i * 80}ms` }}>
                <DropdownTrigger
                  label={part.text}
                  isOpen={openDropdown === "innovation"}
                  onToggle={() => setOpenDropdown((prev) => (prev === "innovation" ? null : "innovation"))}
                  items={innovationItems}
                  onClose={() => setOpenDropdown(null)}
                />
              </span>
            ) : part.accent ? (
              <span key={i} className="text-primary animate-hero-word" style={{ animationDelay: `${i * 80}ms` }}>{part.text}</span>
            ) : (
              <span key={i} className="animate-hero-word" style={{ animationDelay: `${i * 80}ms` }}>{part.text}</span>
            )
          )}
        </h1>

        <p
          className="text-base text-text-secondary leading-[1.65] max-w-[440px] mt-6 animate-hero-fade font-medium"
          style={{ animationDelay: "400ms" }}
        >
          {HERO.subheading}
        </p>

        <VideoModal>
          <button
            className="mt-10 flex items-center gap-2 bg-demo text-primary-foreground rounded-pill h-14 text-[15px] font-semibold hover:scale-[1.02] transition-transform animate-hero-fade my-0 px-[19px]"
            style={{ animationDelay: "500ms" }}
          >
            <span className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center">
              <Play className="w-4 h-4 text-text-primary fill-text-primary" />
            </span>
            <span>{HERO.cta.label}</span>
          </button>
        </VideoModal>

        {/* App Window Preview */}
        <div
          className="w-full max-w-[720px] mt-12 rounded-[16px] border border-input shadow-app overflow-hidden animate-hero-fade"
          style={{ animationDelay: "600ms" }}
        >
          <div className="h-9 bg-secondary flex items-center gap-1.5 px-4 border-b border-input">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28C840" }} />
          </div>
          <div className="bg-canvas p-4 flex gap-3 min-h-[200px]">
            <div className="hidden md:flex flex-col items-start gap-2.5 w-36 pr-3 border-r border-input">
              <img src={brandLogo} alt="Logo" className="w-5 h-5 object-contain mb-1" />
              <div className="h-2.5 w-28 bg-primary/10 rounded-pill" />
              <div className="h-2.5 w-24 bg-secondary rounded-pill" />
              <div className="h-2.5 w-16 bg-secondary rounded-pill" />
              <div className="h-2.5 w-30 bg-secondary rounded-pill" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={samukCard} alt="Samuk - Beyond the Moment" className="w-full h-full object-cover rounded-[8px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DropdownTrigger = ({
  label,
  isOpen,
  onToggle,
  items,
  onClose,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  items: { label: string; icon: LucideIcon }[];
  onClose: () => void;
}) => (
  <>
    <button
      onClick={onToggle}
      className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none"
    >
      {label}
      <span
        className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        ▾
      </span>
    </button>
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[999]"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        pointerEvents: isOpen ? "auto" : "none",
        transition: "all 0.25s ease",
      }}
    >
      <div className="bg-background border border-input rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-2 min-w-[200px] backdrop-blur-none">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150"
              onClick={onClose}
            >
              <Icon size={16} className="text-primary" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  </>
);

export default HeroSection;
