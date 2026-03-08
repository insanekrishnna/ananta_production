import { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Button } from "@/components/ui/button";
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
      <div className="h-14 flex items-center justify-between px-5 md:px-10 backdrop-blur-[16px] bg-canvas/90">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-[12px] bg-foreground flex items-center justify-center"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <img src={logo} alt="Logo" className="w-5 h-5 object-contain brightness-0 invert" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${sectionMap[link]}`}
              onClick={(e) => handleClick(e, link)}
              className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" className="hidden md:inline-flex rounded-[12px] shadow-none bg-foreground text-background hover:bg-foreground/90 text-[13px] font-semibold px-5">
            Get Started
          </Button>
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
          <Button variant="default" size="default" className="w-full mt-2">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
