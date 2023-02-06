<script setup lang="ts">
import type { BoardModel } from "@/App/entities/Board/BoardModel";
import DeleteButton from "@/App/components/DeleteButton/DeleteButton.vue";
import FavoriteButton from "@/App/components/FavoriteButton/FavoriteButton.vue";

defineProps<{
  board: BoardModel;
}>();

defineEmits<{
  (e: "onFavorite"): void;
  (e: "onRemove"): void;
}>();
</script>

<template>
  <div class="BoardHeader__container">
    <FavoriteButton
      class="BoardHeader__favorite-button"
      :is-favorite="board.isFavorite"
      @click="$emit('onFavorite')"
    />

    <h2 class="BoardHeader__title">{{ board.title }}</h2>

    <DeleteButton
      class="BoardHeader__delete-button"
      @click="$emit('onRemove')"
    />
  </div>
</template>

<style scoped>
.BoardHeader__favorite-button {
  position: relative;
  top: -3px;
  margin-right: 15px;
}

.BoardHeader__container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.BoardHeader__title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-right: 7px;
}

.BoardHeader__delete-button {
  margin-left: auto;
}
</style>
