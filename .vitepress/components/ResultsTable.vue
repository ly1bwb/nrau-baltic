<script setup lang="ts">
import { computed, ref } from "vue";
import { data as results, type Result } from "../results.data.js";
import {
	createColumnHelper,
	useVueTable,
	getCoreRowModel,
	FlexRender,
	getSortedRowModel,
	type SortingState,
} from "@tanstack/vue-table";
import {
	ArrowUpDownIcon,
	ArrowDownAZIcon,
	ArrowDownZAIcon,
	ArrowDown01Icon,
	ArrowDown10Icon,
} from "lucide-vue-next";

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

const sortingState = ref<SortingState>([{ id: "SCORE", desc: true }]);

const table = useVueTable({
	columns,
	get data() {
		return cwResults.value;
	},
	getCoreRowModel: getCoreRowModel(),
	getSortedRowModel: getSortedRowModel(),
	state: {
		get sorting() {
			return sortingState.value;
		},
	},
	onSortingChange: (updaterOrValue) => {
		sortingState.value =
			typeof updaterOrValue === "function"
				? updaterOrValue(sortingState.value)
				: updaterOrValue;
	},
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
						:class="{
							'cursor-pointer select-none': header.column.getCanSort(),
						}"
						@click="header.column.getToggleSortingHandler()?.($event)"
					>
						<div class="flex items-center gap-2">
							<FlexRender
								v-if="!header.isPlaceholder"
								:render="header.column.columnDef.header"
								:props="header.getContext()"
							/>
							<template
								v-if="!header.isPlaceholder && header.column.getCanSort()"
							>
								<ArrowUpDownIcon
									class="text-gray-400 dark:text-gray-500"
									v-if="header.column.getIsSorted() === false"
								/>
								<template
									v-if="
										typeof table
											.getFilteredRowModel()
											.flatRows[0]?.getValue(header.column.id) === 'string'
									"
								>
									<ArrowDownAZIcon
										v-if="header.column.getIsSorted() === 'asc'"
									/>
									<ArrowDownZAIcon
										v-else-if="header.column.getIsSorted() === 'desc'"
									/>
								</template>
								<template v-else>
									<ArrowDown01Icon
										v-if="header.column.getIsSorted() === 'asc'"
									/>
									<ArrowDown10Icon
										v-else-if="header.column.getIsSorted() === 'desc'"
									/>
								</template>
							</template>
						</div>
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
