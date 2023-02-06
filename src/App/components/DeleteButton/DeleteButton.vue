<script setup lang="ts">
import Icon from "@shared/components/Icon/Icon.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
</script>

<template>
  <button class="plain-button">
    <Icon :icon="MaterialIcon.Delete" class="icon DeleteButton-icon" />
  </button>
</template>

<style scoped>
.DeleteButton-icon {
  transition: color 0.4s;
}

.DeleteButton-icon:hover {
  color: #bf616a;
}
</style>
