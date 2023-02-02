import type { BoardsPageState } from "../models/BoardsPageState";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export const useBoardsPageStateActions = (state: BoardsPageState) => {
  const setBoards = (boards: BoardModel[]) => (state.value.boards = boards);

  const addBoard = (boardToAdd: BoardModel) => {
    state.value.boards.push(boardToAdd);
  };

  const removeBoard = (boardToRemove: BoardModel) => {
    state.value.boards = state.value.boards.filter(
      (board: BoardModel) => board.id !== boardToRemove.id
    );
  };

  const setIsLoaded = (isLoaded: boolean) => (state.value.isLoaded = isLoaded);

  return { addBoard, removeBoard, setBoards, setIsLoaded };
};
