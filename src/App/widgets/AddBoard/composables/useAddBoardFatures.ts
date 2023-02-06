import type { AddItemFormValue } from "@/App/components/AddItemForm/models/AddItemFormValue";
import { BoardModel } from "@/App/pages/BoardPage/models/BoardModel";
import type { AddBoardEmitter } from "../AddBoard.vue";

export const useAddBoardFeatures = (emit: AddBoardEmitter) => {
  const add = (formValue: AddItemFormValue, hideForm: () => void) => {
    emit("onAdd", new BoardModel({ title: formValue.text }));
    hideForm();
  };

  return { add };
};
