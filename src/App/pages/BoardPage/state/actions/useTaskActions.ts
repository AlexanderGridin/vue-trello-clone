import type { BoardPageState } from "../models/BoardPageState";
import type { TaskModel } from "@app/entities/Task/TaskModel";
import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import { useBoardPageActions } from "./useBoardPageActions";

export const useTaskActions = (state: BoardPageState) => {
  const { syncBoardWithCache } = useBoardPageActions(state);

  const removeTask = (taskToRemove: TaskModel) => {
    state.value.board = {
      ...state.value.board,
      lists: state.value.board.lists.map((list: TasksListModel) => {
        if (list.id !== taskToRemove.listId) {
          return { ...list };
        }

        return {
          ...list,
          tasks: list.tasks.filter(
            (task: TaskModel) => task.id !== taskToRemove.id
          ),
        };
      }),
    };

    syncBoardWithCache();
  };

  const addTask = (taskToAdd: TaskModel) => {
    state.value.board = {
      ...state.value.board,
      lists: state.value.board.lists.map((list: TasksListModel) => {
        if (list.id !== taskToAdd.listId) {
          return { ...list };
        }

        return {
          ...list,
          tasks: [...list.tasks, taskToAdd],
        };
      }),
    };

    syncBoardWithCache();
  };

  return { removeTask, addTask };
};
