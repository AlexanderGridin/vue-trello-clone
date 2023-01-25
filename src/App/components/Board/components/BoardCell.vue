<template>
  <div class="BoardCell">
    <slot />
  </div>
</template>

<style>
.BoardCell {
  width: 300px;
  margin-right: 20px;
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
