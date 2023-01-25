<script setup lang="ts">
import type { TasksListModel } from "../../../models/TasksListModel";

defineProps<{
  list: TasksListModel;
}>();

const remove = () => console.log("remove click");
</script>

<template>
  <article class="TasksList">
    <header class="TasksList__header">
      <h2 class="TasksList__title">{{ list.title }}</h2>
      <button type="button" @click="remove">Remove</button>
    </header>
    <slot />
  </article>
</template>

<style>
.TasksList {
  min-height: 40px;
  border-radius: 3px;
  padding: 8px;
  background-color: #ebecf0;
}

.TasksList__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TasksList__title {
  margin: 0;
  color: #000;
}
</style>
