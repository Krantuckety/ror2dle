import React from "react";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Ror2ButtonProps = 
{
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "sqr" | "med" | "lrg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeStyles = {
  sqr: "w-15 h-15 text-base",
  med: "w-60 h-15 text-base",
  lrg: "w-80 h-20 text-lg",
};

export const Ror2Button: React.FC<Ror2ButtonProps> = ({
  children,
  selected = false,
  size = "med",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "ror2-button",
        sizeStyles[size],
        selected && "selected",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Ror2Button;