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
  padding: 20px;
  flex-shrink: 0;
  background-color: #3b4252;
}

.content {
  position: relative;
  flex-grow: 1;
  background-color: #292e39;
}
</style>
