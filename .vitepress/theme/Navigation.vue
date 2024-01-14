<script setup lang="ts">
import ThemeSwitch from "@/theme/ThemeSwitch.vue";
import { useData, useRoute } from "vitepress";
import type { ThemeConfig } from "@/config";

const { site } = useData<ThemeConfig>();
const route = useRoute();

const navigationItems = site.value.themeConfig.nav;
</script>

<template>
	<nav>
		<ul class="flex gap-4 font-semibold text-gray-700 dark:text-gray-200">
			<li v-for="{ text, link } of navigationItems">
				<a
					:href="link"
					:key="text"
					:class="{
						'text-blue-600 dark:text-blue-300': route.path === link,
					}"
					>{{ text }}</a
				>
			</li>
			<ClientOnly>
				<ThemeSwitch aria-hidden />
			</ClientOnly>
		</ul>
	</nav>
</template>
