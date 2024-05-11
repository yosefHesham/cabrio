<template>
  <div
    class="w-52 cursor-pointer h-60 border rounded-lg border-card mr-2"
    @click="selectCar"
    :class="[isSelected ? 'border-primary border-4' : ' ']"
  >
    <img
      src="../assets/info-circle.png"
      alt="info-mark"
      class="ml-auto mr-5 mt-5"
    />
    <img src="../assets/car.png" class="mx-auto" />

    <div class="px-4 text-start">
      <p class="text-base font-semibold">{{ carClass }}</p>
      <p class="text-sm font-light">{{ carModel }}</p>

      <div class="flex gap-5 mb-5 items-center mt-2">
        <div class="flex gap-2 items-center">
          <img src="../assets/user.png" alt="user" class="h-3 w-3" />
          <p>{{ passengers }}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="../assets/bag.png" alt="bag" class="h-3 w-3" />
          <p>{{ bags }}</p>
        </div>
      </div>
      <p class="font-bold text-base">SAR {{ price }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  carClass: String,
  carModel: String,
  passengers: String,
  bags: String,
  price: String,
  selectCar: Function,
  selectedCar: Object,
  id: String,
  isSelected: Boolean,
});
</script>
