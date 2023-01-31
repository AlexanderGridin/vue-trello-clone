import type { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import type { BoardPageState } from "../models/BoardPageState";

export const useTasksListActions = (state: BoardPageState) => {
  const addList = (list: TasksListModel) => state.value.lists.push(list);

  const removeList = (list: TasksListModel) =>
    (state.value.lists = state.value.lists.filter(
      ({ id }: TasksListModel) => id !== list.id
    ));

  return { addList, removeList };
};
