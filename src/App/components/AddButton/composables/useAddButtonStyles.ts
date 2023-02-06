import { computed } from "vue";
import type { AddButtonProps } from "../AddButton.vue";

export const useAddButtonStyles = (props: AddButtonProps) => {
  const styles = computed(() => ({
    minHeight: props.minHeight ? `${props.minHeight}px` : "auto",
    justifyContent: props.alignContent ? props.alignContent : "flex-start",
  }));

  return { styles };
};
