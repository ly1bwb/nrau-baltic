---
fullWidth: true
---

<script setup lang="ts">
import { ref } from 'vue'
import Listbox from '@/theme/Listbox.vue'
import PhTable from '@/components/PhTable.vue'

import { data as results } from "@/results.data";

const availableYears = Object.keys(results).map(Number)
const selectedYear = ref(Math.max(...availableYears));
</script>

# PH results

<Listbox v-model="selectedYear" :items="availableYears" class="w-24 mb-4" />

<PhTable :year="selectedYear" />
