<script setup lang="ts">
import AddItemLayout from "@/App/components/AddItemLayout/AddItemLayout.vue";
import AddItemForm from "@/App/components/AddItemForm/AddItemForm.vue";
import AddButton from "@/App/components/AddButton/AddButton.vue";
import type { TasksListModel } from "@/App/entities/TasksList/TasksListModel";
import { useAddTasksListFeatures } from "./composables/useAddTasksListFeatures";

export interface AddTasksListEmitter {
  (e: "onAdd", tasksList: TasksListModel): void;
}

const emit = defineEmits<AddTasksListEmitter>();
const { add } = useAddTasksListFeatures(emit);
</script>

<template>
  <AddItemLayout>
    <template #button="{ isShowForm, showForm }">
      <AddButton v-if="!isShowForm" @click="showForm">
        <span class="text-light"> + Add tasks list </span>
      </AddButton>
    </template>

    <template #form="{ isShowForm, hideForm }">
      <AddItemForm
        v-if="isShowForm"
        placeholder="Enter task"
        @on-submit="(formValue) => add(formValue, hideForm)"
        @on-cancel="hideForm"
      />
    </template>
  </AddItemLayout>
</template>

<style scoped></style>
