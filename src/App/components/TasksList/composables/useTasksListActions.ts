import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { TaskModel } from "../../Task/models/TaskModel";
import type { TasksListModel } from "../models/TasksListModel";

export const useTasksListActions = () => {
  const { removeList, removeTask } = useBoardPageState();

  const remove = (list: TasksListModel) => removeList(list);
  const removeSelectedTask = (task: TaskModel) => removeTask(task);

  return { remove, removeSelectedTask };
};
