import { computed } from "vue";
import type { BoardPageState } from "../models/BoardPageState";

export const useBoardPageGetters = (state: BoardPageState) => {
  const board = computed(() => state.value.board);
  const boards = computed(() => state.value.boards);

  return { board, boards };
};
