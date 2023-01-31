import { ref } from "vue";

export class AddItemState {
  public isShowForm = false;
}

export const useAddItemState = () => {
  const state = ref(new AddItemState());
  return state;
};
