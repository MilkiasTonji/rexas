/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite", // Slow down to 2 seconds per rotation
      },
    },
  },
  plugins: [],
}

