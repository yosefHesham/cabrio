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

      <PaymentModal
        v-if="showPaymentModal"
        :handleShowModal="handlePaymentModal"
      />

      <form
        :validation-schema="schema"
        @submit="onSubmit"
        @invalid-submit="
          (e) => {
            console.log('error', e);
          }
        "
        class="h-full w-[345px] mx-auto lg:w-[418px] lg:ml-[13%] rounded-xl bg-white"
      >
        <div class="overflow-y-scroll rounded-md p-2 h-5/6">
          <h3 class="font-semibold ml-4 mb-2 mt-4 text-primary">Book a Ride</h3>
          <div>
            <CustomDropDown
              title="Ride type"
              name="rideType"
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
          </div>

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
            title="From"
            name="from"
            icon="../assets/map-pin.png"
          >
            <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
          </CustomTextField>

          <!-- from location dropdown -->
          <CustomDropDown
            title="From"
            name="from"
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
            title="To"
            name="to"
            :value="location"
            icon="../assets/map-pin.png"
            @click="handleToModal"
          >
            <img src="../assets/map-pin.png" class="absolute top-1/4 right-2" />
          </CustomTextField>

          <!-- to drop down -->
          <CustomDropDown
            title="To"
            name="to"
            subTitle="Select Airport"
            v-if="isToAirport"
          >
            <div
              @click="selectToAirport(airport)"
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

          <CustomTextField title="Flight number" name="flightNumber" />

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
            <FeesSection />
            <div class="mx-auto rounded-lg mt-5 bg-inputField p-2">
              <p class="text-primary text-xs">A Special Comment</p>
              <textarea
                wrap="hard"
                class="w-full bg-inputField mx-auto"
                maxlength="150"
                name="specialComment"
                rows="3"
                placeholder="Luggage information, special needs or tasks for driver"
              />
            </div>

            <SummarySection />
          </section>
        </div>
        <section class="mt-2 payment rounded-br-lg rounded-bl-lg p-2">
          <div
            class="flex justify-between w-11/12 mx-auto items-center"
            @click="handlePaymentModal"
          >
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
              type="submit"
              class="bg-primary text-white font-bold w-full px-3 py-1 rounded-md"
              :class="[!meta.valid ? 'bg-gray-500' : '']"
              :disabled="!meta.valid"
            >
              Submit
            </button>
          </div>
        </section>
      </form>
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
import PaymentModal from "@/Modals/PaymentModal.vue";
import FeesSection from "@/components/FeesSection.vue";
import { Airports } from "../data";
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import { schema } from "@/formSchema";

const { handleSubmit, setFieldValue, meta } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(() => {
  handlePaymentModal();
});
const rideTypes = [
  "Airport Pickup",
  "Airport Drop-off",
  "For a Day",
  "By Hours",
];

let selectedRideType = ref(null);

const showPaymentModal = ref(false);

const handlePaymentModal = () => {
  showPaymentModal.value = !showPaymentModal.value;
};

const isFromOpened = ref(false);

const isToOpened = ref(false);

const handleFromModal = () => {
  isFromOpened.value = !isFromOpened.value;
};

const handleToModal = () => {
  isToOpened.value = !isToOpened.value;
};

const handleSetLocation = (newLocation) => {
  if (selectedRideType.value === "Airport Pickup") {
    setFieldValue("to", newLocation);
  } else if (selectedRideType.value === "Airport Drop-off") {
    setFieldValue("from", newLocation);
  } else {
    setFieldValue("to", newLocation);
    setFieldValue("from", newLocation);
  }
};

const selectRideType = (rideType) => {
  setFieldValue("rideType", rideType);

  selectedRideType.value = rideType;
};

let selectedFromAirport = ref(null);

const selectFromAirport = (fromAirport) => {
  const { city, airport } = fromAirport;
  const from = airport + ", " + city;
  setFieldValue("from", from);
  selectedFromAirport.value = fromAirport;
};

let selectedToAirport = ref(null);

const selectToAirport = (toAirport) => {
  selectedToAirport.value = toAirport;
  const { city, airport } = toAirport;
  const to = airport + ", " + city;
  setFieldValue("to", to);
};

const isFromAirPort = computed(() => {
  return selectedRideType.value === "Airport Pickup";
});

const isToAirport = computed(() => {
  return selectedRideType.value === "Airport Drop-off";
});

const date = ref(new Date());

const handleChangeDate = (updatedDate) => {
  setFieldValue("date", updatedDate);
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

::-webkit-scrollbar {
  width: 8px;
  margin-left: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

.payment {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
}
</style>
