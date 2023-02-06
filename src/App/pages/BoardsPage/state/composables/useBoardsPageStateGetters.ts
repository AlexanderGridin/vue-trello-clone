import type { BoardModel } from "@/App/entities/Board/BoardModel";
import { computed } from "vue";
import type { BoardsPageState } from "../models/BoardsPageState";

export const useBoardsPageStateGetters = (state: BoardsPageState) => {
  const boards = computed(() => state.value.boards);
  const favoriteBoards = computed(() => {
    const boards = state.value.boards;
    return boards.filter((board: BoardModel) => board.isFavorite);
  });
  const isLoaded = computed(() => state.value.isLoaded);

  return { boards, isLoaded, favoriteBoards };
};
