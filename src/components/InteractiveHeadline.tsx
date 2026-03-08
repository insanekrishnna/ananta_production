import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sparkles, Monitor, Play, Box, Target, Rocket, Building2, Zap, Palette, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const everythingItems: {label: string;icon: LucideIcon;}[] = [
{ label: "Branding", icon: Sparkles },
{ label: "Digital", icon: Monitor },
{ label: "Motion", icon: Play },
{ label: "Product", icon: Box },
{ label: "Strategy", icon: Target }];


const everyoneItems: {label: string;icon: LucideIcon;}[] = [
{ label: "Startups", icon: Rocket },
{ label: "Enterprises", icon: Building2 },
{ label: "Agencies", icon: Zap },
{ label: "Creators", icon: Palette },
{ label: "Non-Profits", icon: Heart }];


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
    setOpenDropdown((prev) => prev === key ? null : key);
  };

  return (
    <section className="py-14 px-4 md:px-10">
      <div
        ref={containerRef}
        className="max-w-canvas mx-auto flex flex-col items-center">
        
        <div
          ref={reveal.ref}
          className={`relative text-center ${reveal.className}`}>
          
          


















































































          
        </div>
      </div>
    </section>);

};

export default InteractiveHeadline;