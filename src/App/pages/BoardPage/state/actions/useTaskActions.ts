import type { BoardPageState } from "../models/BoardPageState";
import type { TaskModel } from "@/App/components/Task/models/TaskModel";
import type { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";

export const useTaskActions = (state: BoardPageState) => {
  const removeTask = (task: TaskModel) => {
    state.value.lists = state.value.lists.map((list: TasksListModel) => {
      if (list.id !== task.listId) {
        return list;
      }

      return {
        ...list,
        tasks: list.tasks.filter(({ id }: TaskModel) => id !== task.id),
      };
    });
  };

  const addTask = (task: TaskModel) => {
    state.value.lists = state.value.lists.map((list: TasksListModel) => {
      if (list.id !== task.listId) {
        return { ...list };
      }

      return {
        ...list,
        tasks: [...list.tasks, task],
      };
    });
  };

  return { removeTask, addTask };
};
