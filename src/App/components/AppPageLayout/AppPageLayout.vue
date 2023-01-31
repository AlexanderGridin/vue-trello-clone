<script setup lang="ts"></script>

<template>
  <div class="AppPageLayout">
    <div class="AppPageLayout--header"><slot name="header" /></div>
    <div class="AppPageLayout--content"><slot name="content" /></div>

    <slot />
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

.AppPageLayout--header {
  padding: 7px 20px;
}

.AppPageLayout--content {
  flex-grow: 1;
  overflow-x: auto;
  padding: 20px 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
</style>
