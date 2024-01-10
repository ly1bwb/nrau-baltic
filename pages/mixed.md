---
fullWidth: true
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import Listbox from '@/theme/Listbox.vue'
import Table from '@/theme/Table.vue'
import { groupBy } from 'lodash-es'

import { data as results, type Result } from "@/results.data";
import { createColumnHelper } from '@tanstack/vue-table';

type MixedResult = Omit<Result, "QSO_COUNT_80m" | "QSO_COUNT_40m" | "POINT_80m" | "POINT_40m" | "MULT_80m" | "MULT_40m" | "SCORE" | "MODE"> & {
	CW_QSO_COUNT_80m: Result["QSO_COUNT_80m"];
	PH_QSO_COUNT_80m: Result["QSO_COUNT_80m"];
	CW_QSO_COUNT_40m: Result["QSO_COUNT_40m"];
	PH_QSO_COUNT_40m: Result["QSO_COUNT_40m"];
	CW_POINT_80m: Result["POINT_80m"];
	PH_POINT_80m: Result["POINT_80m"];
	CW_POINT_40m: Result["POINT_40m"];
	PH_POINT_40m: Result["POINT_40m"];
	CW_MULT_80m: Result["MULT_80m"];
	PH_MULT_80m: Result["MULT_80m"];
	CW_MULT_40m: Result["MULT_40m"];
	PH_MULT_40m: Result["MULT_40m"];
	CW_SCORE: Result["SCORE"];
	PH_SCORE: Result["SCORE"];
}

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));

const mixedResults = computed<MixedResult[]>(() =>
	Object.values(groupBy(results[selectedYear.value], "CALL"))
		.filter(resultGroup => resultGroup.length === 2)
		.map((group) => {
			const cwResults = group.find((result) => result.MODE === "CW")!;
			const phResults = group.find((result) => result.MODE === "PH")!;

			return {
				CALL: cwResults.CALL,
				CW_QSO_COUNT_80m: cwResults.QSO_COUNT_80m,
				PH_QSO_COUNT_80m: phResults.QSO_COUNT_80m,
				CW_QSO_COUNT_40m: cwResults.QSO_COUNT_40m,
				PH_QSO_COUNT_40m: phResults.QSO_COUNT_40m,
				CW_POINT_80m: cwResults.POINT_80m,
				PH_POINT_80m: phResults.POINT_80m,
				CW_POINT_40m: cwResults.POINT_40m,
				PH_POINT_40m: phResults.POINT_40m,
				CW_MULT_80m: cwResults.MULT_80m,
				PH_MULT_80m: phResults.MULT_80m,
				CW_MULT_40m: cwResults.MULT_40m,
				PH_MULT_40m: phResults.MULT_40m,
				CW_SCORE: cwResults.SCORE,
				PH_SCORE: phResults.SCORE,
				POWER: cwResults.POWER,
				COUNTY: cwResults.COUNTY,
				CHECKLOG: cwResults.CHECKLOG,
				COUNTRY: cwResults.COUNTRY,
			}
		})
		.sort((a, b) => b.CW_SCORE + b.PH_SCORE - a.CW_SCORE - a.PH_SCORE)
);

const columnHelper = createColumnHelper<MixedResult>();

const columns = [
	columnHelper.display({
		header: "Pos",
		cell: ({ row }) => row.index + 1,
	}),
	columnHelper.accessor("CALL", {
		header: "Call",
		sortingFn: "text",
	}),
	columnHelper.accessor((row) => row.CW_QSO_COUNT_80m + row.PH_QSO_COUNT_80m + row.CW_QSO_COUNT_40m + row.PH_QSO_COUNT_80m, {
		header: "QSO count",
	}),
	columnHelper.accessor((row) => row.CW_MULT_80m + row.PH_MULT_80m + row.CW_MULT_40m + row.PH_MULT_40m, {
		header: "Multiplier",
	}),
	columnHelper.accessor("CW_SCORE", {
		header: "CW Score",
	}),
	columnHelper.accessor("PH_SCORE", {
		header: "PH Score",
	}),
	columnHelper.accessor((row) => row.CW_SCORE + row.PH_SCORE, {
		id: "TOTAL_SCORE",
		header: "Total Score",
	}),	
	columnHelper.accessor("POWER", {
		header: "Power",
	}),
];
</script>

# MIXED results

<Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-8" />

<Table :data="mixedResults" :columns="columns" :table-options="{initialState: {sorting: [ {id: 'TOTAL_SCORE', desc: true} ]}}" />
