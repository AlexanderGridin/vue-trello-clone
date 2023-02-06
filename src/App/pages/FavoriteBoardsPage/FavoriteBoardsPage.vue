<script setup lang="ts">
import Card from "@/shared/components/Card/Card.vue";
import AppPageLayout from "@/App/components/AppPageLayout/AppPageLayout.vue";
import Board from "@app/widgets/Board/Board.vue";
import { useBoardsPageFeatures } from "@app/pages/BoardsPage/composables/useBoardsPageFeatures";
import { useBoardsPageState } from "@app/pages/BoardsPage/state/useBoardsPageState";
import AppPageTitle from "@app/components/AppPageTitle/AppPageTitle.vue";

const state = useBoardsPageState();
const { removeBoard, navigateToBoardPage, toggleBoardFavorite } =
  useBoardsPageFeatures();
</script>

<template>
  <AppPageLayout>
    <template #header>
      <AppPageTitle>Favorite Boards</AppPageTitle>
    </template>

    <template #content>
      <div class="FavoriteBoardsPage__container">
        <div
          class="FavoriteBoardsPage__cell"
          v-for="board in state.favoriteBoards"
          :key="board.id"
        >
          <Card
            class="FavoriteBoardsPage__board"
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
.FavoriteBoardsPage__container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.FavoriteBoardsPage__cell {
  width: 300px;
  margin: 7px;
}

.FavoriteBoardsPage__board {
  height: 150px;
}

.FavoriteBoardsPage__board:hover {
  cursor: pointer;
}
</style>
