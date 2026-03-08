import { NAV_LINKS } from "@/data/content";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const sectionMap: Record<string, string> = {
  Home: "hero",
  Solutions: "analytics",
  Product: "features",
  Resources: "integrations",
  Pricing: "pricing",
};

const Navbar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const id = sectionMap[link];
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-18 flex items-center justify-between px-10 md:px-10 px-4 backdrop-blur-[12px] bg-canvas/85 border-b border-input">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-[10px] bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          S
        </div>
        <span className="text-lg font-bold text-text-primary">stacker</span>
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

      <Button variant="default" size="default">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
