import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/_yogesh__kumarr?igsh=OGR5a3p5a3Rmb2Vv", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yogesh-kumar-558b4b26b/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/itzadmin001", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/919828887630", label: "WhatsApp" },
];

const FloatingSocials = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
  >
    {socials.map((s, i) => (
      <motion.a
        key={i}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        whileHover={{ scale: 1.2, x: 4 }}
        className="p-2.5 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-colors duration-300"
      >
        <s.icon size={18} />
      </motion.a>
    ))}
    <div className="w-px h-20 bg-gradient-to-b from-primary/40 to-transparent mx-auto mt-2" />
  </motion.div>
);

export default FloatingSocials;
