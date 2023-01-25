<script setup lang="ts">
import { BOARD } from "../static-data/board";
import Board from "./components/Board/Board.vue";
</script>

<template>
  <Board :board="BOARD" />
</template>

<style scoped></style>
