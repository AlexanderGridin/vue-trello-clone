import { ref } from "vue";

export class AddItemLayoutState {
  public isShowForm = false;
}

export const useAddItemLayoutState = () => {
  const state = ref(new AddItemLayoutState());
  return state;
};
