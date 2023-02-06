<script setup lang="ts">
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
import Icon from "@/shared/components/Icon/Icon.vue";
import { ButtonType } from "@shared/components/Button/enums/ButtonType";
import { computed } from "vue";

export interface PinButtonProps {
  isPinned?: boolean;
}

const props = defineProps<PinButtonProps>();

const iconCssClass = computed(() => {
  return `PinButton-icon ${props.isPinned ? "PinButton-icon--pinned" : ""}`;
});
</script>

<template>
  <button :type="ButtonType.Button" class="PinButton">
    <Icon :icon="MaterialIcon.Pin" :class="iconCssClass" />
  </button>
</template>

<style scoped>
.PinButton {
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.PinButton-icon {
  font-size: 28px;
  overflow: hidden;
  display: block;
  color: #a5a9b1;
}

.PinButton-icon--pinned {
  color: #5e81ac;
  height: 23px;
}
</style>
