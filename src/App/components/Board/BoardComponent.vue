<script setup lang="ts">
export interface BoardProps {
  title: string;
}

defineProps<BoardProps>();
</script>

<template>
  <div class="Board">
    <h2 class="Board__title">{{ title }}</h2>
  </div>
</template>

<style scoped>
.Board {
  border: 1px solid yellow;
}
</style>
