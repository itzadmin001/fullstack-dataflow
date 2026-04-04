import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const MagneticButton = ({ children, className = "", onClick, type = "button" }: Props) => {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.35);

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
