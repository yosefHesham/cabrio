<template>
  <div
    class="fixed w-full z-10 top-0 flex justify-center items-center bg-primary bg-opacity-40 h-full"
  >
    <div class="bg-white w-96 rounded-lg p-4">
      <div class="text-start mb-4">
        <img
          src="../assets/close.png"
          class="cursor-pointer"
          @click="handleShowModal"
        />
        <p class="text-md font-bold mt-4">Payment Method</p>
        <p class="text-sm font-light">
          Please select payment method for your next request
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex gap-4 cursor-pointer items-center">
          <img src="../assets/empty-wallet.png" class="h-4 w-4" />
          <p class="text-sm font-normal">Company Balance.SAR 20,450.00</p>
        </div>
        <hr class="text-primary opacity-50" />
        <div class="flex gap-4 cursor-pointer items-center">
          <img src="../assets/empty-wallet.png" class="h-4 w-4" />
          <p class="text-sm font-normal">My Wallet.SAR 2,450.0</p>
        </div>
        <hr class="text-primary opacity-50" />
        <div class="flex justify-between cursor-pointer items-center">
          <div class="flex gap-4">
            <img src="../assets/visa.png" class="h-4 w-4" />
            <p class="text-sm font-normal">Visa</p>
          </div>
          <img src="../assets/tick-circle.png" />
        </div>
        <hr class="text-primary opacity-50" />
        <div class="flex gap-4 cursor-pointer items-center">
          <img src="../assets/american-express.png" class="h-4 w-4" />
          <p class="text-sm font-normal">Amex.5736</p>
        </div>
        <hr class="text-primary opacity-50" />
        <div class="flex gap-4 cursor-pointer items-center">
          <img src="../assets/add.png" class="h-4 w-4" />
          <p class="text-sm font-normal">Add Payment Method</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  handleShowModal: Function,
});
</script>
