<script setup lang="ts">
import { ButtonType } from "@shared/components/Button/enums/ButtonType";
import { useAddButtonStyles } from "./composables/useAddButtonStyles";

export interface AddButtonProps {
  buttonType?: ButtonType;
  alignContent?: "center" | null;
  minHeight?: number;
}

const props = withDefaults(defineProps<AddButtonProps>(), {
  buttonType: ButtonType.Button,
});

const { styles } = useAddButtonStyles(props);
</script>

<template>
  <button :type="props.buttonType" :style="styles" class="AddButton">
    <slot />
  </button>
</template>

<style scoped>
.AddButton {
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  padding: 12px;
  transition: all 0.4s;
  text-align: left;
  background-color: #ffffff3d;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.AddButton:hover {
  background-color: #ffffff52;
  cursor: pointer;
}
</style>
