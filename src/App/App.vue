<script setup lang="ts">
import AppLayout from "./components/AppLayout/AppLayout.vue";
import AppSidebar from "@app/components/AppSidebar/AppSidebar.vue";
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <AppSidebar />
    </template>

    <template #content>
      <router-view />
    </template>
  </AppLayout>
</template>

<style scoped></style>
