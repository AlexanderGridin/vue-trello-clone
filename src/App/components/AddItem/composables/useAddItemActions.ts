import type { Ref } from "vue";
import type { AddItemFormValue } from "../components/AddItemForm/models/AddItemFormValue";
import { AddItemEvent } from "../enums/AddItemEvent";
import type { AddItemState } from "./useAddItemState";

// TODO: find how to type 'emit' parameter
export const useAddItemActions = (state: Ref<AddItemState>, emit: any) => {
  const showForm = () => (state.value.isShowForm = true);
  const hideForm = () => (state.value.isShowForm = false);

  const addItem = (entity: AddItemFormValue) => {
    hideForm();
    emit(AddItemEvent.OnAdd, entity);
  };

  return { showForm, hideForm, addItem };
};
