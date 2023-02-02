import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BoardModel } from "../models/BoardModel";
import { useBoardsPageState } from "../../BoardsPage/state/useBoardsPageState";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";

export const useBoardPageWatchers = () => {
  const state = useBoardPageState();
  const route = useRoute();
  const boardsPageState = useBoardsPageState();
  const isLoading = ref(true);

  watch(
    () => route.params.boardId,
    (id) => {
      const cachedBoard = state.getBoardFromCache(id as string);

      if (!cachedBoard) {
        const board =
          boardsPageState.boards.find((board: BoardModel) => board.id === id) ??
          new BoardModel({});

        state.cacheBoard(board);
        state.setBoard(board);
      } else {
        state.setBoard(cachedBoard);
      }

      isLoading.value = false;
    },
    { immediate: true }
  );

  return { isLoading };
};
