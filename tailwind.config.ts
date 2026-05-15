import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0a0a0f",
        violetCore: "#8b5cf6",
        signalBlue: "#60a5fa",
        softPink: "#d8b4fe",
        bone: "#f5f5f5"
      },
      fontFamily: {
        display: ["Sora", "Space Grotesk", "Inter", "Segoe UI", "sans-serif"],
        body: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        glow: "0 0 42px rgba(139, 92, 246, 0.24)",
        blueGlow: "0 0 34px rgba(96, 165, 250, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
