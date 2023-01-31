<script setup lang="ts">
import { ref, onMounted } from "vue";

export interface ItemFormProps {
  text: string;
  placeholder?: string;
}

export interface ItemFormEmits {
  (e: "update:title"): void;
}

defineProps<ItemFormProps>();
defineEmits<ItemFormEmits>();

const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value?.focus();
});
</script>

<template>
  <div class="ItemForm">
    <input
      class="ItemForm--input"
      type="text"
      id="title"
      name="title"
      ref="inputRef"
      :placeholder="placeholder"
      :value="text"
      @change="$emit('update:text', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.ItemForm {
  display: flex;
  flex-direction: column;
}

.ItemForm--input {
  border: 2px solid #d8dee9;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 16px;
  transition: all 0.4s;
}

.ItemForm--input:hover,
.ItemForm--input:focus {
  outline: none;
  border: 2px solid #81a1c1;
}
</style>
