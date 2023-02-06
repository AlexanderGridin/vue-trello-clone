<script setup lang="ts">
import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import TasksListHeader from "./components/TasksListHeader.vue";
import { useTasksListFeatures } from "./composables/useTasksListFeatures";
import Card from "@shared/components/Card/Card.vue";
import Task from "@app/components/Task/Task.vue";

defineProps<{
  list: TasksListModel;
  showChildren?: boolean;
}>();

const { removeList, removeTask } = useTasksListFeatures();
</script>

<template>
  <article>
    <Card :show-header="true" :show-content="true" :show-footer="showChildren">
      <template #header>
        <TasksListHeader :list="list" @on-remove="removeList(list)" />
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
