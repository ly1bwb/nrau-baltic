<script setup lang="ts">
import { defineProps, defineModel } from "vue";
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const model = defineModel<string | number>({ required: true });

defineProps({
	items: {
		type: Array<string | number>,
		required: true,
	},
});
</script>

<template>
	<Listbox v-model="model" class="not-prose">
		<div class="relative">
			<ListboxButton
				class="relative w-full py-2 pl-3 pr-10 text-left sm:text-sm rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-900/10 dark:border-slate-300/10"
			>
				<span class="block truncate">{{ model }}</span>
				<span
					class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
				>
					<ChevronUpDownIcon
						class="h-5 w-5 text-slate-500 dark:text-slate-400"
						aria-hidden="true"
					/>
				</span>
			</ListboxButton>

			<transition
				enter-active-class="transition duration-200 ease-out"
				enter-from-class="-translate-y-1 opacity-0"
				enter-to-class="translate-y-0 opacity-100"
				leave-active-class="transition duration-150 ease-in"
				leave-from-class="translate-y-0 opacity-100"
				leave-to-class="-translate-y-1 opacity-0"
			>
				<ListboxOptions
					class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg sm:text-sm border border-slate-900/10 dark:border-slate-300/10 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
				>
					<ListboxOption
						v-slot="{ active, selected }"
						v-for="item in $props.items"
						:key="item"
						:value="item"
						as="template"
					>
						<li
							class="relative select-none py-2 pl-10 pr-4"
							:class="{
								'bg-slate-200 dark:bg-slate-700': active,
							}"
						>
							<span
								class="block truncate"
								:class="{
									'font-medium': selected,
									'font-normal': !selected,
								}"
								>{{ item }}</span
							>
							<span
								v-if="selected"
								class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400"
							>
								<CheckIcon class="h-5 w-5" aria-hidden="true" />
							</span>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>