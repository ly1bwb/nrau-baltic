<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
	formatDuration,
	intervalToDuration,
	isWithinInterval,
	addWeeks,
	addHours,
	isFuture,
	subMonths,
} from "date-fns";
import { COUNTRY_FLAGS } from "@/regions";

const ssbStart = new Date("2024-01-14T06:30:00Z");
const ssbEnd = addHours(ssbStart, 2);
const cwStart = addHours(ssbEnd, 0.5);
const cwEnd = addHours(cwStart, 2);
const logSubmitEnd = addWeeks(cwEnd, 1);

const intervalId = ref<NodeJS.Timer>();
const now = ref(Date.now());

const isMonthLeftToStart = computed(() =>
	isWithinInterval(now.value, { start: subMonths(ssbStart, 1), end: ssbStart }),
);

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
	if (isMonthLeftToStart.value) return ssbStart;
	if (isSsbInProgress.value) return ssbEnd;
	if (isCwInProgress.value) return cwEnd;
	if (isLogSubmitInProgress.value) return logSubmitEnd;
});

const periodMessage = computed(() => {
	if (isMonthLeftToStart.value)
		return `Get ready for contest! ${Object.values(COUNTRY_FLAGS).join("")}`;
	if (isSsbInProgress.value) return "SSB contest is in progress!";
	if (isCwInProgress.value) return "CW contest is in progress!";
	if (isLogSubmitInProgress.value)
		return "Contest has ended 🎉 Please submit your log!";
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
	<template v-if="isFuture(logSubmitEnd)">
		<h2 class="text-blue-600 dark:text-blue-300">
			{{ periodMessage }}
		</h2>
		<h3 class="text-blue-600 dark:text-blue-300 tabular-nums">
			Time left: {{ timeLeft }}
		</h3>
	</template>
</template>
