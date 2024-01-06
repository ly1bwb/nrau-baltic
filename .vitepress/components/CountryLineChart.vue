<script setup lang="ts">
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	ToolboxComponent,
	GridComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { LineSeriesOption } from "echarts/charts";
import type {
	TitleComponentOption,
	TooltipComponentOption,
	LegendComponentOption,
	ToolboxComponentOption,
	GridComponentOption,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";
import { useDark } from "@vueuse/core";

import { data as results } from "../results.data.js";
import { COUNTRIES } from "../counties";

const availableYears = Object.keys(results).map(Number);
const countryScores: LineSeriesOption[] = COUNTRIES.map((country) => ({
	name: country,
	type: "line",
	data: Object.values(results).map((yearResult) => {
		const countryResults = yearResult.filter(
			(result) => result.COUNTRY === country,
		);
		const countryCWResults = countryResults
			.filter((result) => result.MODE === "CW")
			.slice(0, 10);

		const countryPHResults = countryResults
			.filter((result) => result.MODE === "PH")
			.slice(0, 10);

		return [...countryCWResults, ...countryPHResults].reduce(
			(scoreSum, result) => scoreSum + result.SCORE,
			0,
		);
	}),
}));

use([
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	ToolboxComponent,
	GridComponent,
	LineChart,
	SVGRenderer,
]);

type EChartsOption = ComposeOption<
	| TitleComponentOption
	| TooltipComponentOption
	| LegendComponentOption
	| ToolboxComponentOption
	| GridComponentOption
	| LineSeriesOption
>;

const isDark = useDark({ storageKey: "vitepress-theme-appearance" });

const option = ref<EChartsOption>({
	backgroundColor: "transparent",
	title: {
		text: "National competition",
	},
	tooltip: {
		trigger: "axis",
	},
	legend: {
		data: COUNTRIES,
		width: "50%",
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	xAxis: {
		type: "category",
		boundaryGap: false,
		data: availableYears,
	},
	yAxis: {
		type: "value",
	},
	series: countryScores,
});
</script>

<template>
	<div class="h-80 w-full">
		<VChart
			class="chart"
			:option="option"
			autoresize
			:theme="isDark ? 'dark' : ''"
		/>
	</div>
</template>
