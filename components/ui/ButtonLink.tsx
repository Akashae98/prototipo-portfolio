import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-violetCore/42 bg-violetCore/16 text-bone shadow-glow hover:border-violetCore hover:bg-violetCore/24",
  secondary:
    "border-signalBlue/40 bg-signalBlue/10 text-bone shadow-blueGlow hover:border-signalBlue hover:bg-signalBlue/18",
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
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[1rem] border px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
