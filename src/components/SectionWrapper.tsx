import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`section-padding ${className}`}
  >
    <div className="container mx-auto max-w-6xl">{children}</div>
  </motion.section>
);

export default SectionWrapper;
