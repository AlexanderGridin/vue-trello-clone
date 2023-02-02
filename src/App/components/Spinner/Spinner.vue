<script setup lang="ts"></script>

<template>
  <div class="Spinner"><div class="Spinner-content"></div></div>
</template>

<style scoped>
.Spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e3440;
}

.Spinner-content {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.Spinner-content:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #5e81ac;
  border-color: #5e81ac transparent #5e81ac transparent;
  animation: spinner-animation 1.2s linear infinite;
}

@keyframes spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
