<script setup lang="ts">
import Icon from "@/shared/components/Icon/Icon.vue";
import { MaterialIcon } from "@/shared/components/Icon/enums/MaterialIcon";
</script>

<template>
  <nav class="AppNavigation">
    <ul class="plain-list">
      <li>
        <router-link class="AppNavigation-link" to="/">
          <Icon :icon="MaterialIcon.Home" class="AppNavigation-icon" />
          Boards
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.AppNavigation {
  border: 1px solid #5e81ac;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.AppNavigation-link {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: all 0.4s;
  font-size: 18px;
}

.AppNavigation-link.router-link-active,
.AppNavigation-link:hover {
  background-color: #5e81ac;
}

.AppNavigation .AppNavigation-icon {
  margin-right: 7px;
  font-size: 24px;
}
</style>
