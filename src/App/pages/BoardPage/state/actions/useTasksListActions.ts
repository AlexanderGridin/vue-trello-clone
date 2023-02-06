import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import type { BoardPageState } from "../models/BoardPageState";
import { useBoardPageActions } from "./useBoardPageActions";

export const useTasksListActions = (state: BoardPageState) => {
  const { syncBoardWithCache } = useBoardPageActions(state);

  const addList = (listToAdd: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: [...state.value.board.lists, listToAdd],
    };

    syncBoardWithCache();
  };

  const removeList = (listToRemove: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: state.value.board.lists.filter(
        (list: TasksListModel) => list.id !== listToRemove.id
      ),
    };

    syncBoardWithCache();
  };

  return { addList, removeList };
};
