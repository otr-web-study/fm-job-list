<script setup lang="ts">
import TheBadge from './TheBadge.vue';
import { useFilterStore } from '@/stores/filter-store';

const store = useFilterStore();
</script>

<template>
  <div
    v-if="store.filter.length"
    class="-mt-9 flex justify-between rounded-radii bg-white px-[18px] py-5 shadow-main"
  >
    <div class="flex flex-wrap gap-4">
      <TheBadge v-for="badge in store.filter" :key="badge" :clearable="true">{{ badge }}</TheBadge>
    </div>
  </div>
</template>
