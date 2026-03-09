import { FOOTER } from "@/data/content";
import { Twitter, Linkedin, Github } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const FooterSection = () => {
  return (
    <footer className="px-4 md:px-10 pt-16 pb-10">
      <div className="max-w-[900px] mx-auto">
        {/* Large brand mark */}
        <div className="flex flex-col items-center mb-16">
          <img src={brandLogo} alt="Ananta Production" className="w-12 h-12 object-contain mb-4" />
          <p className="text-[13px] text-muted-foreground text-center max-w-[280px] leading-relaxed">
            {FOOTER.tagline}
          </p>
          <div className="flex gap-5 mt-6">
            <Twitter size={16} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
            <Linkedin size={16} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
            <Github size={16} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* Minimal link row */}
        <div className="w-full h-px bg-border mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-muted-foreground">
          <span>© 2026 Ananta Production</span>
          <div className="flex gap-6 mt-2 sm:mt-0">
            <a href="#" className="hover:text-text-primary transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-text-primary transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
