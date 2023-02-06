<script setup lang="ts">
import Card from "@/shared/components/Card/Card.vue";
import AppPageLayout from "@/App/components/AppPageLayout/AppPageLayout.vue";
import Board from "@app/widgets/Board/Board.vue";
import { useBoardsPageFeatures } from "./composables/useBoardsPageFeatures";
import { useBoardsPageState } from "./state/useBoardsPageState";
import { onMounted, ref } from "vue";
import { getBoards } from "@/api/getBoards";
/* import { BoardModel } from "@app/entities/Board/BoardModel"; */
import AddBoard from "@app/widgets/AddBoard/AddBoard.vue";
import { boards } from "@/static-data/boards";
import AppPageTitle from "@/App/components/AppPageTitle/AppPageTitle.vue";

const state = useBoardsPageState();
const { addBoard, removeBoard, navigateToBoardPage, toggleBoardFavorite } =
  useBoardsPageFeatures();
const isLoading = ref(true);

onMounted(async () => {
  if (state.isLoaded) {
    isLoading.value = false;
    return;
  }

  const loadedBoards = await getBoards();
  /* const boards = loadedBoards.products */
  /*   .slice(0, 6) */
  /*   .map((board: any) => new BoardModel({ id: board.id, title: board.title })); */

  state.setBoards(boards);
  state.setIsLoaded(true);
  isLoading.value = false;
});
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <AppPageTitle>Boards</AppPageTitle>
    </template>

    <template #content>
      <div class="BoardsPage__container">
        <div
          class="BoardsPage__cell"
          v-for="board in state.boards"
          :key="board.id"
        >
          <Card
            class="BoardsPage__board"
            @dblclick="navigateToBoardPage(board)"
          >
            <Board
              :board="board"
              @on-favorite="toggleBoardFavorite(board)"
              @on-remove="removeBoard(board)"
            />
          </Card>
        </div>

        <div class="BoardsPage__cell">
          <AddBoard @on-add="addBoard" />
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<style scoped>
.BoardsPage__container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.BoardsPage__cell {
  width: 300px;
  margin: 7px;
}

.BoardsPage__board {
  height: 150px;
}

.BoardsPage__board:hover {
  cursor: pointer;
}
</style>
