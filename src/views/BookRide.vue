<template>
  <section>
    <PageHeader />
    <section class="ride-page">
      <div
        class="rounded-md p-2 bg-white w-[345px] mx-auto mt-5 overflow-x-scroll"
      >
        <h3 class="font-semibold text-primary">Book a Ride</h3>

        <CustomDropDown
          :selectedValue="selectedRideType"
          title="Ride type"
          subTitle="Select type of ride"
        >
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

        <CustomTextField
          v-if="!isFromAirPort"
          name="From"
          icon="../assets/map-pin.png"
        >
          <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
        </CustomTextField>

        <CustomDropDown
          title="From"
          :subTitle="
            isFromAirPort
              ? selectedFromAirport
                ? selectedFromAirport.airport
                : 'Select Airport'
              : null
          "
          v-if="isFromAirPort"
        >
          <div
            @click="selectFromAirport(airport)"
            v-for="(airport, index) in Airports"
            :key="index"
            class="hover:bg-primary hover:text-white hover:rounded flex flex-col justify-center px-2"
            :class="[
              selectFromAirport.city === airport.city
                ? 'bg-primary text-white rounded'
                : '',
            ]"
          >
            <div class="hover:text-white py-2">
              <p class="text-lg">{{ airport.city }}</p>
              <p
                class="whitespace-nowrap text-subtitle text-xs hover:text-white"
              >
                {{ airport.airport }}
              </p>
            </div>
          </div>
        </CustomDropDown>

        <!-- to location selector-->

        <CustomTextField
          v-if="!isToAirport"
          name="To"
          icon="../assets/map-pin.png"
        >
          <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
        </CustomTextField>

        <!-- to drop down -->
        <CustomDropDown
          title="To"
          :subTitle="
            isToAirport
              ? selectedToAirport
                ? selectedToAirport.airport
                : 'Select Airport'
              : null
          "
          v-if="isToAirport"
        >
          <div
            @click="selectToAirport(airport)"
            v-for="(airport, index) in Airports"
            :key="index"
            class="hover:bg-primary hover:text-white hover:rounded flex flex-col justify-center px-2"
            :class="[
              selectedToAirport?.city === airport.city
                ? 'bg-primary text-white rounded'
                : '',
            ]"
          >
            <div>
              <p class="text-lg">{{ airport.city }}</p>
              <p
                class="whitespace-nowrap text-subtitle hover:text-white text-xs"
              >
                {{ airport.airport }}
              </p>
            </div>
          </div>
        </CustomDropDown>

        <CustomDatePicker :date="date" :changeDate="handleChangeDate" />

        <section class="p-2">
          <h3>Select Car Class</h3>
          <CarSlider />
        </section>

        <CustomTextField name="Flight number"> </CustomTextField>

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
  </section>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import CustomDropDown from "@/components/CustomDropDown.vue";
import CustomTextField from "@/components/CustomTextField.vue";
import CustomDatePicker from "@/components/CustomDatePicker.vue";
import CarSlider from "@/components/CarSlider.vue";
import { Airports } from "../data";
import { computed, ref } from "vue";

const rideTypes = [
  "Airport Pickup",
  "Airport Drop-off",
  "For a Day",
  "By Hours",
];

let selectedRideType = ref(null);

const selectRideType = (rideType) => {
  selectedRideType.value = rideType;
};

let selectedFromAirport = ref(null);

const selectFromAirport = (fromAirport) => {
  selectedFromAirport.value = fromAirport;
};

let selectedToAirport = ref(null);

const selectToAirport = (toAirport) => {
  selectedToAirport.value = toAirport;
};

const isFromAirPort = computed(() => {
  return selectedRideType.value === "Airport Pickup";
});

const isToAirport = computed(() => {
  return selectedRideType.value === "Airport Drop-off";
});

const date = ref(new Date());

const handleChangeDate = (updatedDate) => {
  console.log("lol");
  date.value = updatedDate;
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
