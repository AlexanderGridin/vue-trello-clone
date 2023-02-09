import { onBeforeUnmount, onMounted, ref } from "vue";
import { useDragAndDropState } from "./useDragAndDropState";

interface Config {
  onDragStart?: () => void;
  onDragEnter?: () => void;
  onDragEnd?: () => void;
}

export const useDragAndDrop = ({
  onDragStart,
  onDragEnd,
  onDragEnter,
}: Config) => {
  const elementRef = ref<HTMLDivElement | null>(null);
  const offset = { x: 0, y: 0 };
  const state = useDragAndDropState();

  const dragStart = (e: DragEvent) => {
    if (!elementRef.value) {
      return;
    }

    const { left, top } = elementRef.value.getBoundingClientRect();
    offset.x = e.clientX - (left ?? 0);
    offset.y = e.clientY - (top ?? 0);

    state.setPreviewPositon(e.clientX - offset.x, e.clientY - offset.y);

    if (e.dataTransfer) {
      e.dataTransfer.setData("text", "drag");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setDragImage(new Image(), 0, 0);
    }

    onDragStart?.();
  };

  const dragEnd = (e: DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.clearData();
    }

    onDragEnd?.();
  };

  const dragEnter = (e: DragEvent) => {
    e.preventDefault();
    onDragEnter?.();
  };

  const dragover = (e: DragEvent) => {
    e.preventDefault();
  };

  const drag = ({ clientX, clientY }: DragEvent) => {
    if (clientX === 0 || clientY === 0) {
      return;
    }

    state.setPreviewPositon(clientX - offset.x, clientY - offset.y);

    console.log("drag");
  };

  onMounted(() => {
    if (!elementRef.value) {
      return;
    }

    elementRef.value.addEventListener("dragstart", dragStart);
    elementRef.value.addEventListener("dragend", dragEnd);
    elementRef.value.addEventListener("dragenter", dragEnter);
    elementRef.value.addEventListener("dragover", dragover);
    elementRef.value.addEventListener("drag", drag);
    console.log("onMounted from hook");
  });

  onBeforeUnmount(() => {
    if (!elementRef.value) {
      return;
    }

    elementRef.value.removeEventListener("dragstart", dragStart);
    elementRef.value.removeEventListener("dragend", dragEnd);
    elementRef.value.removeEventListener("dragenter", dragEnter);
    elementRef.value.removeEventListener("dragover", dragover);
    elementRef.value.removeEventListener("drag", drag);

    console.log("onBeforeUnmount from hook");
  });

  return { elementRef };
};
