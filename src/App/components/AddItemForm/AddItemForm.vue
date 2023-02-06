<script setup lang="ts">
import { ref } from "vue";
import { AddItemFormValue } from "./models/AddItemFormValue";
import { ButtonType } from "@/shared/components/Button/enums/ButtonType";
import Card from "@/shared/components/Card/Card.vue";
import ItemForm from "@app/components/ItemForm/ItemForm.vue";
import Button from "@/shared/components/Button/Button.vue";
import { ButtonStyle } from "@/shared/components/Button/enums/ButtonStyle";

defineProps<{
  placeholder?: string;
}>();

enum AddItemFormEvents {
  OnSubmit = "onSubmit",
  OnCancel = "onCancel",
}

const emit = defineEmits<{
  (e: AddItemFormEvents.OnSubmit, entity: AddItemFormValue): void;
  (e: AddItemFormEvents.OnCancel): void;
}>();

const form = ref(new AddItemFormValue());

const resetForm = () => {
  form.value = new AddItemFormValue();
};

const submitForm = () => {
  emit(AddItemFormEvents.OnSubmit, {
    text: form.value.text,
  });
  resetForm();
};

const cancel = () => {
  emit(AddItemFormEvents.OnCancel);
  resetForm();
};
</script>

<template>
  <Card background-color="#FFF">
    <form action="" @submit.prevent="submitForm">
      <ItemForm v-model:text="form.text" :placeholder="placeholder" />

      <Button
        class="mr"
        :type="ButtonType.Submit"
        :visual-style="ButtonStyle.Success"
      >
        Add
      </Button>
      <Button :visual-style="ButtonStyle.Error" @click="cancel">
        Cancel
      </Button>
    </form>
  </Card>
</template>

<style scoped></style>
