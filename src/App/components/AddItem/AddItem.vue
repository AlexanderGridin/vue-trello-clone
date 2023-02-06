<script setup lang="ts">
import { useAddItemFeatures } from "./composables/useAddItemFeatures";
import { useAddItemState } from "./composables/useAddItemState";

const state = useAddItemState();
const { hideForm, showForm } = useAddItemFeatures(state);
</script>

<template>
  <slot name="button" v-bind="{ showForm, isShowForm: state.isShowForm }" />
  <slot name="form" v-bind="{ hideForm, isShowForm: state.isShowForm }" />
</template>

<style scoped></style>
