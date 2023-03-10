import { ref } from "vue";
import { defineStore } from "pinia";
import { useBoardPageGetters } from "./getters/useBoardPageGetters";
import { useTasksListActions } from "./actions/useTasksListActions";
import { useTaskActions } from "./actions/useTaskActions";
import { BoardModel } from "@app/entities/Board/BoardModel";
import { useBoardPageActions } from "./actions/useBoardPageActions";

export const useBoardPageState = defineStore("BoardPage", () => {
  const state = ref({
    boardsCache: {} as Record<string, BoardModel>,
    board: new BoardModel({}),
  });

  const getters = useBoardPageGetters(state);
  const actions = useBoardPageActions(state);

  const taskListActions = useTasksListActions(state);
  const taskActions = useTaskActions(state);

  return { ...getters, ...actions, ...taskListActions, ...taskActions };
});
