import type { AddTaskEmitter } from "../AddTask.vue";
import type { AddItemFormValue } from "@app/components/AddItemForm/models/AddItemFormValue";
import { TaskModel } from "@/App/entities/Task/TaskModel";

export const useAddTaskFeatures = (emit: AddTaskEmitter) => {
  const add = (formValue: AddItemFormValue, hideForm: () => void) => {
    emit("onAdd", new TaskModel({ content: formValue.text }));
    hideForm();
  };

  return { add };
};
