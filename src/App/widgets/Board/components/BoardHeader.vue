<script setup lang="ts">
import type { BoardModel } from "@/App/entities/Board/BoardModel";
import DeleteButton from "@/App/components/DeleteButton/DeleteButton.vue";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="BoardHeader-container">
    <h2 class="BoardHeader-title">{{ board.title }}</h2>

    <DeleteButton
      class="BoardHeader-delete-button"
      @click="$emit('onRemove')"
    />
  </div>
</template>

<style scoped>
.BoardHeader-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.BoardHeader-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-right: 7px;
}

.BoardHeader-delete-button {
  margin-left: auto;
}
</style>
