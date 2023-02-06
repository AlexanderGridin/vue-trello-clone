<script setup lang="ts">
import Icon from "@shared/components/Icon/Icon.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
</script>

<template>
  <button class="DeleteButton">
    <Icon :icon="MaterialIcon.Delete" class="DeleteButton-icon" />
  </button>
</template>

<style scoped>
.DeleteButton {
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.DeleteButton-icon {
  font-size: 28px;
  display: block;
  color: #a5a9b1;
  transition: color 0.4s;
}

.DeleteButton-icon:hover {
  color: #bf616a;
}
</style>
