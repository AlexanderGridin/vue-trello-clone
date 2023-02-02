import { computed } from "vue";
import type { BoardsPageState } from "../models/BoardsPageState";

export const useBoardsPageStateGetters = (state: BoardsPageState) => {
  const boards = computed(() => state.value.boards);
  const isLoaded = computed(() => state.value.isLoaded);

  return { boards, isLoaded };
};
