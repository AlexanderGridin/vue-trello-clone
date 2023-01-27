<script setup lang="ts">
import { BOARD } from "../static-data/board";
import BoardPage from "@pages/BoardPage/BoardPage.vue";
</script>

<template>
  <BoardPage :board="BOARD" />
</template>

<style scoped></style>
