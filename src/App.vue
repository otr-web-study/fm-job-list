<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheContainer from '@/components/TheContainer.vue';
import FilterPanel from '@/components/FilterPanel.vue';
import PositionList from '@/components/PositionList.vue';
</script>

<template>
  <TheHeader />
  <main>
    <TheContainer>
      <FilterPanel />
      <PositionList />
    </TheContainer>
  </main>
</template>
