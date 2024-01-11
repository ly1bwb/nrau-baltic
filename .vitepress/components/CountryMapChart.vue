<script setup lang="ts">
import {
	computed,
	markRaw,
	onMounted,
	onUnmounted,
	ref,
	shallowRef,
	watch,
} from "vue";
import { useDark } from "@vueuse/core";
import mapboxgl, { type FillLayer } from "mapbox-gl";

interface Map extends mapboxgl.Map {
	setConfigProperty: (importId: string, configName: string, value: any) => Map;
}

import { data as results } from "@/results.data.js";
import { countryColorMap } from "@/counties";
import {
	filter,
	flatMap,
	groupBy,
	mapValues,
	sumBy,
	take,
	values,
} from "lodash-es";

const props = defineProps<{ selectedYear: number }>();

mapboxgl.accessToken =
	"pk.eyJ1IjoiZmlzdG1lbmFydXRvIiwiYSI6ImNqeXd6bmMxeTEybzMzbXJyZG9tMjVkemgifQ.5cwA9ergt7yRmWfNAIuDHw";
const mapContainer = ref(null);
const map = shallowRef<Map>();

const countryScores = mapValues(results, (yearResult) =>
	mapValues(groupBy(yearResult, "COUNTRY"), (countryResults) => {
		const countryCWResults = take(filter(countryResults, { MODE: "CW" }), 10);
		const countryPHResults = take(filter(countryResults, { MODE: "PH" }), 10);

		return sumBy([...countryCWResults, ...countryPHResults], "SCORE");
	}),
);

const isDark = useDark({ storageKey: "vitepress-theme-appearance" });

const setMapLightPreset = (presetName: "dawn" | "day" | "dusk" | "night") => {
	map.value?.setConfigProperty("basemap", "lightPreset", presetName);
};

const interpolateResultsExpression = computed(() => [
	"interpolate",
	["linear"],
	[
		"match",
		["get", "name_en"],
		...flatMap(countryScores[props.selectedYear], (score, countryName) => [
			countryName,
			score,
		]),
		0,
	],
	0,
	0,
	Math.max(...values(countryScores[props.selectedYear])),
	1,
]);

const loadCountryData = () => {
	map.value?.addSource("countries", {
		type: "vector",
		url: "mapbox://mapbox.country-boundaries-v1",
	});

	map.value?.addLayer({
		id: "countries-score",
		slot: "bottom",
		type: "fill",
		source: "countries",
		"source-layer": "country_boundaries",
		paint: {
			"fill-emissive-strength": 0.9,
			"fill-color": [
				"match",
				["get", "name_en"],
				...flatMap(countryColorMap, (color, countryName) => [
					countryName,
					color,
				]),
				"transparent",
			],
			"fill-opacity": interpolateResultsExpression.value,
		},
	} as FillLayer);
};

onMounted(() => {
	if (!mapContainer.value) return;

	map.value = markRaw(
		new mapboxgl.Map({
			container: mapContainer.value,
			center: [8, 62],
			zoom: 3.5,
		}) as Map,
	);

	map.value?.on("style.load", () => {
		setMapLightPreset(isDark.value ? "night" : "day");
	});

	map.value.on("load", () => {
		loadCountryData();
	});
});

watch(isDark, () => {
	setMapLightPreset(isDark.value ? "night" : "day");
});

watch(
	() => props.selectedYear,
	() => {
		if (map.value?.getLayer("countries-score")) {
			map.value?.setPaintProperty(
				"countries-score",
				"fill-opacity",
				interpolateResultsExpression.value,
			);
		}
	},
);

onUnmounted(() => {
	map.value?.remove();
});
</script>

<template>
	<div ref="mapContainer" class="h-[500px] w-full" />
</template>

<style scoped>
@import "mapbox-gl/dist/mapbox-gl.css";
</style>
