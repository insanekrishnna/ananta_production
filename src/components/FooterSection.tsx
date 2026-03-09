import { FOOTER } from "@/data/content";
import { Twitter, Linkedin, Github } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-[#e8e8e8] px-4 md:px-10 pt-12 pb-8">
      <div className="max-w-canvas mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <img src={brandLogo} alt="Craft Studio" className="w-8 h-8 object-contain" />
              <span className="text-lg font-bold text-[#1a1a1a]">Craft Studio</span>
            </div>
            <p className="text-sm text-[#999] mt-2">{FOOTER.tagline}</p>
            <div className="flex gap-4 mt-6">
              <Twitter size={20} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors" />
              <Github size={20} className="text-[#bbb] hover:text-[#1a1a1a] cursor-pointer transition-colors" />
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#999] mb-4">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#888] hover:text-[#1a1a1a] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e8e8e8] pt-8 flex flex-col sm:flex-row justify-between text-sm text-[#bbb]">
          <span>© 2026 Craft Studio</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
