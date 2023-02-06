<script setup lang="ts">
import { ButtonType } from "@shared/components/Button/enums/ButtonType";
import Icon from "@/shared/components/Icon/Icon.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
import { computed } from "vue";

export interface FavoriteButtonProps {
  isFavorite?: boolean;
}

const props = defineProps<FavoriteButtonProps>();
const iconCssClass = computed(
  () =>
    `icon FavoriteButton__icon ${
      props.isFavorite ? "FavoriteButton__icon--active" : ""
    }`
);
</script>

<template>
  <button class="plain-button" :type="ButtonType.Button">
    <Icon :icon="MaterialIcon.Star" :class="iconCssClass" />
  </button>
</template>

<style scoped>
.FavoriteButton__icon {
  transition: color 0.4s;
}

.FavoriteButton__icon:hover,
.FavoriteButton__icon--active {
  color: #d08770;
}
</style>
