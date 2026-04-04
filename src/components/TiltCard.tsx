import { ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

interface Props {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: Props) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
};

export default TiltCard;
