<script setup lang="ts">
import { computed } from "vue";
import { createColumnHelper } from "@tanstack/vue-table";
import Table from "@/theme/Table.vue";
import { data as results } from "@/results.data";
import { filter, groupBy, map, orderBy, sumBy, take } from "lodash-es";
import type { Country } from "@/counties";

type CountryResult = {
	COUNTRY: Country;
	CW_CALLS: number;
	PH_CALLS: number;
	CW_SCORE: number;
	PH_SCORE: number;
};

const props = defineProps<{
	year: number;
}>();

const countryResults = computed<CountryResult[]>(() => {
	return orderBy(
		map(groupBy(results[props.year], "COUNTRY"), (countryResult, country) => ({
			COUNTRY: country as Country,
			CW_CALLS: filter(countryResult, { MODE: "CW" }).length,
			PH_CALLS: filter(countryResult, { MODE: "PH" }).length,
			CW_SCORE: sumBy(take(filter(countryResult, { MODE: "CW" }), 10), "SCORE"),
			PH_SCORE: sumBy(take(filter(countryResult, { MODE: "PH" }), 10), "SCORE"),
		})),
		(result) => result.CW_SCORE + result.PH_SCORE,
		"desc",
	);
});

const columnHelper = createColumnHelper<CountryResult>();

const columns = [
	columnHelper.display({
		header: "Pos",
		cell: ({ row }) => row.index + 1,
	}),
	columnHelper.accessor("COUNTRY", {
		header: "Country",
	}),
	columnHelper.group({
		header: "CW",
		columns: [
			columnHelper.accessor("CW_CALLS", {
				header: "Calls",
			}),
			columnHelper.accessor("CW_SCORE", {
				header: "Score",
			}),
		],
	}),
	columnHelper.group({
		header: "PH",
		columns: [
			columnHelper.accessor("PH_CALLS", {
				header: "Calls",
			}),
			columnHelper.accessor("PH_SCORE", {
				header: "Score",
			}),
		],
	}),
	columnHelper.accessor((row) => row.CW_SCORE + row.PH_SCORE, {
		id: "SCORE",
		header: "Total",
	}),
];
</script>

<template>
	<Table
		:data="countryResults"
		:columns="columns"
		:table-options="{
			initialState: { sorting: [{ id: 'SCORE', desc: true }] },
		}"
	/>
</template>
