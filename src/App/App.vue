<script setup lang="ts">
import Board from "./components/Board/BoardComponent.vue";

const TITLE = "Board Title from script";
</script>

<template>
  <h1 class="header">Hello Vue World</h1>
  <Board :title="TITLE" />
</template>

<style scoped>
.header {
  border: 1px solid green;
  padding: 7px;
  text-align: center;
  margin: 0;
}
</style>
