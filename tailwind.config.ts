import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#07070b", panel: "#101017", accent: "#8b5cf6" }, boxShadow: { glow: "0 0 80px rgba(124,58,237,.22)" } } }, plugins: [] } satisfies Config;
