<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const model = defineModel<boolean>({ required: true });

defineProps({
	label: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<SwitchGroup as="div" class="not-prose flex items-center gap-3">
		<Switch
			v-model="model"
			class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-gray-900/10 dark:border-gray-300/10 transition-colors"
			:class="model ? 'bg-gray-700 dark:bg-gray-300' : 'bg-gray-200 dark:bg-gray-800'"
		>
			<span
				aria-hidden
				class="inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 shadow transition-transform"
				:class="model ? 'translate-x-6' : 'translate-x-1'"
			/>
		</Switch>
		<SwitchLabel class="text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
			{{ label }}
		</SwitchLabel>
	</SwitchGroup>
</template>
