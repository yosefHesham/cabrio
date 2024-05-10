<template>
  <PageHeader />
  <section class="ride-page">
    <div class="rounded-md p-2 bg-white w-[345px] mx-auto mt-5">
      <h3 class="font-semibold text-primary">Book a Ride</h3>

      <CustomDropDown :selectedValue="selectedRideType" title="Ride type">
        <div
          @click="selectRideType(rideType)"
          v-for="(rideType, index) in rideTypes"
          :key="index"
          class="hover:bg-primary hover:text-white hover:rounded h-10 flex flex-col justify-center px-2"
          :class="[
            selectedRideType === rideType
              ? 'bg-primary text-white rounded'
              : '',
          ]"
        >
          <p class="text-lg">{{ rideType }}</p>
        </div>
      </CustomDropDown>

      <div class="w-11/12 mx-auto mt-2 mb-5">
        <label class="select-none text-sm flex gap-1">
          <span
            class="h-[25px] text-center cursor-pointer w-[25px] rounded bg-checkbox active:bg-white active:border-black active:border-[3px]"
          >
          </span>
          This ride book for another person
          <!-- <input
            type="checkbox"
            checked="checked"
            class="opacity-0 cursor-pointer h-0 w-0"
          /> -->
        </label>
      </div>

      <div
        class="rounded bg-inputField w-11/12 h-12 mx-auto flex justify-evenly items-center gap-12"
      >
        <div
          class="cursor-pointer flex-1 py-1 px-6 border-[3px] border-black rounded-md text-center"
        >
          Pick-up
        </div>
        <div class="cursor-pointer flex-1 select-none">Drop-off</div>
      </div>

      <CustomDropDown title="From">
        <div
          @click="selectRideType(rideType)"
          v-for="(rideType, index) in rideTypes"
          :key="index"
          class="hover:bg-primary hover:text-white hover:rounded h-10 flex flex-col justify-center px-2"
          :class="[
            selectedRideType === rideType
              ? 'bg-primary text-white rounded'
              : '',
          ]"
        >
          <p class="text-lg">{{ rideType }}</p>
        </div>
      </CustomDropDown>
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
import CustomDropDown from "@/components/CustomDropDown.vue";
import { ref } from "vue";

const rideTypes = [
  "Airport Pickup",
  "Airport Drop-off",
  "For a Day",
  "By Hours",
];

let selectedRideType = ref(null);



const selectRideType = (rideType) => {
  console.log(rideType);
  selectedRideType.value = rideType;
};


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
