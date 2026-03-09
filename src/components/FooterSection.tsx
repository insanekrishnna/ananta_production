import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Send, Twitter, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FOOTER } from "@/data/content";
import brandLogo from "@/assets/brand-logo.png";

const FooterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact", {
        body: { name: name.trim(), email: email.trim(), message: message.trim() },
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast({ title: "Failed to send message", description: "Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="px-4 md:px-10 pt-16 pb-10">
      <div className="max-w-[900px] mx-auto">
        {/* Two-column: brand left, form right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Brand info */}
          <div className="flex flex-col items-start">
            <img src={brandLogo} alt="Ananta Production" className="w-10 h-10 object-contain mb-4" />
            <span className="text-[16px] font-semibold text-text-primary tracking-tight mb-2">Ananta Production</span>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[260px] mb-6">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-4">
              <Twitter size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
              <Linkedin size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
              <Github size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-text-primary cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h3 className="text-[18px] font-semibold text-text-primary mb-1">Get in Touch</h3>
            <p className="text-[12px] text-muted-foreground mb-5">Have a project in mind? Drop us a message.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-[10px] border border-input bg-canvas text-text-primary text-[13px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-[10px] border border-input bg-canvas text-text-primary text-[13px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={3}
                className="w-full px-4 py-2.5 rounded-[10px] border border-input bg-canvas text-text-primary text-[13px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-demo text-primary-foreground rounded-pill py-2.5 text-[13px] font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send size={14} />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
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
