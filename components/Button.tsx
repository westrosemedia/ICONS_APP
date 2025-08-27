import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "black" | "white" | "accent";
  children: React.ReactNode;
  className?: string;
};

export default function Button({ color = "black", children, className = "", ...props }: ButtonProps) {
  const base =
    "btn font-medium px-8 py-3 rounded-lg transition-all duration-200 text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-accent";
  const colorClass =
    color === "black"
      ? "bg-black text-white hover:opacity-85 hover:underline"
      : color === "white"
      ? "bg-white text-black hover:opacity-85 hover:underline"
      : "bg-accent text-white hover:opacity-85 hover:underline";
  return (
    <button className={clsx(base, colorClass, className)} {...props}>
      {children}
    </button>
  );
} 