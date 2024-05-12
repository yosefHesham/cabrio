<template>
  <div class="mx-auto mb-5 w-11/12">
    <div
      @click="toggleIsOpen"
      class="rounded relative mb-1 bg-inputField cursor-pointer flex items-center mx-auto px-3 justify-between h-12"
    >
      <div>
        <label class="text-primar blocks mt-1 text-xs">{{ title }}</label>

        <input
          class="rounded outline-none border-none w-full inline-block bg-inputField"
          :placeholder="subTitle"
          name="rideType"
          :value="inputValue"
          @blur="handleBlur"
        />
      </div>

      <img src="../assets/arrow-down.png" alt="" />

      <div
        v-if="isOpen"
        class="absolute top-14 rounded-md bg-white p-2 w-11/12 z-10"
      >
        <slot></slot>
      </div>
    </div>
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, toRef } from "vue";
import { useField } from "vee-validate";
const props = defineProps({
  title: String,
  name: String,
  subTitle: String,
});

const name = toRef(props, "name");

const {
  errorMessage,
  handleBlur,
  value: inputValue,
} = useField(name, undefined, {
  initialValue: props.value,
});
const isOpen = ref(false);

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
