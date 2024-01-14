<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { formatDuration, intervalToDuration } from "date-fns";

const ssbStart = new Date("2024-01-14T06:30:00Z");
const ssbEnd = new Date("2024-01-14T08:30:00Z");
const cwStart = new Date("2024-01-14T09:00:00Z");
const cwEnd = new Date("2024-01-14T11:00:00Z");

const intervalId = ref<NodeJS.Timer>();
const timeLeft = ref(
	formatDuration(
		intervalToDuration({
			start: Date.now(),
			end: cwEnd,
		}),
	),
);

onMounted(() => {
	intervalId.value = setInterval(() => {
		timeLeft.value = formatDuration(
			intervalToDuration({
				start: Date.now(),
				end: cwEnd,
			}),
		);
	}, 1000);
});

onUnmounted(() => {
	clearInterval(intervalId.value);
});
</script>

<template>
	<h2 class="text-blue-600 dark:text-blue-300">CW contest is in progress!</h2>
	<h3 class="text-blue-600 dark:text-blue-300">Time left: {{ timeLeft }}</h3>
</template>
