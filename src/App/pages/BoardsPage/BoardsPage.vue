<script setup lang="ts">
import Card from "@/shared/components/Card/Card.vue";
import AppPageLayout from "@/App/components/AppPageLayout/AppPageLayout.vue";
import Board from "@app/widgets/Board/Board.vue";
import { useBoardsPageState } from "./state/useBoardsPageState";
import { onMounted, ref, computed } from "vue";
import { getBoards } from "@/api/getBoards";
/* import { BoardModel } from "@app/entities/Board/BoardModel"; */
import { boards } from "@/static-data/boards";
import AppPageTitle from "@/App/components/AppPageTitle/AppPageTitle.vue";
import { useDragAndDropState } from "@/App/drag-and-drop/useDragAndDropState";
import BoardsList from "@/App/widgets/BoardsList/BoardsList.vue";

const state = useBoardsPageState();
const isLoading = ref(true);

onMounted(async () => {
  console.log("onMounted from component");
  if (state.isLoaded) {
    isLoading.value = false;
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loadedBoards = await getBoards();
  /* const boards = loadedBoards.products */
  /*   .slice(0, 6) */
  /*   .map((board: any) => new BoardModel({ id: board.id, title: board.title })); */

  state.setBoards(boards);
  console.log(boards);
  state.setIsLoaded(true);
  isLoading.value = false;
});

const dndState = useDragAndDropState();

const ds = computed(() => {
  return {
    transform: `translate(${dndState.previewPosition.x}px , ${dndState.previewPosition.y}px)`,
    width: "300px",
  };
});
</script>

<template>
  <AppPageLayout :is-loading="isLoading">
    <template #header>
      <AppPageTitle>Boards</AppPageTitle>
    </template>

    <template #content>
      <div
        v-if="dndState.draggedItem"
        :style="{
          position: 'fixed',
          zIndex: 999,
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }"
      >
        <div :style="ds">
          <Card class="BoardsPage__board">
            <Board
              :board="dndState.draggedItem"
              @on-favorite="() => {}"
              @on-remove="() => {}"
            />
          </Card>
        </div>
      </div>

      <BoardsList :boards="state.boards" :is-show-add-board="true" />
    </template>
  </AppPageLayout>
</template>

<style scoped>
.BoardsPage__board {
  height: 150px;
}
</style>
