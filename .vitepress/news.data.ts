import { createContentLoader } from "vitepress";

export interface NewsPost {
	title: string;
	url: string;
	date: {
		time: number;
		string: string;
	};
	excerpt: string | undefined;
}

declare const data: NewsPost[];
export { data };

export default createContentLoader("pages/news/*.md", {
	excerpt: true,
	transform(raw): NewsPost[] {
		return raw
			.map(({ url, frontmatter, excerpt }) => ({
				title: frontmatter.title,
				url: url.replace(/^\/pages/, ""),
				excerpt,
				date: formatDate(frontmatter.date),
			}))
			.sort((a, b) => b.date.time - a.date.time);
	},
});

function formatDate(raw: string): NewsPost["date"] {
	const date = new Date(raw);
	date.setUTCHours(12);
	return {
		time: +date,
		string: date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}),
	};
}
