import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { TaskModel } from "@app/entities/Task/TaskModel";
import type { TasksListModel } from "../models/TasksListModel";

export const useTasksListFeatures = () => {
  const state = useBoardPageState();

  const removeList = (list: TasksListModel) => state.removeList(list);
  const removeTask = (task: TaskModel) => state.removeTask(task);

  return { removeList, removeTask };
};
