import type { Ref } from "vue";
import type { AddItemLayoutState } from "./useAddItemLayoutState";

export const useAddItemLayoutFeatures = (state: Ref<AddItemLayoutState>) => {
  const showForm = () => {
    state.value.isShowForm = true;
  };

  const hideForm = () => (state.value.isShowForm = false);

  return { showForm, hideForm };
};
