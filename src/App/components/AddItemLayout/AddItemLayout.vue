<script setup lang="ts">
import { useAddItemLayoutFeatures } from "./composables/useAddItemLayoutFeatures";
import { useAddItemLayoutState } from "./composables/useAddItemLayoutState";

const state = useAddItemLayoutState();
const { hideForm, showForm } = useAddItemLayoutFeatures(state);
</script>

<template>
  <slot name="button" v-bind="{ showForm, isShowForm: state.isShowForm }" />
  <slot name="form" v-bind="{ hideForm, isShowForm: state.isShowForm }" />
</template>

<style scoped></style>
