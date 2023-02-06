<script setup lang="ts">
import User from "@app/components/User/User.vue";
import AppNavigation from "@app/components/AppNavigation/AppNavigation.vue";
import { useCurrentDate } from "@app/composables/useCurrentDate";

const date = useCurrentDate();
</script>

<template>
  <div class="AppSidebar">
    <div class="AppSidebar-header">
      <User />
    </div>

    <div class="AppSidebar-content">
      <AppNavigation />
    </div>

    <div class="AppSidebar-footer">
      <div :style="{ textAlign: 'center' }">{{ date }}</div>
    </div>
  </div>
</template>

<style scoped>
.AppSidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.AppSidebar-header,
.AppSidebar-footer {
  padding: 25px;
}

.AppSidebar-header {
  border-bottom: 1px solid #4c566a;
}

.AppSidebar-content {
  padding: 25px 0;
  flex-grow: 1;
}

.AppSidebar-footer {
  border-top: 1px solid #4c566a;
}
</style>
