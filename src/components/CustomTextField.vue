<template>
  <div
    class="rounded cursor-pointer relative bg-inputField items-center mx-auto w-11/12 px-3 h-12 mb-5 py-1 overflow-hidden"
  >
    <label :for="name" class="block text-xs cursor-pointer">{{ name }}</label>
    <input
      class="rounded outline-none border-none w-full inline-block bg-inputField"
      :value="value"
    />

    <slot />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  icon: String,
  value: String,
});
</script>
