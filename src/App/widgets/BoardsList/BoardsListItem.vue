<script setup lang="ts">
import { useDragAndDropState } from "@/App/drag-and-drop/useDragAndDropState";
import type { BoardModel } from "@/App/entities/Board/BoardModel";
import { useDragAndDrop } from "@/App/drag-and-drop/useDragAndDrop";
import { useBoardsPageFeatures } from "@app/pages/BoardsPage/composables/useBoardsPageFeatures";
import Card from "@/shared/components/Card/Card.vue";
import Board from "../Board/Board.vue";
import { useBoardsPageState } from "@/App/pages/BoardsPage/state/useBoardsPageState";
import { computed } from "vue";

export interface BoardsListItemProps {
  board: BoardModel;
}

const props = defineProps<BoardsListItemProps>();

const pageState = useBoardsPageState();
const dndState = useDragAndDropState();
const { removeBoard, navigateToBoardPage, toggleBoardFavorite } =
  useBoardsPageFeatures();

const { elementRef } = useDragAndDrop({
  onDragStart: () => {
    dndState.setDragedItem(props.board);
  },

  onDragEnter: () => {
    if (!dndState.draggedItem || dndState.draggedItem?.id === props.board.id) {
      return;
    }

    pageState.moveBoard(dndState.draggedItem, props.board);
  },

  onDragEnd: () => {
    dndState.setDragedItem(null);
  },
});

const cardClass = computed(() => {
  if (!dndState.draggedItem) {
    return "BoardsListItem";
  }

  return `BoardsListItem ${
    dndState.draggedItem.id === props.board.id ? "dragging" : ""
  }`;
});
</script>

<template>
  <div ref="elementRef">
    <Card
      :class="cardClass"
      draggable="true"
      @dblclick="navigateToBoardPage(board)"
    >
      <Board
        :board="board"
        @on-favorite="toggleBoardFavorite(board)"
        @on-remove="removeBoard(board)"
      />
    </Card>
  </div>
</template>

<style scoped>
.BoardsListItem {
  height: 150px;
}

.BoardsListItem:hover {
  cursor: pointer;
}
</style>
