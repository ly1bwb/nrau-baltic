/** @type {import('tailwindcss').Config} */
export default {
	content: [".vitepress/**/*.{vue,js,ts,jsx,tsx}", "*.md"],
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
