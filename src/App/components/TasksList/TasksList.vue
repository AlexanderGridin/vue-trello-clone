<script setup lang="ts">
import type { TasksListModel } from "@app/components/TasksList/models/TasksListModel";
import TasksListHeader from "./components/TasksListHeader.vue";
import { useTasksListActions } from "./composables/useTasksListActions";
import Card from "@shared/components/Card/Card.vue";
import Task from "@app/components/Task/Task.vue";

defineProps<{
  list: TasksListModel;
  showChildren?: boolean;
}>();

const { remove, removeTask } = useTasksListActions();
</script>

<template>
  <article>
    <Card :show-header="true" :show-content="true" :show-footer="showChildren">
      <template #header>
        <TasksListHeader :list="list" @on-remove="remove" />
      </template>

      <template #content>
        <ul class="plain-list">
          <li v-for="task in list.tasks" :key="task.id" class="TasksList--item">
            <Card background-color="#FFF">
              <Task @on-remove="removeTask(task)">{{ task.content }}</Task>
            </Card>
          </li>
        </ul>
      </template>

      <template #footer>
        <slot />
      </template>
    </Card>
  </article>
</template>

<style scoped>
.TasksList--item {
  margin-bottom: 7px;
}
</style>
