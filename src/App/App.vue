<script setup lang="ts">
import AppLayout from "./components/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <div>Sidebar</div>
    </template>

    <template #content>
      <router-view />
    </template>
  </AppLayout>
</template>

<style scoped></style>
