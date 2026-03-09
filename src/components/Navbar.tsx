import { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand-logo.png";

const sectionMap: Record<string, string> = {
  Home: "hero",
  Services: "features",
  Work: "analytics",
  Process: "integrations",
  Pricing: "pricing",
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = sectionMap[link];
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="h-16 flex items-center justify-between px-4 md:px-10 backdrop-blur-[12px] bg-canvas/85 border-b border-[#e8e8e8]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Stacker logo" className="w-7 h-7 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${sectionMap[link]}`}
              onClick={(e) => handleClick(e, link)}
              className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex bg-[#1a1a1a] text-white rounded-pill px-5 py-2 text-[13px] font-semibold hover:bg-black transition-colors">
            Get Started
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden backdrop-blur-[12px] bg-canvas/95 border-b border-[#e8e8e8] px-4 pb-4 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${sectionMap[link]}`}
              onClick={(e) => handleClick(e, link)}
              className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors duration-150 py-2"
            >
              {link}
            </a>
          ))}
          <button className="w-full mt-2 bg-[#1a1a1a] text-white rounded-pill px-5 py-2.5 text-[13px] font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
