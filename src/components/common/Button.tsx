import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-7 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-orange-500 text-white hover:bg-orange-600 hover:-translate-y-1"
          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
      )}
    >
      {children}
    </button>
  );
}