---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue'
import Listbox from '@/theme/Listbox.vue'
import MixedTable from '@/components/MixedTable.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));
</script>

# MIXED results

<Listbox v-model="selectedYear" :items="availableYears" class="w-28 mb-8" />

<MixedTable :year="selectedYear" />
