<script setup lang="ts">
import { useCardComputedProps } from "./compossbles/useCardComputedProps";

export interface CardProps {
  showHeader?: boolean;
  showContent?: boolean;
  showFooter?: boolean;
  backgroundColor?: string;
}

const props = defineProps<CardProps>();
const { cardStyle } = useCardComputedProps(props);
</script>

<template>
  <div class="Card" :style="cardStyle">
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
}

.Card--header {
  margin-bottom: 12px;
}

.Card--footer {
  margin-top: 12px;
}
</style>
