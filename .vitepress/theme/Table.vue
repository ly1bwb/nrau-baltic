<script setup lang="ts" generic="TData">
import { ref } from "vue";
import {
	useVueTable,
	getCoreRowModel,
	FlexRender,
	getSortedRowModel,
	type SortingState,
	type ColumnDef,
	type TableOptions,
} from "@tanstack/vue-table";
import {
	ArrowUpDownIcon,
	ArrowDownAZIcon,
	ArrowDownZAIcon,
	ArrowDown01Icon,
	ArrowDown10Icon,
} from "lucide-vue-next";

const props = defineProps<{
	columns: ColumnDef<TData, any>[];
	data: TData[];
	tableOptions?: Partial<TableOptions<TData>>;
}>();

const sortingState = ref<SortingState>(
	props.tableOptions?.initialState?.sorting || [],
);

const table = useVueTable({
	columns: props.columns,
	get data() {
		return props.data;
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
	...props.tableOptions,
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
