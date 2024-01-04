<script setup lang="ts">
import type { NavigationItems } from "./types";
import ThemeSwitch from "./ThemeSwitch.vue";

const props = defineProps<{
	navigationItems: NavigationItems;
}>();
</script>

<template>
	<div class="flex gap-4 font-semibold text-gray-700 dark:text-gray-200">
		<a
			v-for="(title, href) of props.navigationItems"
			:href="href"
			:key="href"
			>{{ title }}</a
		>
		<ThemeSwitch />
	</div>
</template>
