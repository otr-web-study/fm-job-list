<script setup lang="ts">
const props = defineProps<{ clearable?: boolean }>();
const emits = defineEmits<{
  (e: 'delete-badge'): void;
}>();

const handleDelete = () => {
  emits('delete-badge');
};
</script>

<template>
  <div
    class="flex min-h-[32px] cursor-pointer items-center overflow-hidden rounded-radii bg-gr-200 text-[13px] font-extrabold leading-[1] -tracking-[0.5px] text-primary hover:bg-primary hover:text-gr-100"
  >
    <span class="pl-[9px] pr-[13px]"><slot /></span>
    <button
      v-if="props.clearable"
      class="h-full w-8 cursor-pointer bg-primary bg-icon-remove bg-center bg-no-repeat text-gr-100 hover:bg-gr-900"
      @click="handleDelete"
    >
      <span class="sr-only">delete</span>
    </button>
  </div>
</template>
