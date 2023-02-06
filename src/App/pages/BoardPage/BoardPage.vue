<script setup lang="ts">
import BoardPageCell from "@app/pages/BoardPage/components/BoardPageCell.vue";
import TasksList from "@app/widgets/TasksList/TasksList.vue";
import AppPageLayout from "@app/components/AppPageLayout/AppPageLayout.vue";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import { useBoardPageFeatures } from "./comosables/useBoardPageFeatures";
import { useBoardPageWatchers } from "./comosables/useBoardPageWatchers";
import AddTask from "@/App/widgets/AddTask/AddTask.vue";
import AddTasksList from "@/App/widgets/AddTasksList/AddTasksList.vue";
import AppPageTitle from "@/App/components/AppPageTitle/AppPageTitle.vue";

const state = useBoardPageState();
const { addList, addTaskInList, togglePinList } = useBoardPageFeatures(
  state.board
);
const { isLoading } = useBoardPageWatchers();
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <AppPageTitle>{{ state.board.title }}</AppPageTitle>
    </template>

    <template #content>
      <div class="BoardPage__content">
        <BoardPageCell v-for="list in state.boardLists" :key="list.id">
          <TasksList
            :list="list"
            :show-children="true"
            @on-pin="togglePinList(list)"
          >
            <AddTask @on-add="(task) => addTaskInList(task, list)" />
          </TasksList>
        </BoardPageCell>

        <BoardPageCell>
          <AddTasksList @on-add="addList" />
        </BoardPageCell>
      </div>
    </template>
  </AppPageLayout>
</template>

<style scoped>
.BoardPage__content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
