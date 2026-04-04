import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-secondary/40 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_hsl(199_89%_48%/0.08)] focus:bg-secondary/60 transition-all duration-300 text-sm";

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's work together" />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-10 max-w-xl mx-auto space-y-5 border border-border/50"
      >
        <input required type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        <input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
        <textarea required rows={4} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
        <MagneticButton
          type="submit"
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2 text-sm"
        >
          {sent ? "Message Sent! ✓" : <>Let's Work Together <Send size={16} /></>}
        </MagneticButton>
      </motion.form>
    </SectionWrapper>
  );
};

export default ContactSection;
