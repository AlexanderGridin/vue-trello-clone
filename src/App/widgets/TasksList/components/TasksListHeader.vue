<script setup lang="ts">
import { ButtonStyle } from "@/shared/components/Button/enums/ButtonStyle";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
import IconButton from "@/shared/components/IconButton.vue";
import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import PinButton from "@/App/components/PinButton/PinButton.vue";

defineProps<{
  list: TasksListModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
  (e: "onPin"): void;
}>();
</script>

<template>
  <header class="TasksListHeader">
    <PinButton :is-pinned="list.isPinned" @click="$emit('onPin')" />

    <h2 class="TasksListHeader__title">{{ list.title }}</h2>

    <IconButton
      :icon="MaterialIcon.Close"
      :visual-style="ButtonStyle.Error"
      @click="$emit('onRemove')"
    />
  </header>
</template>

<style scoped>
.TasksListHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TasksListHeader__title {
  margin: 0;
  color: #000;
}
</style>
