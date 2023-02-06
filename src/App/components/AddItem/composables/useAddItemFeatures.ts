import type { Ref } from "vue";
import type { AddItemEmit } from "../AddItem.vue";
import type { AddItemFormValue } from "../components/AddItemForm/models/AddItemFormValue";
import type { AddItemState } from "./useAddItemState";

export const useAddItemFeatures = (
  state: Ref<AddItemState>,
  emit: AddItemEmit
) => {
  const showForm = () => (state.value.isShowForm = true);
  const hideForm = () => (state.value.isShowForm = false);

  const addItem = (entity: AddItemFormValue) => {
    hideForm();
    emit("onAdd", entity);
  };

  return { showForm, hideForm, addItem };
};
