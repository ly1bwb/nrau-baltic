<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { formatDuration, intervalToDuration } from "date-fns";

const ssbStart = new Date("2024-01-14T06:30:00Z");
const ssbEnd = new Date("2024-01-14T08:30:00Z");
const cwStart = new Date("2024-01-14T09:00:00Z");
const cwEnd = new Date("2024-01-14T11:00:00Z");

const intervalId = ref<NodeJS.Timer>();
const timeLeft = ref();

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
	<h3>CW contest is in progress!</h3>
	<h3>Time left: {{ timeLeft }}</h3>
</template>
