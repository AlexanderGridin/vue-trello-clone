<script setup lang="ts">
import AddButton from "../AddButton/AddButton.vue";
import { useAddItemFeatures } from "./composables/useAddItemFeatures";
import AddItemForm from "./components/AddItemForm/AddItemForm.vue";
import type { AddItemFormValue } from "./components/AddItemForm/models/AddItemFormValue";
import { useAddItemState } from "./composables/useAddItemState";

export interface AddItemProps {
  buttonText: string;
  placeholder?: string;
  isDark?: boolean;
}

export interface AddItemEmit {
  (e: "onAdd", entity: AddItemFormValue): void;
}

defineProps<AddItemProps>();
const emit = defineEmits<AddItemEmit>();

const state = useAddItemState();
const { hideForm, showForm, addItem } = useAddItemFeatures(state, emit);
</script>

<template>
  <AddButton v-if="!state.isShowForm" :is-text-dark="isDark" @click="showForm">
    {{ buttonText }}
  </AddButton>

  <AddItemForm
    v-if="state.isShowForm"
    :placeholder="placeholder"
    @on-submit="addItem"
    @on-cancel="hideForm"
  />
</template>

<style scoped></style>
