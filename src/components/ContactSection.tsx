import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's work together" />
      <form onSubmit={handleSubmit} className="glass-card p-8 max-w-xl mx-auto space-y-5">
        <input
          required
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
        />
        <textarea
          required
          rows={4}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
        >
          {sent ? "Message Sent! ✓" : <>Let's Work Together <Send size={16} /></>}
        </button>
      </form>
    </SectionWrapper>
  );
};

export default ContactSection;
