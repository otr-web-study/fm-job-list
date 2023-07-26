<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheContainer from '@/components/TheContainer.vue';
import FilterPanel from './components/FilterPanel.vue';
</script>

<template>
  <TheHeader />
  <main>
    <TheContainer><FilterPanel /></TheContainer>
  </main>
</template>
