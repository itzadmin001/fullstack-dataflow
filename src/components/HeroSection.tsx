import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Send } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="text-center z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500" />
            <img
              src={profileImg}
              alt="Yogesh Kumar"
              width={160}
              height={160}
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30 shadow-xl"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-primary font-mono text-sm tracking-wider mb-3 uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight gradient-text"
        >
          Yogesh Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          Data Analyst &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; ML/DL &amp; Generative AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-muted-foreground/80 italic mb-8 max-w-xl mx-auto"
        >
          "I don't just analyze data — I build intelligent systems powered by it."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2"
          >
            View Projects <ArrowDown size={16} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 flex items-center gap-2"
          >
            Contact Me <Send size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
