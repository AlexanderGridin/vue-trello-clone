import type { BoardPageState } from "../models/BoardPageState";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export const useBoardPageActions = (state: BoardPageState) => {
  const setBoard = (board: BoardModel) => (state.value.board = board);

  return { setBoard };
};
