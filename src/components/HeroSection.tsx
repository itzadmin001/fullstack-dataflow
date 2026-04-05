import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Send } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const greeting = "HELLO, I'M";
const roles = ["Data Analyst", "Full Stack Developer", "ML/DL Engineer", "AI Enthusiast"];

const shimmerStyle: React.CSSProperties = {
  backgroundSize: "200% 100%",
  animation: "shimmer 3s ease-in-out infinite",
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx);
      mouseY.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  // Typing effect for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charCount < current.length) {
            setCharCount((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          if (charCount > 0) {
            setCharCount((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charCount, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      })),
    []
  );

  // Grid dots for background
  const gridDots = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${(i % 10) * 11 + 5}%`,
        top: `${Math.floor(i / 10) * 18 + 5}%`,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Grid dot pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {gridDots.map((d) => (
          <motion.div
            key={d.id}
            className="absolute w-[2px] h-[2px] rounded-full"
            style={{
              left: d.left,
              top: d.top,
              background: "hsl(var(--primary) / 0.15)",
            }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Parallax background blobs with mouse interaction */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: useTransform(smoothX, (v) => v * -30), y: useTransform(smoothY, (v) => v * -20) }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ x: [0, 60, -40, 0], y: [0, -40, 50, 0], scale: [1, 1.2, 0.85, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.1]"
            style={{ background: "hsl(var(--primary))" }}
          />
          <motion.div
            animate={{ x: [0, -50, 40, 0], y: [0, 40, -50, 0], scale: [1, 0.8, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-[0.08]"
            style={{ background: "hsl(var(--accent))" }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full blur-[200px]"
            style={{ background: "hsl(var(--primary))" }}
          />
        </motion.div>

        {/* Horizontal light beam */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
          className="absolute top-[45%] w-[600px] h-px opacity-[0.12]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }}
        />
      </motion.div>

      <motion.div style={{ opacity, scale }} className="text-center z-10 max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            style={{
              x: useTransform(smoothX, (v) => v * 8),
              y: useTransform(smoothY, (v) => v * 8),
            }}
            className="relative group cursor-pointer"
          >
            {/* Floating particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  background:
                    p.id % 3 === 0
                      ? "hsl(var(--primary) / 0.5)"
                      : p.id % 3 === 1
                        ? "hsl(var(--accent) / 0.4)"
                        : "hsl(var(--foreground) / 0.2)",
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, p.x, -p.x * 0.6, 0],
                  y: [0, p.y, -p.y * 0.6, 0],
                  opacity: [0, 0.7, 0.2, 0],
                  scale: [0, 1, 0.5, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Outer soft glow */}
            <motion.div
              animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)" }}
            />

            {/* Rotating glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2.5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), transparent 40%, hsl(var(--primary)))",
                opacity: 0.6,
              }}
            />
            {/* Secondary counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full opacity-20"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent, hsl(var(--accent) / 0.5), transparent 50%)",
              }}
            />

            {/* Pulse glow */}
            <motion.div
              animate={{ opacity: [0.15, 0.45, 0.15], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-xl"
            />

            <img
              src={profileImg}
              alt="Yogesh Kumar"
              width={176}
              height={176}
              className="relative w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-2 border-background shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />

            {/* Status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
              className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border/60 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-success"
              />
              <span className="text-[10px] font-mono text-muted-foreground">Available</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Letter-by-letter greeting */}
        <div className="text-primary font-mono text-sm tracking-[0.25em] mb-5 uppercase flex justify-center gap-[2px]">
          {greeting.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Name with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-5 leading-[1.05] tracking-tight"
        >
          <span
            className="bg-gradient-to-r from-primary via-accent via-50% to-primary bg-clip-text text-transparent"
            style={shimmerStyle}
          >
            Yogesh Kumar
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-4 h-8 flex items-center justify-center"
        >
          <span className="text-base md:text-lg text-muted-foreground font-medium font-mono">
            {roles[roleIndex].substring(0, charCount)}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[2px] h-5 bg-primary ml-0.5"
          />
        </motion.div>

        {/* Subtitle roles */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-sm md:text-base text-muted-foreground/60 mb-3"
        >
          Data Analyst &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; ML/DL &amp; Generative AI Enthusiast
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-muted-foreground/50 italic mb-12 max-w-lg mx-auto text-sm md:text-base"
        >
          "I don't just analyze data — I build intelligent systems powered by it."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-2 text-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="group px-8 py-4 rounded-xl border border-border/80 text-foreground font-semibold transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10 flex items-center gap-2 text-sm"
          >
            Contact Me <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground/40 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], height: [4, 8, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 rounded-full bg-primary/50"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
