import type { BoardPageState } from "../models/BoardPageState";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export const useBoardPageActions = (state: BoardPageState) => {
  const setBoard = (board: BoardModel) => (state.value.board = board);

  const cacheBoard = (board: BoardModel) =>
    (state.value.boardsCache[board.id] = board);

  const getBoardFromCache = (id: string) => state.value.boardsCache[id];

  const removeBoardFromCache = (id: string) =>
    delete state.value.boardsCache[id];

  const syncBoardWithCache = () =>
    (state.value.boardsCache[state.value.board.id] = state.value.board);

  return {
    setBoard,
    cacheBoard,
    getBoardFromCache,
    removeBoardFromCache,
    syncBoardWithCache,
  };
};
