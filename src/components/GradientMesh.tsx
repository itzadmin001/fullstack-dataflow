import { motion } from "framer-motion";

const GradientMesh = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(222,47%,7%)] to-background" />

    {/* Noise texture */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />

    {/* Animated gradient orbs */}
    <motion.div
      animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07]"
      style={{ background: "hsl(var(--primary))" }}
    />
    <motion.div
      animate={{ x: [0, -60, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.85, 1.15, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[15%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.06]"
      style={{ background: "hsl(var(--accent))" }}
    />
    <motion.div
      animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[160px] opacity-[0.04]"
      style={{ background: "hsl(var(--primary))" }}
    />
  </div>
);

export default GradientMesh;
