<template>
  <section role="wrapper">
    <PageHeader :showPopOver="handleProfilePopOver" />
    <section class="ride-page bg-fixed pt-4 relative">
      <LocationModal
        v-if="isFromOpened"
        :handleShowModal="handleFromModal"
        :handleSelectLocation="handleSetLocation"
      />

      <LocationModal
        v-if="isToOpened"
        :handleShowModal="handleToModal"
        :handleSelectLocation="handleSetLocation"
      />

      <section
        class="h-full w-[345px] mx-auto lg:w-[418px] lg:ml-[13%] rounded-xl bg-white"
      >
        <div class="overflow-y-scroll rounded-md p-2 h-5/6">
          <h3 class="font-semibold ml-4 mb-2 mt-4 text-primary">Book a Ride</h3>

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

          <CustomCheckBox
            name="for-another-person"
            label="This ride is for another person"
            class="mb-5"
          />

          <!-- from airports location -->

          <CustomTextField
            v-if="!isFromAirPort"
            @click="handleFromModal"
            :value="location"
            name="From"
            icon="../assets/map-pin.png"
          >
            <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
          </CustomTextField>

          <!-- from location dropdown -->
          <CustomDropDown
            title="From"
            :value="location"
            :selectedValue="selectedFromAirport?.airport"
            subTitle="Select Airport"
            v-if="isFromAirPort"
          >
            <div
              @click="selectFromAirport(airport)"
              :selectedValue="selectedFromAirport?.airport"
              v-for="(airport, index) in Airports"
              :key="index"
              class="hover:bg-primary hover:text-white hover:rounded flex flex-col justify-center p-2"
              :class="[
                selectedFromAirport?.city === airport.city
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
            :value="location"
            icon="../assets/map-pin.png"
            @click="handleToModal"
          >
            <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
          </CustomTextField>

          <!-- to drop down -->
          <CustomDropDown
            title="To"
            :selectedValue="selectedToAirport?.airport"
            subTitle="Select Airport"
            v-if="isToAirport"
          >
            <div
              @click="selectToAirport(airport)"
              :selectedValue="selectedToAirport?.airport"
              v-for="(airport, index) in Airports"
              :key="index"
              class="hover:bg-primary hover:text-white hover:rounded flex flex-col justify-center p-2"
              :class="[
                selectedToAirport?.city === airport.city
                  ? 'bg-primary text-white rounded'
                  : '',
              ]"
            >
              <div class="hover:text-white py-2">
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

          <CustomTextField name="Flight number"> </CustomTextField>

          <section class="p-2">
            <h2 class="font-semibold ml-5 mb-2">Select Car Class</h2>
            <div class="lg:hidden">
              <CarSlider :itemsToShow="1.5" />
            </div>
            <div class="lg:block hidden">
              <CarSlider :itemsToShow="2.015" />
            </div>
          </section>

          <section class="p-2">
            <p class="text-end text-lightgrey text-sm font-normal">Fees</p>
            <div class="flex flex-col gap-4">
              <div class="flex justify-evenly items-center m-0">
                <CustomCheckBox name="name-board" label="Name Board">
                  <img src="../assets/info-circle.png" />
                </CustomCheckBox>
                <p class="text-sm font-medium whitespace-nowrap">SAR 0.0</p>
              </div>
              <div class="flex justify-evenly items-center">
                <CustomCheckBox name="child-seat" label="Child Seat" />
                <p class="text-sm font-medium whitespace-nowrap">SAR 180.0</p>
              </div>
              <div class="flex justify-evenly items-center">
                <CustomCheckBox name="tanfithi" label="Altanfithi Access" />
                <p class="text-sm font-medium whitespace-nowrap">SAR 2000.0</p>
              </div>
              <div class="flex justify-evenly items-center">
                <CustomCheckBox
                  name="additional"
                  label="Additional car for luggages "
                >
                  <img src="../assets/info-circle.png" />
                </CustomCheckBox>
                <p class="text-sm font-medium whitespace-nowrap">SAR 150.0</p>
              </div>
            </div>

            <div class="mx-auto rounded-lg mt-5 bg-inputField p-2">
              <p class="text-primary text-xs">A Special Comment</p>
              <textarea
                wrap="hard"
                class="w-full bg-inputField mx-auto"
                maxlength="150"
                name="textarea"
                rows="3"
                placeholder="Luggage information, special needs or tasks for driver"
              />
            </div>

            <section class="Summary p-2">
              <h2 class="font-bold mb-2">Summary</h2>
              <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                  <p>Services cost</p>
                  <p class="text-sm font-medium whitespace-nowrap">SAR 180.0</p>
                </div>
                <div class="flex justify-between">
                  <p>Additions fees</p>
                  <p class="text-sm font-medium whitespace-nowrap">
                    SAR 2000.0
                  </p>
                </div>
                <div class="flex justify-between">
                  <p>Vat</p>
                  <p class="text-sm font-medium whitespace-nowrap">SAR 100.0</p>
                </div>
                <div class="flex justify-between font-bold">
                  <p>Total</p>
                  <p class="text-sm font-medium whitespace-nowrap">SAR 180.0</p>
                </div>
              </div>
            </section>
          </section>
        </div>
        <section class="mt-2 payment rounded-br-lg rounded-bl-lg p-2">
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

          <div class="w-full px-4 pb-3 mt-4">
            <button
              class="bg-primary text-white font-bold w-full px-3 py-1 rounded-md"
            >
              Submit
            </button>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import CustomDropDown from "@/components/CustomDropDown.vue";
import CustomTextField from "@/components/CustomTextField.vue";
import CustomDatePicker from "@/components/CustomDatePicker.vue";
import CarSlider from "@/components/CarSlider.vue";
import CustomCheckBox from "@/components/CustomCheckBox.vue";
import LocationModal from "../Modals/LocationModal.vue";
import { Airports } from "../data";
import { computed, ref } from "vue";

const rideTypes = [
  "Airport Pickup",
  "Airport Drop-off",
  "For a Day",
  "By Hours",
];

let selectedRideType = ref(null);

const isFromOpened = ref(false);

const isToOpened = ref(false);

const handleFromModal = () => {
  isFromOpened.value = !isFromOpened.value;
};

const handleToModal = () => {
  isToOpened.value = !isToOpened.value;
};

const location = ref("");

const handleSetLocation = (newLocation) => {
  location.value = newLocation;
};

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

textarea::placeholder {
  color: black;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 300;
}

.payment {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
}
</style>
