<script setup lang="ts">
import type { BoardModel } from "@/App/entities/Board/BoardModel";
import { useBoardsPageFeatures } from "@app/pages/BoardsPage/composables/useBoardsPageFeatures";
import AddBoard from "@app/widgets/AddBoard/AddBoard.vue";
import BoardsListItem from "./BoardsListItem.vue";

export interface BoardsListProps {
  boards: BoardModel[];
  isShowAddBoard?: boolean;
}

defineProps<BoardsListProps>();

const { addBoard } = useBoardsPageFeatures();
</script>

<template>
  <div class="BoardsList__container" v-if="boards.length">
    <div class="BoardsList__cell" v-for="board in boards" :key="board.id">
      <BoardsListItem :board="board" />
    </div>

    <div class="BoardsList__cell" v-if="isShowAddBoard">
      <AddBoard @on-add="addBoard" />
    </div>
  </div>
</template>

<style scoped>
.BoardsList__container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.BoardsList__cell {
  width: 300px;
  margin: 7px;
}
</style>
