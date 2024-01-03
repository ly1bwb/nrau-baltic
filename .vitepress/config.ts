import { defineConfig } from "vitepress";
import { genFeed } from "./genFeed.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "NRAU Baltic",
	lang: "en-US",
	description: "NRAU Baltic contest",
	cleanUrls: true,
	buildEnd: genFeed,
	head: [
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
		],
		[
			"link",
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
		[
			"link",
			{
				rel: "mask-icon",
				href: "/safari-pinned-tab.svg",
				color: "#5bbad5",
			},
		],
		[
			"meta",
			{
				name: "msapplication-TileColor",
				content: "#da532c",
			},
		],
		[
			"meta",
			{
				name: "theme-color",
				content: "#ffffff",
			},
		],
		// OG tags
		[
			"meta",
			{
				property: "og:url",
				content: "https://nraubaltic.eu",
			},
		],
		[
			"meta",
			{
				property: "og:type",
				content: "website",
			},
		],
		[
			"meta",
			{
				property: "og:title",
				content: "NRAU Baltic",
			},
		],
		[
			"meta",
			{
				property: "og:description",
				content: "NRAU Baltic contest",
			},
		],
		[
			"meta",
			{
				property: "og:image",
				content: "https://nrau-baltic.eu/og.png",
			},
		],
		[
			"meta",
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
		],
		[
			"meta",
			{
				property: "twitter:domain",
				content: "nraubaltic.eu",
			},
		],
		[
			"meta",
			{
				property: "twitter:url",
				content: "https://nraubaltic.eu",
			},
		],
		[
			"meta",
			{
				name: "twitter:title",
				content: "NRAU Baltic",
			},
		],
		[
			"meta",
			{
				name: "twitter:description",
				content: "NRAU Baltic contest",
			},
		],
		[
			"meta",
			{
				name: "twitter:image",
				content: "https://nraubaltic.eu/og.png",
			},
		],
	],
});
