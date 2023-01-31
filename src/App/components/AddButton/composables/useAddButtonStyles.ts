import { computed } from "vue";
import type { AddButtonProps } from "../AddButton.vue";

export const useAddButtonStyles = (props: AddButtonProps) => {
  const styles = computed(() => ({
    color: props.isTextDark ? "#000" : "#FFF",
  }));

  return { styles };
};
