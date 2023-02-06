import type { AddItemFormValue } from "@/App/components/AddItem/components/AddItemForm/models/AddItemFormValue";
import type { AddBoardEmitter } from "../AddBoard.vue";

export const useAddBoardFeatures = (emit: AddBoardEmitter) => {
  const add = (formValue: AddItemFormValue, hideForm: () => void) => {
    emit("onAdd", formValue);
    hideForm();
  };

  return { add };
};
