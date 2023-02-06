<script setup lang="ts">
import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import PinButton from "@/App/components/PinButton/PinButton.vue";
import DeleteButton from "@/App/components/DeleteButton/DeleteButton.vue";

defineProps<{
  list: TasksListModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
  (e: "onPin"): void;
}>();
</script>

<template>
  <header class="TasksListHeader">
    <PinButton :is-pinned="list.isPinned" @click="$emit('onPin')" />

    <h2 class="TasksListHeader__title">{{ list.title }}</h2>

    <DeleteButton @click="$emit('onRemove')" />
  </header>
</template>

<style scoped>
.TasksListHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TasksListHeader__title {
  margin: 0;
  color: #000;
}
</style>
