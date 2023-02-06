<script setup lang="ts">
import IconButton from "@shared/components/IconButton.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
import { ButtonStyle } from "@/shared/components/Button/enums/ButtonStyle";
import type { BoardModel } from "@/App/entities/Board/BoardModel";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="BoardHeader-container">
    <h2 class="BoardHeader-title">{{ board.title }}</h2>

    <IconButton
      class="BoardHeader-delete-button"
      :icon="MaterialIcon.Close"
      :visual-style="ButtonStyle.Error"
      @click="$emit('onRemove')"
    />
  </div>
</template>

<style scoped>
.BoardHeader-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.BoardHeader-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-right: 7px;
}

.BoardHeader-delete-button {
  margin-left: auto;
}
</style>
