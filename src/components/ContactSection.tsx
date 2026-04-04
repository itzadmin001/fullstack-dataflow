import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

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
    "w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_hsl(199_89%_48%/0.1)] transition-all duration-300 text-sm";

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's work together" />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 max-w-xl mx-auto space-y-5 border border-border/50"
      >
        <input required type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
        <textarea required rows={4} placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
        >
          {sent ? "Message Sent! ✓" : <>Let's Work Together <Send size={16} /></>}
        </motion.button>
      </motion.form>
    </SectionWrapper>
  );
};

export default ContactSection;
