import { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand-logo.png";


const sectionMap: Record<string, string> = {
  Home: "hero",
  Services: "expertise",
  Work: "expertise",
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
      <div className="h-16 flex items-center justify-between px-4 md:px-10 backdrop-blur-[12px] bg-canvas/85 border-b border-input">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ananta Production" className="w-[22px] h-[22px] object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${sectionMap[link]}`}
              onClick={(e) => handleClick(e, link)}
              className="text-[15px] font-medium text-text-nav hover:text-primary transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://calendly.com/iiprathamyadav/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="default" className="hidden md:inline-flex">
              Book a Call
            </Button>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden backdrop-blur-[12px] bg-canvas/95 border-b border-input px-4 pb-4 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${sectionMap[link]}`}
              onClick={(e) => handleClick(e, link)}
              className="text-[15px] font-medium text-text-nav hover:text-primary transition-colors duration-150 py-2"
            >
              {link}
            </a>
          ))}
          <a href="https://calendly.com/iiprathamyadav/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="default" className="w-full mt-2">
              Book a call
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
