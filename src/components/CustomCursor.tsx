import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const springX = useSpring(0, { stiffness: 300, damping: 28 });
  const springY = useSpring(0, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(false);
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [springX, springY, visible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference hidden lg:block"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(var(--primary))",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      {/* Follower */}
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none hidden lg:block rounded-full border border-primary/40"
        style={{
          x: springX,
          y: springY,
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          marginLeft: hovering ? -24 : -16,
          marginTop: hovering ? -24 : -16,
          opacity: visible ? 0.6 : 0,
          background: hovering
            ? "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)"
            : "transparent",
          transition: "width 0.3s, height 0.3s, margin 0.3s, opacity 0.3s, background 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;
