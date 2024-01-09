---
fullWidth: true
---

<script setup lang="ts">
import { ref, computed } from 'vue'
// import Listbox from '@/theme/Listbox.vue'
import CountryLineChart from '@/components/CountryLineChart.vue'

import { data as results } from "@/results.data.ts";

</script>

# Countries

The sum of best 10 CW scores and best 10 SSB scores of each country
<CountryLineChart />

<!-- <Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-4" /> -->
