<script setup lang="ts">
export interface CardProps {
  showHeader?: boolean;
  showContent?: boolean;
  showFooter?: boolean;
}

defineProps<CardProps>();
</script>

<template>
  <div class="Card">
    <div v-if="showHeader" class="Card--header">
      <slot name="header" />
    </div>

    <div v-if="showContent" class="Card--content">
      <slot name="content" />
    </div>

    <div v-if="showFooter" class="Card--footer">
      <slot name="footer" />
    </div>

    <slot />
  </div>
</template>

<style scoped>
.Card {
  min-height: 40px;
  border-radius: 3px;
  padding: 8px;
  background-color: #ebecf0;
}

.Card--header {
  border: 1px solid blue;
  margin-bottom: 12px;
}

.Card--content {
  border: 1px solid green;
}

.Card--footer {
  border: 1px solid red;
  margin-top: 12px;
}
</style>
