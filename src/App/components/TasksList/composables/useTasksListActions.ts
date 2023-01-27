import type { TaskModel } from "../../Task/models/TaskModel";

export const useTasksListActions = () => {
  const remove = () => console.log("Remove TasksList");
  const removeTask = (task: TaskModel) => console.log(`Remove Task ${task.id}`);

  return { remove, removeTask };
};
