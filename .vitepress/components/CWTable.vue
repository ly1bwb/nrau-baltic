<script setup lang="ts">
import { data as results } from "../results.data.js";

const cwResults = Object.fromEntries(Object.entries(results).map(([year, results]) => [year, results.filter((result) => result.MODE === "CW")]))
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="mt-0">
      <thead >
        <tr class="w-full">
          <th rowspan="2">POS</th>
          <th rowspan="2">Call</th>
          <th colspan="3" class="text-center">QSO count</th>
          <th colspan="2" class="text-center">Points</th>
          <th colspan="2" class="text-center">Multiplier</th>
          <th rowspan="2">Score</th>
          <th rowspan="2">Class</th>
        </tr>
        <tr>
          <th>80m</th>
          <th>40m</th>
          <th>Total</th>
          <th>80m</th>
          <th>40m</th>
          <th>80m</th>
          <th>40m</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result, index in cwResults[2022]">
          <td>{{ index + 1 }}</td>
          <td>{{ result.CALL }}</td>
          <td>{{ result.QSO_COUNT_80m }}</td>
          <td>{{ result.QSO_COUNT_40m }}</td>
          <td>{{ result.QSO_COUNT_80m + result.QSO_COUNT_40m }}</td>
          <td>{{ result.POINT_80m }}</td>
          <td>{{ result.POINT_40m }}</td>
          <td>{{ result.MULT_80m }}</td>
          <td>{{ result.MULT_40m }}</td>
          <td>{{ result.SCORE }}</td>
          <td>{{ result.POWER }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
