<script setup lang="ts">
import type { TasksListModel } from "@app/components/TasksList/models/TasksListModel";
import TasksListHeader from "./components/TasksListHeader.vue";
import { useTasksListActions } from "./composables/useTasksListActions";
import Card from "@shared/components/Card/Card.vue";

defineProps<{
  list: TasksListModel;
}>();

const { remove } = useTasksListActions();
</script>

<template>
  <article>
    <Card :show-header="true">
      <template #header>
        <TasksListHeader :list="list" @on-remove="remove" />
      </template>
      <slot />
    </Card>
  </article>
</template>

<style scoped></style>
