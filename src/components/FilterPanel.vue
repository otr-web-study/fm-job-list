<script setup lang="ts">
import TheBadge from './TheBadge.vue';
import { useFilterStore } from '@/stores/filter';

const store = useFilterStore();
</script>

<template>
  <div
    v-if="store.filter.length"
    class="-mt-9 flex items-center justify-between rounded-radii bg-white px-[18px] py-5 shadow-main sm:px-[38px]"
  >
    <div class="flex flex-wrap gap-x-[13px] gap-y-4">
      <TheBadge
        v-for="category in store.filter"
        :key="category"
        :clearable="true"
        @delete-badge="store.removeFilter(category)"
        >{{ category }}</TheBadge
      >
    </div>
    <button
      class="px-2 text-[13.5px] font-bold -tracking-[0.5px] text-gr-800 sm:px-0"
      @click="store.clearFilter"
    >
      Clear
    </button>
  </div>
</template>
@/stores/filter
