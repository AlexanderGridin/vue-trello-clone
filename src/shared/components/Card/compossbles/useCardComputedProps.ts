import { computed } from "vue";
import type { CardProps } from "../Card.vue";

export const useCardComputedProps = (props: CardProps) => {
  const cardStyle = computed(() => ({
    backgroundColor: props.backgroundColor || "#ebecf0",
  }));

  return { cardStyle };
};
