---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue';
import RegionLineChart from '@/components/RegionLineChart.vue'
import Listbox from '@/theme/Listbox.vue'
import RegionTable from '@/components/RegionTable.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)  
const selectedYear = ref<number>(Math.max(...availableYears));
</script>

# Regions

<RegionLineChart @highlightYear="(year) => selectedYear = year" class="mb-4" />


<Listbox v-model="selectedYear" :items="availableYears" class="w-28 sm:w-24 my-4" />

<RegionTable :year="selectedYear" />
