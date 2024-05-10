<template>
  <PageHeader />
  <section class="ride-page">
    <div class="rounded-md p-2 bg-white w-[345px] mx-auto mt-5">
      <h3 class="font-semibold text-primary">Book a Ride</h3>

      <div
        class="rounded bg-inputField cursor-pointer flex items-center mx-auto w-11/12 justify-between px-3"
      >
        <div>
          <p class="text-primary mt-1">Ride type</p>
          <p class="text-primary opacity-50 font-thin">
            Select type of this ride
          </p>
        </div>

        <img src="../assets/arrow-down.png" alt="" />
      </div>

      <div class="w-11/12">
        <label class="relative cursor-pointer select-none"
          >This ride book for another person
          <input
            type="checkbox"
            checked="checked"
            class="absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <span
            class="absolute top-0 left-0 h-[25px] w-[25px] bg-checkbox"
          ></span>
        </label>
      </div>
      <div class="flex justify-between w-11/12 mx-auto items-center">
        <p class="text-xs">Payment Method</p>
        <div class="flex items-center">
          <p class="text-xs font-semibold">Balance.SAR 20,450,00</p>
          <img
            src="../assets/arrow-down.png"
            alt=""
            class="transform -rotate-90"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
</script>

<style scoped>
.ride-page {
  width: 100%;
  height: 90vh;
  background: url("../assets/map.png") no-repeat top center;
  background-size: cover;
  z-index: 5;
}
</style>
