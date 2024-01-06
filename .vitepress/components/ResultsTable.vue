<script setup lang="ts">
import { computed } from "vue";
import { data as results, type Result } from "../results.data.js";
import {
	createColumnHelper,
	useVueTable,
	getCoreRowModel,
	getFilteredRowModel,
	FlexRender,
} from "@tanstack/vue-table";

const props = defineProps({
	year: {
		type: Number,
		required: true,
	},
});

const cwResults = computed(() =>
	results[props.year].filter((result) => result.MODE === "CW"),
);

const columnHelper = createColumnHelper<Result>();

const columns = [
	columnHelper.display({
		header: "Pos",
		cell: ({ row }) => row.index + 1,
	}),
	columnHelper.accessor("CALL", {
		header: "Call",
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

const table = useVueTable({
	columns,
	get data() {
		return cwResults.value;
	},
	getCoreRowModel: getCoreRowModel(),
	getFilteredRowModel: getFilteredRowModel(),
});
</script>

<template>
	<div class="w-full overflow-x-auto">
		<table class="mt-0">
			<thead>
				<tr
					v-for="headerGroup in table.getHeaderGroups()"
					:key="headerGroup.id"
				>
					<th
						v-for="header in headerGroup.headers"
						:key="header.id"
						:colSpan="header.colSpan"
					>
						<FlexRender
							v-if="!header.isPlaceholder"
							:render="header.column.columnDef.header"
							:props="header.getContext()"
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in table.getRowModel().rows" :key="row.id">
					<td v-for="cell in row.getVisibleCells()" :key="cell.id">
						<FlexRender
							:render="cell.column.columnDef.cell"
							:props="cell.getContext()"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
