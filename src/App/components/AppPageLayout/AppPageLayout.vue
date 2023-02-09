<script setup lang="ts">
import Spinner from "@app/components/Spinner/Spinner.vue";

export interface AppPageLayoutProps {
  isLoading?: boolean;
}

withDefaults(defineProps<AppPageLayoutProps>(), {
  isLoading: false,
});
</script>

<template>
  <div class="AppPageLayout">
    <div class="AppPageLayout__header"><slot name="header" /></div>
    <div class="AppPageLayout__content"><slot name="content" /></div>

    <slot />
    <Spinner v-if="isLoading" />
  </div>
</template>

<style scoped>
.AppPageLayout {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.AppPageLayout__header {
  padding: 25px;
}

.AppPageLayout__content {
  flex-grow: 1;
  overflow-x: auto;
  padding: 0 20px;
}
</style>
