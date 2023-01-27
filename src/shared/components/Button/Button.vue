<script setup lang="ts">
import type { ButtonType } from "@shared/components/Button/enums/ButtonType";
import type { ButtonStyle } from "@shared/components/Button/enums/ButtonStyle";
import { useButtonComputedProps } from "./composables/useButtonComputedProps";

export interface ButtonProps {
  type?: ButtonType;
  visualStyle?: ButtonStyle | ButtonStyle[];
}

const props = defineProps<ButtonProps>();
const { buttonType, buttonClass } = useButtonComputedProps(props);

defineEmits<{
  (e: "onClick"): void;
}>();
</script>

<template>
  <button
    :type="buttonType"
    class="Button"
    :class="buttonClass"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<style scoped>
.Button {
  border-radius: 3px;
  border: none;
  font-size: 16px;
  line-height: 1;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  transition: all 0.4s;
  flex-shrink: 0;

  --regular-color: #5e81ac;
  --error-color: #bf616a;
  --warning-color: #d08770;
  --success-color: #a3be8c;

  --border-width: 1px;
}

.Button:hover {
  cursor: pointer;
  background: transparent;
}

.Button--regular {
  background-color: var(--regular-color);
  border: var(--border-width) solid var(--regular-color);
}

.Button--regular:hover {
  color: var(--regular-color);
}

.Button--error {
  background-color: var(--error-color);
  border: var(--border-width) solid var(--error-color);
}

.Button--error:hover {
  color: var(--error-color);
}

.Button--warning {
  background-color: var(--warning-color);
  border: var(--border-width) solid var(--warning-color);
}

.Button--warning:hover {
  color: var(--warning-color);
}

.Button--success {
  background-color: var(--success-color);
  border: var(--border-width) solid var(--success-color);
}

.Button--success:hover {
  color: var(--success-color);
}

.Button--icon {
  padding: 7px;
}
</style>
