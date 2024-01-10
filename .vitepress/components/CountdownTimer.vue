<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
	date: Date;
}>();

const now = ref(new Date().getTime());
const intervalId = ref<NodeJS.Timer>();

const timeLeft = computed(() => {
	const millisecondDifference = props.date.getTime() - now.value;

	return {
		days: Math.floor(millisecondDifference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((millisecondDifference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((millisecondDifference / 1000 / 60) % 60),
		seconds: Math.floor((millisecondDifference / 1000) % 60),
	};
});

onMounted(() => {
	intervalId.value = setInterval(() => {
		now.value = new Date().getTime();
	}, 1000);
});

onUnmounted(() => {
	clearInterval(intervalId.value);
});
</script>

<template>
	{{ timeLeft.days }} days, {{ timeLeft.hours }} hours,
	{{ timeLeft.minutes }} minutes, {{ timeLeft.seconds }} seconds
</template>
