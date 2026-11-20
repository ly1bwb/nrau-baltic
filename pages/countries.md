---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue';
import CountryLineChart from '@/components/CountryLineChart.vue'
import CountryMapChart from '@/components/CountryMapChart.vue'
import Listbox from '@/theme/Listbox.vue'
import CountryTable from '@/components/CountryTable.vue'
import Switch from '@/theme/Switch.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)  
const selectedYear = ref<number>(Math.max(...availableYears));
const stacked = ref(false);
</script>

# Countries

Country score is the sum of best 10 CW scores and best 10 SSB scores of each country
<Switch v-model="stacked" label="Stacked" class="my-4" />
<CountryLineChart :stacked="stacked" @highlightYear="(year) => selectedYear = year" class="mb-4" />

<CountryMapChart :selectedYear="selectedYear" />

<Listbox v-model="selectedYear" :items="availableYears" class="w-28 my-4" />

<CountryTable :year="selectedYear" />
