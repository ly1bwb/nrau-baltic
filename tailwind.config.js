/** @type {import('tailwindcss').Config} */
export default {
	content: [".vitepress/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
