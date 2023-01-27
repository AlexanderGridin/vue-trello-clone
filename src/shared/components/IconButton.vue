<script setup lang="ts">
import Button from "@shared/components/Button/Button.vue";
import Icon from "@shared/components/Icon/Icon.vue";
import type { ButtonType } from "@shared/components/Button/enums/ButtonType";
import { ButtonStyle } from "@shared/components/Button/enums/ButtonStyle";
import type { MaterialIcon } from "@shared/components/Icon/enums/MaterialIcon";
import { computed } from "vue";

const props = defineProps<{
  icon?: MaterialIcon;
  type?: ButtonType;
  visualStyle?: ButtonStyle | ButtonStyle[];
}>();

defineEmits<{
  (e: "onClick"): void;
}>();

const visualStyle = computed(() => {
  if (Array.isArray(props.visualStyle)) {
    return [...props.visualStyle, ButtonStyle.Icon];
  }

  return props.visualStyle
    ? [props.visualStyle, ButtonStyle.Icon]
    : [ButtonStyle.Icon];
});
</script>

<template>
  <Button :type="type" :visual-style="visualStyle" @on-click="$emit('onClick')">
    <Icon style="display: block" :icon="icon" />
  </Button>
</template>

<style scoped></style>
