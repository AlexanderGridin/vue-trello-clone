<script setup lang="ts">
import Card from "@/shared/components/Card/Card.vue";
import AppPageLayout from "@/App/components/AppPageLayout/AppPageLayout.vue";
import Board from "@/App/components/Board/Board.vue";
import { useBoardsPageFeatures } from "./composables/useBoardsPageFeatures";
import { useBoardsPageState } from "./state/useBoardsPageState";
import AddItem from "@/App/components/AddItem/AddItem.vue";
import { onMounted, ref } from "vue";
import { getBoards } from "@/api/getBoards";
import { BoardModel } from "../BoardPage/models/BoardModel";

const state = useBoardsPageState();
const { addBoard, removeBoard, navigateToBoardPage } = useBoardsPageFeatures();
const isLoading = ref(true);

onMounted(async () => {
  if (state.isLoaded) {
    isLoading.value = false;
    return;
  }

  const loadedBoards = await getBoards();
  const boards = loadedBoards.products
    .slice(0, 6)
    .map((board: any) => new BoardModel({ id: board.id, title: board.title }));

  state.setBoards(boards);
  state.setIsLoaded(true);
  isLoading.value = false;
});
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <h1 class="BoardsPage-title">Boards</h1>
    </template>

    <template #content>
      <div class="BoardsPage-container">
        <div
          class="BoardsPage-cell"
          v-for="board in state.boards"
          :key="board.id"
        >
          <Card class="BoardsPage-board" @dblclick="navigateToBoardPage(board)">
            <Board :board="board" @on-remove="removeBoard(board)" />
          </Card>
        </div>

        <div class="BoardsPage-cell">
          <AddItem
            button-text="+ Add board"
            placeholder="Enter board title"
            @on-add="addBoard"
          />
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<style scoped>
.BoardsPage-title {
  text-align: center;
  color: #fff;
  margin: 0;
  transform: uppercase;
}

.BoardsPage-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.BoardsPage-cell {
  width: 300px;
  margin: 7px;
}

.BoardsPage-board {
  height: 150px;
}

.BoardsPage-board:hover {
  cursor: pointer;
}
</style>
