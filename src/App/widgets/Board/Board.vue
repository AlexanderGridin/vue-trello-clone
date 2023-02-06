<script setup lang="ts">
import type { BoardModel } from "@app/entities/Board/BoardModel";
import BoardHeader from "./components/BoardHeader.vue";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onFavorite"): void;
  (e: "onRemove"): void;
}>();
</script>

<template>
  <BoardHeader
    :board="board"
    @on-favorite="$emit('onFavorite')"
    @on-remove="$emit('onRemove')"
  />
</template>

<style scoped></style>
