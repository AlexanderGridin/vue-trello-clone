import { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import { TaskModel } from "@/App/components/Task/models/TaskModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { AddItemFormValue } from "@/App/components/AddItem/components/AddItemForm/models/AddItemFormValue";

export const useBoardPageActions = () => {
  const state = useBoardPageState();

  const addList = (entity: AddItemFormValue) => {
    state.addList(new TasksListModel({ title: entity.text }));
  };

  const addTaskInList = (list: TasksListModel, entity: AddItemFormValue) => {
    state.addTask(new TaskModel({ listId: list.id, content: entity.text }));
  };

  return { addList, addTaskInList };
};
