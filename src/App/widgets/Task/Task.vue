<script setup lang="ts">
import DeleteButton from "@/App/components/DeleteButton/DeleteButton.vue";

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="Task">
    <div class="Task--content"><slot /></div>
    <DeleteButton @click="$emit('onRemove')" />
  </div>
</template>

<style scoped>
.Task {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Task--content {
  margin-right: 7px;
}
</style>
