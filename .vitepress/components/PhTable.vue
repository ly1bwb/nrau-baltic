<script setup lang="ts">
import { computed } from "vue";
import { createColumnHelper } from "@tanstack/vue-table";
import Table from "@/theme/Table.vue";
import { data as results, type Result } from "@/results.data";

const props = defineProps<{
	year: number;
}>();

const phResults = computed(() =>
	results[props.year].filter((result) => result.MODE === "PH"),
);

const columnHelper = createColumnHelper<Result>();

const columns = [
	columnHelper.display({
		header: "Pos",
		cell: ({ row }) => row.index + 1,
	}),
	columnHelper.accessor("CALL", {
		header: "Call",
		sortingFn: "text",
	}),
	columnHelper.group({
		header: "QSO count",
		columns: [
			columnHelper.accessor("QSO_COUNT_80m", {
				header: "80m",
			}),
			columnHelper.accessor("QSO_COUNT_40m", {
				header: "40m",
			}),
			columnHelper.accessor((row) => row.QSO_COUNT_80m + row.QSO_COUNT_40m, {
				header: "Total",
			}),
		],
	}),
	columnHelper.group({
		header: "Points",
		columns: [
			columnHelper.accessor("POINT_80m", {
				header: "80m",
			}),
			columnHelper.accessor("POINT_40m", {
				header: "40m",
			}),
		],
	}),
	columnHelper.group({
		header: "Multiplier",
		columns: [
			columnHelper.accessor("MULT_80m", {
				header: "80m",
			}),
			columnHelper.accessor("MULT_40m", {
				header: "40m",
			}),
		],
	}),
	columnHelper.accessor("SCORE", {
		header: "Score",
	}),
	columnHelper.accessor("POWER", {
		header: "Power",
	}),
];
</script>

<template>
	<Table
		:data="phResults"
		:columns="columns"
		:table-options="{
			initialState: { sorting: [{ id: 'SCORE', desc: true }] },
		}"
	/>
</template>
