<script setup>
import { ref } from 'vue'
import ResultsTable from '.vitepress/components/ResultsTable.vue'
import Listbox from '.vitepress/theme/Listbox.vue'

import { data as results } from ".vitepress/results.data.ts";

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));

</script>

# CW results

<Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-4" />

<ResultsTable :year="selectedYear"/>
