<template>
  <div class="w-11/12 mx-auto mt-2 mb-5">
    <label class="select-none text-sm flex gap-1">
      <span
        class="h-[25px] text-center cursor-pointer w-[25px] rounded bg-checkbox"
        :class="[checked ? 'border-[3px] border-primary bg-white' : '']"
      >
        <img v-if="checked" src="../assets/tick-circle.png" />
      </span>
      {{ label }}
      <input
        type="checkbox"
        :checked="checked"
        class="opacity-0 cursor-pointer h-0 w-0"
        :name="name"
        @click="handleCheckBox"
      />
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  label: String,
  name: String,
});
const checked = ref(false);

const handleCheckBox = () => {
  checked.value = !checked.value;
};
</script>
