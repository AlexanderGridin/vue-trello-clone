import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BoardModel } from "@app/entities/Board/BoardModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import { getBoard } from "@/api/getBoard";
import { boards } from "@/static-data/boards";

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
        // const board = new BoardModel({
        //   id: loadedBoard.id,
        //   title: loadedBoard.title,
        // });
        const board =
          boards.find((b: BoardModel) => b.id === id) ?? new BoardModel({});

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
