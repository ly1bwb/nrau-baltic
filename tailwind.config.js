/** @type {import('tailwindcss').Config} */
export default {
	content: [".vitepress/**/*.{vue,jsx,tsx}", "pages/**/*.md"],
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
