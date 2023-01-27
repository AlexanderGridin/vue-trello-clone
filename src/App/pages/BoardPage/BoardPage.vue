<script setup lang="ts">
import type { BoardModel } from "@app/pages/BoardPage/models/BoardModel";
import BoardPageCell from "@app/pages/BoardPage/components/BoardPageCell.vue";
import TasksList from "@app/components/TasksList/TasksList.vue";
import AppPageLayout from "@app/components/AppPageLayout/AppPageLayout.vue";

export interface BoardProps {
  board: BoardModel;
}

defineProps<BoardProps>();
</script>

<template>
  <AppPageLayout>
    <template #header>
      <h2 class="Board__title">{{ board.title }}</h2>
    </template>

    <template #content>
      <div class="Board__content">
        <BoardPageCell v-for="list in board.lists" :key="list.id">
          <TasksList :list="list"> </TasksList>
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
