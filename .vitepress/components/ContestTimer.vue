<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
	formatDuration,
	intervalToDuration,
	isWithinInterval,
	addWeeks,
	addHours,
} from "date-fns";

const ssbStart = new Date("2024-01-14T06:30:00Z");
const ssbEnd = addHours(ssbStart, 2);
const cwStart = addHours(ssbEnd, 0.5);
const cwEnd = addHours(cwStart, 2);
const logSubmitEnd = addWeeks(cwEnd, 1);

const intervalId = ref<NodeJS.Timer>();
const now = ref(Date.now());

const isSsbInProgress = computed(() =>
	isWithinInterval(now.value, { start: ssbStart, end: ssbEnd }),
);
const isCwInProgress = computed(() =>
	isWithinInterval(now.value, { start: cwStart, end: cwEnd }),
);
const isLogSubmitInProgress = computed(() =>
	isWithinInterval(now.value, { start: cwEnd, end: logSubmitEnd }),
);

const timeLeftEnd = computed(() => {
	if (isSsbInProgress.value) return ssbEnd;
	if (isCwInProgress.value) return cwEnd;
	if (isLogSubmitInProgress.value) return logSubmitEnd;
});

const periodName = computed(() => {
	if (isSsbInProgress.value) return "SSB contest";
	if (isCwInProgress.value) return "CW contest";
	if (isLogSubmitInProgress.value) return "Log submit";
});

const timeLeft = computed(() => {
	if (!timeLeftEnd.value) return;

	return formatDuration(
		intervalToDuration({
			start: now.value,
			end: timeLeftEnd.value,
		}),
		{ zero: true },
	);
});

onMounted(() => {
	intervalId.value = setInterval(() => {
		now.value = Date.now();
	}, 1000);
});

onUnmounted(() => {
	clearInterval(intervalId.value);
});
</script>

<template>
	<h2 class="text-blue-600 dark:text-blue-300">
		{{ periodName }} is in progress!
	</h2>
	<h3 class="text-blue-600 dark:text-blue-300">Time left: {{ timeLeft }}</h3>
</template>
