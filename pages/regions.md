---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue';
import RegionLineChart from '@/components/RegionLineChart.vue'
import CountryMapChart from '@/components/CountryMapChart.vue'
import Listbox from '@/theme/Listbox.vue'
import CountryTable from '@/components/CountryTable.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)  
const selectedYear = ref<number>(Math.max(...availableYears));
</script>

# Regions

<RegionLineChart @highlightYear="(year) => selectedYear = year" class="mb-4" />

<!-- <CountryMapChart :selectedYear="selectedYear" />

<Listbox v-model="selectedYear" :items="availableYears" class="w-28 sm:w-24 my-4" />

<CountryTable :year="selectedYear" /> -->
