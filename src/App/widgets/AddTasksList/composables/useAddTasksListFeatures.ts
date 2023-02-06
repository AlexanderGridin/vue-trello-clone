import type { AddItemFormValue } from "@/App/components/AddItemForm/models/AddItemFormValue";
import { TasksListModel } from "@/App/entities/TasksList/TasksListModel";
import type { AddTasksListEmitter } from "../AddTasksList.vue";

export const useAddTasksListFeatures = (emit: AddTasksListEmitter) => {
  const add = (formValue: AddItemFormValue, hideForm: () => void) => {
    emit("onAdd", new TasksListModel({ title: formValue.text }));
    hideForm();
  };

  return { add };
};
