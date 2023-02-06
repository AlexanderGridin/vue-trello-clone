import { useRouter } from "vue-router";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";
import { useBoardsPageState } from "../state/useBoardsPageState";
import { useBoardPageState } from "../../BoardPage/state/useBoardPageState";
import type { AddItemFormValue } from "@/App/components/AddItemForm/models/AddItemFormValue";

export const useBoardsPageFeatures = () => {
  const router = useRouter();
  const state = useBoardsPageState();
  const boardPageState = useBoardPageState();

  const navigateToBoardPage = (board: BoardModel) =>
    router.push(`/boards/${board.id}`);

  const removeBoard = (board: BoardModel) => {
    state.removeBoard(board);

    const cachedBoard = boardPageState.getBoardFromCache(board.id);

    if (cachedBoard) {
      boardPageState.removeBoardFromCache(cachedBoard.id);
    }
  };

  const addBoard = (board: BoardModel) => state.addBoard(board);

  return { navigateToBoardPage, removeBoard, addBoard };
};
