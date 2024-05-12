<template>
  <div
    class="fixed w-full z-10 top-0 flex justify-center items-center bg-primary bg-opacity-40 h-full"
  >
    <div class="bg-white w-11/12 md:w-2/3 rounded-lg p-4">
      <div class="text-start">
        <img
          src="../assets/close.png"
          class="cursor-pointer"
          @click="handleShowModal"
        />
        <p class="text-md font-bold mt-4 mb-2">Select Location</p>
      </div>

      <div class="relative">
        <img src="../assets/second-map.png" class="w-11/12 mx-auto" />
        <div
          class="absolute top-2 left left-12 w-4/5 bg-white rounded p-2 flex gap-4 items-center mx-auto"
        >
          <img src="../assets/map-pin.png" class="h-5 whitespace-nowrap" />
          <p>6995 Uthman Ibn Affan Rd, 4636, An Narjis, Riyadh 13324</p>
        </div>
        <img src="../assets/map-pin.png" class="absolute top-1/2 left-1/2" />
      </div>

      <div class="w-full px-4 pb-3 mt-4">
        <button
          class="bg-primary text-white font-bold w-full px-3 py-1 rounded-md"
          @click="
            () => {
              handleSelectLocation(
                '6995 Uthman Ibn Affan Rd, 4636, An Narjis, Riyadh 13324'
              );
              handleShowModal();
            }
          "
        >
          Select
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  handleSelectLocation: Function,
  handleShowModal: Function,
});
</script>
