<script setup lang="ts">
import AppLayout from "./components/AppLayout.vue";
import AppNavigation from "./components/AppNavigation/AppNavigation.vue";
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <AppNavigation />
    </template>

    <template #content>
      <router-view />
    </template>
  </AppLayout>
</template>

<style scoped></style>
