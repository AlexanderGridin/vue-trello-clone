import { ref } from "vue";
import { defineStore } from "pinia";
import { useBoardsPageStateGetters } from "./composables/useBoardsPageStateGetters";
import { useBoardsPageStateActions } from "./composables/useBoardsPageStateActions";

export const useBoardsPageState = defineStore("BoardsPage", () => {
  const state = ref({
    boards: [],
    isLoaded: false,
  });

  const getters = useBoardsPageStateGetters(state);
  const actions = useBoardsPageStateActions(state);

  return { ...getters, ...actions };
});
