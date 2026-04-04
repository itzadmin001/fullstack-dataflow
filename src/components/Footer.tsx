import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/_yogesh__kumarr?igsh=OGR5a3p5a3Rmb2Vv", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yogesh-kumar-558b4b26b/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/itzadmin001", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/919828887630", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="relative border-t border-border py-10 px-4">
    {/* Glow line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
      </p>
      <div className="flex gap-3">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.15, y: -2 }}
            className="p-2.5 rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
          >
            <s.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
