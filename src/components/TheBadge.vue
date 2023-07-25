<script setup lang="ts">
const props = defineProps<{ clearable: boolean }>();
</script>

<template>
  <div>
    <span><slot /></span>
    <button v-if="props.clearable" class=""><span class="sr-only">delete</span></button>
  </div>
</template>
