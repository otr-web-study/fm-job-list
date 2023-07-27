<script setup lang="ts">
import { type JobPosition } from '@/types/JobPosition';
import TheBadge from './TheBadge.vue';

const props = defineProps<{ position: JobPosition }>();
</script>

<template>
  <div
    class="flex flex-col items-center rounded-radii border-l-4 bg-white px-6 py-6 shadow-main sm:flex-row sm:justify-between"
    :class="{
      'border-l-primary': props.position.featured,
      'border-l-gr-100': !props.position.featured,
    }"
  >
    <div
      class="relative mb-6 flex gap-4 border-b border-b-gr-800 pb-6 pt-3 sm:mb-0 sm:border-b-0 sm:pb-0"
    >
      <img
        class="absolute -top-[50px] aspect-square w-[50px] sm:static sm:w-[100px] sm:shrink-0"
        :src="props.position.logo"
        :alt="props.position.company"
      />
      <div class="flex flex-col">
        <div class="flex items-center gap-4">
          <h3 class="font-bold text-primary">{{ props.position.company }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
