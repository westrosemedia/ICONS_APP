import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "black" | "white" | "accent";
  children: React.ReactNode;
  className?: string;
};

export default function Button({ color = "black", children, className = "", ...props }: ButtonProps) {
  const base =
    "btn font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const colorClass =
    color === "black"
      ? "bg-black text-white hover:opacity-85 focus-visible:ring-black"
      : color === "white"
      ? "bg-white text-black hover:opacity-85 focus-visible:ring-white focus-visible:ring-offset-black"
      : "bg-accent text-white hover:opacity-85 focus-visible:ring-accent";
  return (
    <button className={clsx(base, colorClass, className)} {...props}>
      {children}
    </button>
  );
} 