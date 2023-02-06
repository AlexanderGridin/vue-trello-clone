import { useRouter } from "vue-router";
import type { BoardModel } from "@app/entities/Board/BoardModel";
import { useBoardsPageState } from "../state/useBoardsPageState";
import { useBoardPageState } from "../../BoardPage/state/useBoardPageState";

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

  const toggleBoardFavorite = (board: BoardModel) =>
    state.updateBoard(
      board.isFavorite
        ? { ...board, isFavorite: false }
        : { ...board, isFavorite: true }
    );

  return { navigateToBoardPage, removeBoard, addBoard, toggleBoardFavorite };
};
