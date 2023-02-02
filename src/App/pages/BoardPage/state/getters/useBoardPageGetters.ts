import { computed } from "vue";
import type { BoardPageState } from "../models/BoardPageState";

export const useBoardPageGetters = (state: BoardPageState) => {
  const board = computed(() => state.value.board);
  const boardsCache = computed(() => state.value.boardsCache);

  return { board, boardsCache };
};
