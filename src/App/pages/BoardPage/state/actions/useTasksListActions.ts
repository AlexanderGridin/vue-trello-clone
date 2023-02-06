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

  const pinList = (listToPin: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: state.value.board.lists.filter(
        (list: TasksListModel) => list.id !== listToPin.id
      ),
      pinnedLists: [...state.value.board.pinnedLists, listToPin],
    };
  };

  const unpinList = (listToUnpin: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: [listToUnpin, ...state.value.board.lists],
      pinnedLists: state.value.board.pinnedLists.filter(
        (list: TasksListModel) => list.id !== listToUnpin.id
      ),
    };
  };

  return { addList, removeList, pinList, unpinList };
};
