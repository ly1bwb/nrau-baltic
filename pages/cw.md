---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue'
import Listbox from '@/theme/Listbox.vue'
import CwTable from '@/components/CwTable.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));
</script>

# CW results

<Listbox v-model="selectedYear" :items="availableYears" class="w-28 mb-4" />

<CwTable :year="selectedYear" />
