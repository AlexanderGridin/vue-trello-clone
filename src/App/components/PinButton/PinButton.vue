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
  return `icon PinButton-icon ${
    props.isPinned ? "PinButton-icon--pinned" : ""
  }`;
});
</script>

<template>
  <button :type="ButtonType.Button" class="plain-button">
    <Icon :icon="MaterialIcon.Pin" :class="iconCssClass" />
  </button>
</template>

<style scoped>
.PinButton-icon {
  overflow: hidden;
}

.PinButton-icon--pinned {
  color: #5e81ac;
  height: 23px;
}
</style>
