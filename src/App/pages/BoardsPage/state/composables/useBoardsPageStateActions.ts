import type { BoardsPageState } from "../models/BoardsPageState";
import type { BoardModel } from "@app/entities/Board/BoardModel";
import type { ArrayUtilConfigWithArrayItem } from "@shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "@shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "@shared/utils/array/moveItemBeforeArrayItem";

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

  const updateBoard = (boardToUpdate: BoardModel) => {
    state.value.boards = state.value.boards.map((board: BoardModel) =>
      board.id !== boardToUpdate.id ? { ...board } : { ...boardToUpdate }
    );
  };

  const setIsLoaded = (isLoaded: boolean) => (state.value.isLoaded = isLoaded);

  const moveBoard = (boardToMove: BoardModel, boardToReplace: BoardModel) => {
    const boardToMoveIndex = state.value.boards.findIndex(
      ({ id }: BoardModel) => id === boardToMove.id
    );
    const boardToReplaceIndex = state.value.boards.findIndex(
      ({ id }: BoardModel) => id === boardToReplace.id
    );

    const movingConfig: ArrayUtilConfigWithArrayItem<BoardModel> = {
      array: state.value.boards,
      item: boardToMove,
      arrayItem: boardToReplace,
      uniqueKey: "id",
    };

    const updatedBoards =
      boardToMoveIndex < boardToReplaceIndex
        ? moveItemAfterArrayItem(movingConfig)
        : moveItemBeforeArrayItem(movingConfig);

    state.value.boards = updatedBoards;
  };

  return {
    addBoard,
    removeBoard,
    setBoards,
    setIsLoaded,
    updateBoard,
    moveBoard,
  };
};
