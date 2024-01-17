<script setup lang="ts">
import { computed } from "vue";
import { createColumnHelper } from "@tanstack/vue-table";
import Table from "@/theme/Table.vue";
import { data as results } from "@/results.data";
import { groupBy, map, orderBy, sumBy } from "lodash-es";
import { type Country, type Region, type RegionCode, REGIONS } from "@/regions";

type RegionResult = {
	COUNTRY: Country;
	REGION_CODE: RegionCode;
	REGION_NAME: Region["name"];
	SCORE: number;
	STATION_COUNT: number;
};

const props = defineProps<{
	year: number;
}>();

const regionResults = computed(() =>
	orderBy(
		map(
			groupBy(results[props.year], "COUNTY"),
			(regionResult, regionCode: RegionCode) => ({
				COUNTRY: REGIONS[regionCode].country,
				REGION_CODE: regionCode,
				REGION_NAME: REGIONS[regionCode].name,
				STATION_COUNT: regionResult.length,
				SCORE: sumBy(regionResult, "SCORE"),
			}),
		) as unknown as RegionResult[],
		"SCORE",
		"desc",
	),
);

const columnHelper = createColumnHelper<RegionResult>();

const columns = [
	columnHelper.display({
		header: "Pos",
		cell: ({ row }) => row.index + 1,
	}),
	columnHelper.accessor("REGION_CODE", {
		header: "ID",
	}),
	columnHelper.accessor("REGION_NAME", {
		header: "Name",
	}),
	columnHelper.accessor("STATION_COUNT", {
		header: "Stations",
	}),
	columnHelper.accessor("SCORE", {
		header: "Score",
	}),
];
</script>

<template>
	<Table
		:data="regionResults"
		:columns="columns"
		:table-options="{
			initialState: { sorting: [{ id: 'SCORE', desc: true }] },
		}"
	/>
</template>
