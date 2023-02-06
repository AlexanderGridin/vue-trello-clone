<script setup lang="ts"></script>

<template>
  <div class="User">
    <div class="User-avatar"></div>
    <div class="User-name">Test User Name</div>
  </div>
</template>

<style scoped>
.User {
  display: flex;
  align-items: center;
}

.User-avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #5e81ac;
  margin-right: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

.User-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
