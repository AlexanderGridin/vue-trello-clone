<script setup lang="ts"></script>

<template>
  <div class="container">
    <aside class="sidebar"><slot name="sidebar" /></aside>
    <main class="content"><slot name="content" /></main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 300px;
  color: #fff;
  flex-shrink: 0;
  background-color: #292e39;
  border-right: 1px solid #4c566a;
}

.content {
  position: relative;
  flex-grow: 1;
  background-color: #2e3440;
}
</style>
