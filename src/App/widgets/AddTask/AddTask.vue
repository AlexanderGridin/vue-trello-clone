<script setup lang="ts">
import type { TaskModel } from "@app/entities/Task/TaskModel";
import AddItemLayout from "@/App/components/AddItemLayout/AddItemLayout.vue";
import AddItemForm from "@/App/components/AddItemForm/AddItemForm.vue";
import AddButton from "@/App/components/AddButton/AddButton.vue";
import { useAddTaskFeatures } from "./composables/useAddTaskFeatures";

export interface AddTaskEmitter {
  (e: "onAdd", task: TaskModel): void;
}

const emit = defineEmits<AddTaskEmitter>();
const { add } = useAddTaskFeatures(emit);
</script>

<template>
  <AddItemLayout>
    <template #button="{ isShowForm, showForm }">
      <AddButton v-if="!isShowForm" @click="showForm">
        <span class="text-dark"> + Add task </span>
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
