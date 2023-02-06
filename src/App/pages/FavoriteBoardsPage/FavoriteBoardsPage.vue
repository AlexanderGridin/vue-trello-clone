<script setup lang="ts">
import Card from "@/shared/components/Card/Card.vue";
import AppPageLayout from "@/App/components/AppPageLayout/AppPageLayout.vue";
import Board from "@app/widgets/Board/Board.vue";
import { useBoardsPageFeatures } from "@app/pages/BoardsPage/composables/useBoardsPageFeatures";
import { useBoardsPageState } from "@app/pages/BoardsPage/state/useBoardsPageState";

const state = useBoardsPageState();
const { removeBoard, navigateToBoardPage, toggleBoardFavorite } =
  useBoardsPageFeatures();
</script>

<template>
  <AppPageLayout>
    <template #header>
      <h1 class="FavoriteBoardsPage-title">Boards</h1>
    </template>

    <template #content>
      <div class="FavoriteBoardsPage-container">
        <div
          class="FavoriteBoardsPage-cell"
          v-for="board in state.favoriteBoards"
          :key="board.id"
        >
          <Card
            class="FavoriteBoardsPage-board"
            @dblclick="navigateToBoardPage(board)"
          >
            <Board
              :board="board"
              @on-favorite="toggleBoardFavorite(board)"
              @on-remove="removeBoard(board)"
            />
          </Card>
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<style scoped>
.FavoriteBoardsPage-title {
  text-align: center;
  color: #fff;
  margin: 0;
  transform: uppercase;
}

.FavoriteBoardsPage-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.FavoriteBoardsPage-cell {
  width: 300px;
  margin: 7px;
}

.FavoriteBoardsPage-board {
  height: 150px;
}

.FavoriteBoardsPage-board:hover {
  cursor: pointer;
}
</style>
