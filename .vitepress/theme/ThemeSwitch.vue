<script setup lang="ts">
import { SunIcon, MoonIcon } from "lucide-vue-next";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({ storageKey: "vitepress-theme-appearance" });
const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click="toggleDark()" title="Pakeisti temą">
		<SunIcon v-if="isDark" />
		<MoonIcon v-else />
		<slot />
	</button>
</template>
