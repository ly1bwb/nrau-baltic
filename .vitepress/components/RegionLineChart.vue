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
import type { ComposeOption, Payload } from "echarts/core";
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

import { data as results } from "@/results.data.js";
import { REGIONS } from "@/regions";
import {
	filter,
	flatMap,
	map,
	pickBy,
	sumBy,
	sum,
	orderBy,
	take,
} from "lodash-es";

type EChartsOption = ComposeOption<
	| TitleComponentOption
	| TooltipComponentOption
	| LegendComponentOption
	| ToolboxComponentOption
	| GridComponentOption
	| LineSeriesOption
>;

const emit = defineEmits<{ highlightYear: [year: number] }>();

use([
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	ToolboxComponent,
	GridComponent,
	LineChart,
	SVGRenderer,
]);

const availableYears = Object.keys(results).map(Number);

const regionScores: LineSeriesOption[] = take(
	orderBy(
		map(pickBy(REGIONS, "isActive"), (region, regionCode) => {
			const regionResult = map(results, (yearResult) =>
				sumBy(filter(yearResult, { COUNTY: regionCode }), "SCORE"),
			);

			return {
				...region,
				type: "line",
				data: regionResult,
			};
		}),
		(regionScore) => sum(regionScore.data),
		"desc",
	),
	8,
);

const isDark = useDark({ storageKey: "vitepress-theme-appearance" });

const option = ref<EChartsOption>({
	backgroundColor: "transparent",
	tooltip: {
		trigger: "axis",
		order: "valueDesc",
	},
	legend: {},
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
	series: regionScores,
});

const handleHighlight = (payload: Payload) => {
	const highlightedYear = availableYears[payload.batch?.[0].dataIndex];

	if (highlightedYear) {
		emit("highlightYear", highlightedYear);
	}
};
</script>

<template>
	<div class="h-[500px] w-full">
		<VChart
			:option="option"
			autoresize
			:theme="isDark ? 'dark' : ''"
			@highlight="handleHighlight"
		/>
	</div>
</template>
