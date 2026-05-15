import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-violetCore/50 bg-violetCore/18 text-bone shadow-glow hover:border-violetCore hover:bg-violetCore/28",
  secondary:
    "border-signalBlue/45 bg-signalBlue/12 text-bone shadow-blueGlow hover:border-signalBlue hover:bg-signalBlue/22",
  ghost:
    "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/24 hover:text-white"
};

export function ButtonLink({
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
