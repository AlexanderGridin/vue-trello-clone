<script setup lang="ts">
import BoardPageCell from "@app/pages/BoardPage/components/BoardPageCell.vue";
import TasksList from "@app/components/TasksList/TasksList.vue";
import AppPageLayout from "@app/components/AppPageLayout/AppPageLayout.vue";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import AddItem from "@/App/components/AddItem/AddItem.vue";
import { useBoardPageActions } from "./comosables/useBoardPageActions";
import { onMounted } from "vue";
import { boards } from "@/static-data/boards";

const state = useBoardPageState();
const { addList, addTaskInList } = useBoardPageActions();

onMounted(() => {
  state.setBoard(boards[0]);
});
</script>

<template>
  <AppPageLayout>
    <template #header>
      <h2 class="Board__title">{{ state.title }}</h2>
    </template>

    <template #content>
      <div class="Board__content">
        <BoardPageCell v-for="list in state.lists" :key="list.id">
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
