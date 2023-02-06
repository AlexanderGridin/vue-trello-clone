import { ref } from "vue";

export class AddItemLayoutState {
  public isShowForm = false;
}

export const useAddItemLayoutState = () => ref(new AddItemLayoutState());
