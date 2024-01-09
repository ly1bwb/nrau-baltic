---
fullWidth: true
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import ResultsTable from '@/components/ResultsTable.vue'
import Listbox from '@/theme/Listbox.vue'
import Table from '@/theme/Table.vue'

import { data as results, type Result } from "@/results.data";
import { createColumnHelper } from '@tanstack/vue-table';

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));

const cwResults = computed(() =>
	results[selectedYear.value].filter((result) => result.MODE === "CW"),
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

# CW results

<Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-4" />

<Table :data="cwResults" :columns="columns" />
