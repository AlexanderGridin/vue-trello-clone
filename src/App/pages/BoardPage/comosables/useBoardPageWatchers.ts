import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BoardModel } from "../models/BoardModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import { getBoard } from "@/api/getBoard";

export const useBoardPageWatchers = () => {
  const state = useBoardPageState();
  const route = useRoute();
  const isLoading = ref(true);

  watch(
    () => route.params.boardId,
    async (id: string | string[]) => {
      const cachedBoard = state.getBoardFromCache(id as string);

      if (!cachedBoard) {
        const loadedBoard = await getBoard(id as string);
        const board = new BoardModel({
          id: loadedBoard.id,
          title: loadedBoard.title,
        });

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
