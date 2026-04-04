import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding ${className} ${inView ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
