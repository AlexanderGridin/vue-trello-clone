<script setup lang="ts">
import type { BoardModel } from "./models/BoardModel";
import TasksList from "./components/TasksList.vue";
import BoardCell from "./components/BoardCell.vue";

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
      <BoardCell v-for="list in board.lists" :key="list.id">
        <TasksList :list="list"></TasksList>
      </BoardCell>
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
}

.Board__content {
  flex-grow: 1;
  padding: 20px;
}
</style>
