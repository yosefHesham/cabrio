<template>
  <div class="mb-5 mx-auto w-11/12">
    <div
      class="rounded cursor-pointer mb-1 relative bg-inputField items-center px-3 h-12 py-1 overflow-hidden"
    >
      <label :for="name" class="block text-xs cursor-pointer">{{
        title
      }}</label>
      <input
        class="rounded outline-none border-none w-full inline-block bg-inputField"
        :value="inputValue"
        :name="name"
        @blur="handleBlur"
        @change="handleChange"
        :v-model="value"
      />

      <slot />
    </div>

    <p class="text-red-600 mx-auto" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: String,
  icon: String,
  title: String,
  value: String,
});
const name = toRef(props, "name");
const {
  errorMessage,
  handleBlur,
  handleChange,
  value: inputValue,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
p {
  margin: 0;
}
</style>
