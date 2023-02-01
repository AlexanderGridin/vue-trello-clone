import type { BoardPageState } from "../models/BoardPageState";
import type { TaskModel } from "@/App/components/Task/models/TaskModel";
import type { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";

export const useTaskActions = (state: BoardPageState) => {
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
  };

  return { removeTask, addTask };
};
