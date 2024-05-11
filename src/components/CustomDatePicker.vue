<template>
  <div
    class="rounded date-picker bg-inputField w-11/12 h-12 flex mx-auto gap-2 mb-5"
  >
    <date-picker
      ref="calendar"
      :modal-value="date"
      :min-date="new Date()"
      @update:modelValue="changeDate"
      title-position="left"
      :popover="popover"
    >
      <template v-slot="{ togglePopover }">
        <div
          class="p-1 cursor-pointer"
          @click="togglePopover"
          transition="fade"
        >
          <label class="block cursor-pointer text-xs" for="date">Date</label>

          <div class="flex justify-between h-1/3 items-center">
            <input
              class="bg-transparent text-sm rounded border-none w-11/12"
              :value="date"
              name="date"
            />

            <img src="../assets/calendar.png" alt="calendar" class="w-4 h-3" />
          </div>
        </div>
      </template>

      <template #header-prev-button>
        <p class="hidden"></p>
      </template>

      <template #header-next-button>
        <img src="../assets/navigation.png" alt="navigation" />
      </template>

      <template #footer>
        <div class="w-full px-4 pb-3">
          <button
            class="bg-primary text-white font-bold w-full px-3 py-1 rounded-md"
            @click="moveToday"
          >
            Today
          </button>
        </div>
      </template>
    </date-picker>

    <div class="border-r-2 border-black h-8 flex my-auto"></div>

    <date-picker
      :model-value="date"
      mode="time"
      hide-time-header
      @timeupdate="changeTime"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <div @click="togglePopover" class="p-1">
          <label class="block cursor-pointer text-xs" for="date">Time</label>

          <div class="flex justify-between items-center h-1/3">
            <input
              class="bg-transparent text-sm rounded border-none w-11/12"
              :value="inputValue"
              @change="changeTime"
              name="time"
            />

            <img src="../assets/clock.png" alt="clock" class="w-4 h-3" />
          </div>
        </div>
      </template>
    </date-picker>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { DatePicker } from "v-calendar";

defineProps({
  date: Date,
  changeDate: Function,
  changeTime: Function,
});

const popover = ref({
  visibility: "click",
  placement: "bottom-start",
});

const calendar = ref(null);

function moveToday() {
  calendar.value.move(new Date());
}
</script>

<style>
.vc-title-wrapper span {
  font-size: 18px;
  font-weight: 600;
}

.vc-popover-content-wrapper {
  bottom: 0 !important;
}

.vc-popover-content-wrapper .vc-popover-caret {
  display: none;
}

.vc-popover-content-wrapper .vc-highlight-bg-solid {
  background-color: black;
}
</style>
