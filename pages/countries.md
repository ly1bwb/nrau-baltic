<script setup lang="ts">
import { ref, computed } from 'vue'
// import Listbox from '@/theme/Listbox.vue'
import CountryLineChart from '@/components/CountryLineChart.vue'

import { data as results } from "@/results.data.ts";

</script>

# Countries

<CountryLineChart />

<!-- <Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-4" /> -->
