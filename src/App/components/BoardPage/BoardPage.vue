<script setup lang="ts">
import type { BoardModel } from "@app/components/BoardPage/models/BoardModel";
import TasksList from "@app/components/TasksList/TasksList.vue";
import BoardPageCell from "@app/components/BoardPage/components/BoardPageCell.vue";

export interface BoardProps {
  board: BoardModel;
}

defineProps<BoardProps>();
</script>

<template>
  <div class="Board">
    <div class="Board__header">
      <h2 class="Board__title">{{ board.title }}</h2>
    </div>

    <div class="Board__content">
      <BoardPageCell v-for="list in board.lists" :key="list.id">
        <TasksList :list="list"> </TasksList>
      </BoardPageCell>
    </div>
  </div>
</template>

<style scoped>
.Board {
  width: 100%;
  height: 100%;
  background-color: #292e39;
  position: relative;
  display: flex;
  flex-direction: column;
}

.Board__title {
  margin: 0;
  padding: 7px 20px;
  text-align: center;
  line-height: 1.3;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
}

.Board__content {
  flex-grow: 1;
  padding: 20px;
}
</style>
