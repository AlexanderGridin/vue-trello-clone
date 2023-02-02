<script setup lang="ts">
import IconButton from "@shared/components/IconButton.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
import { ButtonStyle } from "@/shared/components/Button/enums/ButtonStyle";
import type { BoardModel } from "@/App/pages/BoardPage/models/BoardModel";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="container">
    <h2 class="title">{{ board.title }}</h2>

    <IconButton
      class="button"
      :icon="MaterialIcon.Close"
      :visual-style="ButtonStyle.Error"
      @click="$emit('onRemove')"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-right: 7px;
}

.button {
  margin-left: auto;
}
</style>
