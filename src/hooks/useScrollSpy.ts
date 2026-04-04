import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
};
