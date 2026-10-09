/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412" },
        ink: "#1c1917",
        paper: "#faf6f0",
        sand: { 50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4" },
        ember: "#ff6b1a",
        gold: "#fbbf24",
      },
      fontFamily: {
        display: ["'Archivo Black'","sans-serif"],
        serif: ["'Playfair Display'","serif"],
        mono: ["'Space Mono'","monospace"],
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        flicker: "flicker 1.6s ease-in-out infinite alternate",
        spinSlow: "spin 24s linear infinite",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0) rotate(-2deg)" }, "50%": { transform: "translateY(-22px) rotate(3deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        flicker: { from: { opacity: ".85", transform: "scale(1)" }, to: { opacity: "1", transform: "scale(1.04)" } },
      },
    },
  },
  plugins: [],
};
