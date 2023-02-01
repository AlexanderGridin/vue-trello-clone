import type { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import type { BoardPageState } from "../models/BoardPageState";

export const useTasksListActions = (state: BoardPageState) => {
  const addList = (listToAdd: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: [...state.value.board.lists, listToAdd],
    };
  };

  const removeList = (listToRemove: TasksListModel) => {
    state.value.board = {
      ...state.value.board,
      lists: state.value.board.lists.filter(
        (list: TasksListModel) => list.id !== listToRemove.id
      ),
    };
  };

  return { addList, removeList };
};
