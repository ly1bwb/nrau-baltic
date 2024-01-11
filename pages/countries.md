---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue';
import CountryLineChart from '@/components/CountryLineChart.vue'
import CountryMapChart from '@/components/CountryMapChart.vue'

const selectedYear = ref<number>(2023);
</script>

# Countries

The sum of best 10 CW scores and best 10 SSB scores of each country
<CountryLineChart @highlightYear="(year) => selectedYear = year" />

<CountryMapChart :selectedYear="selectedYear" />
