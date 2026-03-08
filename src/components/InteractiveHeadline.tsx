import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sparkles, Monitor, Play, Box, Target, Rocket, Building2, Zap, Palette, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const everythingItems: { label: string; icon: LucideIcon }[] = [
  { label: "Branding", icon: Sparkles },
  { label: "Digital", icon: Monitor },
  { label: "Motion", icon: Play },
  { label: "Product", icon: Box },
  { label: "Strategy", icon: Target },
];

const everyoneItems: { label: string; icon: LucideIcon }[] = [
  { label: "Startups", icon: Rocket },
  { label: "Enterprises", icon: Building2 },
  { label: "Agencies", icon: Zap },
  { label: "Creators", icon: Palette },
  { label: "Non-Profits", icon: Heart },
];

const InteractiveHeadline = () => {
  const [openDropdown, setOpenDropdown] = useState<"everything" | "everyone" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(0);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (key: "everything" | "everyone") => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <section className="py-20 px-4 md:px-10">
      <div
        ref={containerRef}
        className="max-w-canvas mx-auto flex flex-col items-center"
      >
        <div
          ref={reveal.ref}
          className={`relative text-center ${reveal.className}`}
        >
          <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary">
            We design{" "}
            <span className="relative inline-block">
              <button
                onClick={() => toggle("everything")}
                className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                Everything
                <span className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                  style={{ transform: openDropdown === "everything" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▾
                </span>
              </button>

              {/* Everything Dropdown */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                style={{
                  opacity: openDropdown === "everything" ? 1 : 0,
                  transform: openDropdown === "everything" ? "translateY(0)" : "translateY(10px)",
                  pointerEvents: openDropdown === "everything" ? "auto" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div className="bg-canvas border border-input rounded-[14px] shadow-float p-2 min-w-[200px]">
                  {everythingItems.map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="text-primary text-[14px]">{item.emoji}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </span>{" "}
            for{" "}
            <span className="relative inline-block">
              <button
                onClick={() => toggle("everyone")}
                className="text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                Everyone
                <span className="ml-1 text-[0.6em] opacity-60 inline-block transition-transform duration-200"
                  style={{ transform: openDropdown === "everyone" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▾
                </span>
              </button>

              {/* Everyone Dropdown */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                style={{
                  opacity: openDropdown === "everyone" ? 1 : 0,
                  transform: openDropdown === "everyone" ? "translateY(0)" : "translateY(10px)",
                  pointerEvents: openDropdown === "everyone" ? "auto" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div className="bg-canvas border border-input rounded-[14px] shadow-float p-2 min-w-[200px]">
                  {everyoneItems.map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left text-[15px] font-medium text-text-primary hover:bg-secondary transition-colors duration-150"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="text-[14px]">{item.emoji}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHeadline;
