<script setup lang="ts">
import { useData } from "vitepress";
import NotFound from "@/theme/NotFound.vue";
import Navigation from "@/theme/Navigation.vue";
import MobileNavigation from "@/theme/MobileNavigation.vue";
import Prose from "@/theme/Prose.vue";

const { page, frontmatter } = useData();

const navigationItems = {
	"/": "Home",
	"/rules": "Rules",
	"/search": "Search",
	"/cw": "CW",
	"/ph": "PH",
	"/mixed": "Mixed",
	"/countries": "Countries",
	"/regions": "Regions",
	"/soapbox": "Soapbox",
	"/ubn": "UBN",
};
</script>

<template>
	<div
		class="sticky top-0 z-10 w-full backdrop-blur py-4 border-b border-gray-900/10 bg-white supports-backdrop-blur:bg-white/95 dark:border-gray-300/10 dark:bg-gray-900/75"
	>
		<nav
			class="flex justify-between items-center max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"
		>
			<a href="/" class="mr-4">
				<img
					class="w-10 h-[78px]"
					src="/logo.svg"
					alt="NRAU-Baltic contest logo"
				/>
			</a>
			<Navigation class="hidden lg:flex" :navigation-items="navigationItems" />
			<MobileNavigation class="lg:hidden" :navigation-items="navigationItems" />
		</nav>
	</div>
	<main
		class="max-w-3xl xl:max-w-5xl mx-auto my-8 lg:my-16 px-4 sm:px-6 xl:px-0"
	>
		<NotFound v-if="page.isNotFound" />
		<Prose :class="{ 'max-w-full': frontmatter.fullWidth }" v-else />
	</main>
</template>
