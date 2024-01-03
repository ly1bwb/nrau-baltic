<script setup lang="ts">
import type { NavigationItems } from "./types";
import { MenuIcon } from "lucide-vue-next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import ThemeSwitch from "./ThemeSwitch.vue";

const props = defineProps<{
	navigationItems: NavigationItems;
}>();
</script>

<template>
	<Popover class="relative">
		<PopoverButton
			title="Atidaryti meniu"
			class="p-2 text-slate-700 dark:text-slate-200"
		>
			<MenuIcon />
		</PopoverButton>

		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="translate-y-1 opacity-0"
			enter-to-class="translate-y-0 opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="translate-y-0 opacity-100"
			leave-to-class="translate-y-1 opacity-0"
		>
			<PopoverPanel
				class="absolute right-0 mt-3 w-screen max-w-[14rem] pl-8 sm:px-0"
				v-slot="{ close }"
			>
				<div
					class="divide-y divide-slate-100 dark:divide-slate-700 px-4 py-2 rounded-lg shadow-lg border border-slate-900/10 dark:border-slate-300/10 text-base font-semibold bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"
				>
					<div class="py-2">
						<a
							v-for="(title, href) of props.navigationItems"
							:href="href"
							:key="href"
							class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
							@click="close"
						>
							{{ title }}
						</a>
					</div>
					<div class="py-2">
						<ThemeSwitch
							class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
							aria-hidden="true"
							><span class="ml-2">Pakeisti temą</span></ThemeSwitch
						>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>
