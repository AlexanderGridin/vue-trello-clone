import { computed } from "vue";
import type { BoardPageState } from "../models/BoardPageState";

export const useBoardPageGetters = (state: BoardPageState) => {
  const title = computed(() => state.value.title);
  const lists = computed(() => state.value.lists);

  return { title, lists };
};
