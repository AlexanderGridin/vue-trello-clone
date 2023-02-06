import type { Ref } from "vue";
import type { AddItemState } from "./useAddItemState";

export const useAddItemFeatures = (state: Ref<AddItemState>) => {
  const showForm = () => {
    state.value.isShowForm = true;
  };

  const hideForm = () => (state.value.isShowForm = false);

  return { showForm, hideForm };
};
