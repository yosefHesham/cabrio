<template>
  <div
    @click="toggleIsOpen"
    class="rounded relative bg-inputField cursor-pointer flex items-center mx-auto mb-5 w-11/12 px-3 justify-between h-12"
  >
    <div>
      <p class="text-primary mt-1">{{ title }}</p>
      <p
        :v-show="selectedValue === null"
        :class="[
          'text-primary',
          selectedValue ? 'font-semibold' : 'opacity-50 font-thin',
        ]"
      >
        {{ selectedValue ? selectedValue : subTitle }}
      </p>
    </div>

    <img src="../assets/arrow-down.png" alt="" />

    <div
      v-if="isOpen"
      class="absolute top-14 rounded-md bg-white p-2 w-11/12 z-10"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps({
  selectedValue: String,
  title: String,
  subTitle: String,
  isLocationSelector: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(false);

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
