<script setup lang="ts">
import { usePositions } from '@/stores/position/usePositions';
import { useFetchPositions } from '@/stores/position/useFetchPositions';
import JobPosition from '@/components/JobPosition.vue';

useFetchPositions();
const positions = usePositions();
</script>

<template>
  <div class="flex flex-col gap-12 py-12">
    <JobPosition v-for="position in positions" :key="position.id" :position="position" />
  </div>
</template>
