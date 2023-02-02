<script setup lang="ts">
import BoardPageCell from "@app/pages/BoardPage/components/BoardPageCell.vue";
import TasksList from "@app/components/TasksList/TasksList.vue";
import AppPageLayout from "@app/components/AppPageLayout/AppPageLayout.vue";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import AddItem from "@/App/components/AddItem/AddItem.vue";
import { useBoardPageFeatures } from "./comosables/useBoardPageFeatures";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BoardModel } from "./models/BoardModel";
import { useBoardsPageState } from "../BoardsPage/state/useBoardsPageState";

const route = useRoute();
const state = useBoardPageState();
const boardsPageState = useBoardsPageState();
const { addList, addTaskInList } = useBoardPageFeatures(state.board);

const isLoading = ref(true);

watch(
  () => route.params.boardId,
  (id) => {
    const cachedBoard = state.getBoardFromCache(id as string);

    if (!cachedBoard) {
      const board =
        boardsPageState.boards.find((board: BoardModel) => board.id === id) ??
        new BoardModel({});

      state.cacheBoard(board);
      state.setBoard(board);
    } else {
      state.setBoard(cachedBoard);
    }

    isLoading.value = false;
  },
  { immediate: true }
);
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <h2 class="Board__title">{{ state.board.title }}</h2>
    </template>

    <template #content>
      <div class="Board__content">
        <BoardPageCell v-for="list in state.board.lists" :key="list.id">
          <TasksList :list="list" :show-children="true">
            <AddItem
              button-text="+ Add task"
              placeholder="Enter task title"
              :is-dark="true"
              @on-add="(entity) => addTaskInList(list, entity)"
            />
          </TasksList>
        </BoardPageCell>

        <BoardPageCell>
          <AddItem
            button-text="+ Add list"
            placeholder="Enter list title"
            @on-add="addList"
          />
        </BoardPageCell>
      </div>
    </template>
  </AppPageLayout>
</template>

<style scoped>
.Board__title {
  margin: 0;
  text-align: center;
  line-height: 1.3;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
}

.Board__content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
