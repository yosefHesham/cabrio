<template>
  <div
    class="fixed w-full z-10 top-0 flex justify-center items-center bg-primary bg-opacity-40 h-full"
  >
    <div class="bg-white w-3/4 rounded-lg p-4">
      <div class="text-start">
        <img src="../assets/close.png" @click="handleShowModal" />
        <p class="text-md font-bold mt-4 mb-2">Select Location</p>
      </div>

      <div class="relative">
        <img src="../assets/second-map.png" />
        <div
          class="absolute top-2 left-6 w-11/12 bg-white rounded p-2 flex gap-4 items-center mx-auto"
        >
          <img src="../assets/map-pin.png" class="h-5" />
          <p>6995 Uthman Ibn Affan Rd, 4636, An Narjis, Riyadh 13324</p>
        </div>
        <img src="../assets/map-pin.png" class="absolute top-1/2 left-1/2" />
      </div>

      <div class="w-full px-4 pb-3 mt-4">
        <button
          class="bg-primary text-white font-bold w-full px-3 py-1 rounded-md"
          @click="
            handleSelectLocation(
              '6995 Uthman Ibn Affan Rd, 4636, An Narjis, Riyadh 13324'
            )
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
