import { useState } from "react";
import { FOOTER } from "@/data/content";
import { Twitter, Linkedin, Github } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const FooterLink = ({ link, isOpen, onToggle }: { link: { label: string; description?: string }; isOpen: boolean; onToggle: () => void }) => {
  if (!link.description) {
    return (
      <li>
        <a href="#" className="text-[12px] text-[#999] hover:text-[#1a1a1a] transition-colors duration-200">
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li className="relative">
      <button
        onClick={onToggle}
        className="text-[12px] text-[#999] hover:text-[#1a1a1a] transition-colors duration-200 text-left"
      >
        {link.label}
      </button>
      {isOpen && (
        <div className="absolute left-0 bottom-full mb-2 z-50 w-[220px] bg-background border border-input rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.10)] p-3 animate-in fade-in-0 zoom-in-95 duration-200">
          <p className="text-[11px] font-semibold text-text-primary mb-1">{link.label}</p>
          <p className="text-[11px] text-text-secondary leading-relaxed">{link.description}</p>
        </div>
      )}
    </li>
  );
};

const FooterSection = () => {
  const [openLink, setOpenLink] = useState<string | null>(null);
    <footer className="px-4 md:px-10 pt-12 pb-8">
      <div className="max-w-[900px] mx-auto">
        {/* Thin separator */}
        <div className="w-full h-px bg-[#e8e8e8] mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 mb-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src={brandLogo} alt="Ananta Production" className="w-7 h-7 object-contain" />
              <span className="text-[15px] font-semibold text-[#1a1a1a] tracking-tight">Ananta Production</span>
            </div>
            <p className="text-[12px] text-[#999] leading-relaxed max-w-[200px]">{FOOTER.tagline}</p>
            <div className="flex gap-3.5 mt-5">
              <Twitter size={16} strokeWidth={1.5} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors duration-200" />
              <Linkedin size={16} strokeWidth={1.5} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors duration-200" />
              <Github size={16} strokeWidth={1.5} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1a1a1a] mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <FooterLink key={link.label} link={link} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-[#e8e8e8] mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#bbb]">
          <span>© 2026 Ananta Production</span>
          <div className="flex gap-5 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
