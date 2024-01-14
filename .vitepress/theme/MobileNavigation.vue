<script setup lang="ts">
import { MenuIcon } from "lucide-vue-next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import ThemeSwitch from "@/theme/ThemeSwitch.vue";
import type { ThemeConfig } from "@/config";
import { useData, useRoute } from "vitepress";

const { site } = useData<ThemeConfig>();
const route = useRoute();

const navigationItems = site.value.themeConfig.nav;
</script>

<template>
	<Popover class="relative">
		<PopoverButton
			title="Open navigation menu"
			class="p-2 text-gray-700 dark:text-gray-200"
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
				class="absolute right-0 mt-3 w-screen max-w-[15rem] pl-8 sm:px-0"
				v-slot="{ close }"
			>
				<nav
					class="divide-y divide-gray-100 dark:divide-gray-700 px-4 py-2 rounded-lg shadow-lg border border-gray-900/10 dark:border-gray-300/10 text-base font-semibold bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200"
				>
					<ul class="py-2">
						<li v-for="{ text, link } of navigationItems">
							<a
								:href="link"
								:key="text"
								class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
								:class="{
									'text-blue-600 dark:text-blue-300': route.path === link,
								}"
								@click="close"
							>
								{{ text }}
							</a>
						</li>
					</ul>
					<div class="py-2">
						<ClientOnly>
							<ThemeSwitch
								class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
								aria-hidden="true"
								><span class="ml-2">Change theme</span></ThemeSwitch
							>
						</ClientOnly>
					</div>
				</nav>
			</PopoverPanel>
		</transition>
	</Popover>
</template>
