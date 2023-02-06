import { computed } from "vue";
import type { BoardPageState } from "../models/BoardPageState";

export const useBoardPageGetters = (state: BoardPageState) => {
  const board = computed(() => state.value.board);
  const boardsCache = computed(() => state.value.boardsCache);

  const boardLists = computed(() => {
    const lists = state.value.board.lists;
    const pinnedLists = state.value.board.pinnedLists;

    return [...pinnedLists, ...lists];
  });

  return { board, boardsCache, boardLists };
};
