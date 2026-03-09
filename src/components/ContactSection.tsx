import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
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
    <section className="py-12 px-4 md:px-10">
      <div className="max-w-[520px] mx-auto">
        <h2 className="text-[26px] md:text-[30px] font-bold text-text-primary text-center leading-[1.2] mb-2">
          Get in Touch
        </h2>
        <p className="text-[14px] text-text-secondary text-center mb-8">
          Have a project in mind? Drop us a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="w-full px-4 py-3 rounded-[12px] border border-input bg-canvas text-text-primary text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            className="w-full px-4 py-3 rounded-[12px] border border-input bg-canvas text-text-primary text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={4}
            className="w-full px-4 py-3 rounded-[12px] border border-input bg-canvas text-text-primary text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 bg-demo text-primary-foreground rounded-pill py-3 text-[14px] font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send size={15} />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
