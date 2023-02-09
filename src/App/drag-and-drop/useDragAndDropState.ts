import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface DragAndDropState {
  draggedItem: any;
  previewPosition: { x: number; y: number };
}

export const useDragAndDropState = defineStore("DragAndDrop", () => {
  const state = ref<DragAndDropState>({
    draggedItem: null,
    previewPosition: {
      x: 0,
      y: 0,
    },
  });

  const draggedItem = computed(() => state.value.draggedItem);
  const previewPosition = computed(() => state.value.previewPosition);

  const setDragedItem = (item: any) => (state.value.draggedItem = item);
  const setPreviewPositon = (x: number, y: number) => {
    state.value.previewPosition.x = x;
    state.value.previewPosition.y = y;
  };

  return { draggedItem, previewPosition, setDragedItem, setPreviewPositon };
});
