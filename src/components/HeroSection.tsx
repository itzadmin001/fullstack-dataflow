import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Parallax animated gradient blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[25%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] bg-accent/8 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="text-center z-10 max-w-3xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group cursor-pointer">
            {/* Animated glowing ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), transparent, hsl(var(--primary)))",
                opacity: 0.5,
              }}
            />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-700" />
            <img
              src={profileImg}
              alt="Yogesh Kumar"
              width={160}
              height={160}
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-background shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-primary font-mono text-sm tracking-[0.2em] mb-4 uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight"
        >
          <span className="gradient-text">Yogesh Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground mb-3 font-medium"
        >
          Data Analyst &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; ML/DL &amp; Generative AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-muted-foreground/70 italic mb-10 max-w-lg mx-auto text-sm md:text-base"
        >
          "I don't just analyze data — I build intelligent systems powered by it."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 text-sm"
          >
            View Projects <ArrowDown size={16} />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 rounded-xl border border-border/80 text-foreground font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10 flex items-center gap-2 text-sm"
          >
            Contact Me <Send size={16} />
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
