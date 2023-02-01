<script setup lang="ts"></script>

<template>
  <nav class="navigation">
    <ul class="plain-list">
      <li>
        <router-link class="link" to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  border: 1px solid #5e81ac;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  overflow: hidden;
}

.link {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: all 0.4s;
}

.router-link-active,
.link:hover {
  background-color: #5e81ac;
}
</style>
