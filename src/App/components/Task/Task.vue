<script setup lang="ts">
import IconButton from "@shared/components/IconButton.vue";
import { ButtonStyle } from "@/shared/components/Button/enums/ButtonStyle";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";

defineEmits<{
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="Task">
    <div class="Task--content"><slot /></div>
    <IconButton
      :icon="MaterialIcon.Close"
      :visual-style="ButtonStyle.Error"
      @on-click="$emit('onRemove')"
    />
  </div>
</template>

<style scoped>
.Task {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Task--content {
  margin-right: 7px;
}
</style>
