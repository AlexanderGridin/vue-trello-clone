import { ref } from "vue";
import { defineStore } from "pinia";
import { useBoardPageGetters } from "./getters/useBoardPageGetters";
import { useTasksListActions } from "./actions/useTasksListActions";
import { useTaskActions } from "./actions/useTaskActions";
import { boards } from "@/static-data/boards";
import { BoardModel } from "../models/BoardModel";
import { useBoardPageActions } from "./actions/useBoardPageActions";

export const useBoardPageState = defineStore("BoardPage", () => {
  const state = ref({
    boards,
    board: new BoardModel({}),
  });

  const getters = useBoardPageGetters(state);
  const actions = useBoardPageActions(state);

  const taskListActions = useTasksListActions(state);
  const taskActions = useTaskActions(state);

  return { ...getters, ...actions, ...taskListActions, ...taskActions };
});
