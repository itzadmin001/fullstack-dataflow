import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "analytics", label: "Analytics" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold gradient-text">
          YK<span className="text-foreground">.</span>
        </button>

        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <button
                onClick={() => scrollTo(l.id)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors duration-300 ${
                  activeId === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
              {activeId === l.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-primary/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      activeId === l.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
