<script setup lang="ts">
import AddItemLayout from "@app/components/AddItemLayout/AddItemLayout.vue";
import AddButton from "@/App/components/AddButton/AddButton.vue";
import AddItemForm from "@/App/components/AddItemForm/AddItemForm.vue";
import { useAddBoardFeatures } from "./composables/useAddBoardFatures";
import type { BoardModel } from "@/App/entities/Board/BoardModel";

export interface AddBoardEmitter {
  (e: "onAdd", board: BoardModel): void;
}

const emit = defineEmits<AddBoardEmitter>();
const { add } = useAddBoardFeatures(emit);
</script>

<template>
  <AddItemLayout>
    <template #button="{ isShowForm, showForm }">
      <AddButton
        v-if="!isShowForm"
        align-content="center"
        :min-height="150"
        @click="showForm"
      >
        <span class="text-light"> + Add board </span>
      </AddButton>
    </template>

    <template #form="{ isShowForm, hideForm }">
      <AddItemForm
        v-if="isShowForm"
        placeholder="Enter board title"
        @on-submit="(formValue) => add(formValue, hideForm)"
        @on-cancel="hideForm"
      />
    </template>
  </AddItemLayout>
</template>

<style scoped></style>
