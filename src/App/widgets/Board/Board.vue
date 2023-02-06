<script setup lang="ts">
import type { BoardModel } from "@app/entities/Board/BoardModel";
import BoardHeader from "./components/BoardHeader.vue";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <BoardHeader :board="board" @on-remove="$emit('onRemove')" />
</template>

<style scoped></style>
