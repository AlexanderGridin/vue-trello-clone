<script setup lang="ts">
import BoardPageCell from "@app/pages/BoardPage/components/BoardPageCell.vue";
import TasksList from "@app/widgets/TasksList/TasksList.vue";
import AppPageLayout from "@app/components/AppPageLayout/AppPageLayout.vue";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import AddItem from "@/App/components/AddItem/AddItem.vue";
import { useBoardPageFeatures } from "./comosables/useBoardPageFeatures";
import { useBoardPageWatchers } from "./comosables/useBoardPageWatchers";

const state = useBoardPageState();
const { addList, addTaskInList } = useBoardPageFeatures(state.board);
const { isLoading } = useBoardPageWatchers();
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <h2 class="title">{{ state.board.title }}</h2>
    </template>

    <template #content>
      <div class="content">
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
.title {
  margin: 0;
  text-align: center;
  line-height: 1.3;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
