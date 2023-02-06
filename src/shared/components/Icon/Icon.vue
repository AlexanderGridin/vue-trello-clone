<script setup lang="ts">
import { MaterialIcon } from "./enums/MaterialIcon";

export interface IconProps {
  icon?: MaterialIcon;
}

withDefaults(defineProps<IconProps>(), {
  icon: MaterialIcon.Default,
});
</script>

<template>
  <span class="material-symbols-outlined"> {{ icon }} </span>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  flex-shrink: 0;
}
</style>
