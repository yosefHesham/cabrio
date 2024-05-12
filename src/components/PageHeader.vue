<template>
  <header
    class="flex w-full justify-between bg bg-primary items-center h-12 md:h-16"
  >
    <ProfilePopover v-if="showProfilePopOver" />

    <div class="flex gap-14 items-center">
      <div class="flex items-center gap-3 ml-4">
        <img
          src="../assets/menu.png"
          alt=""
          class="lg:hidden cursor-pointer w-6 h-6"
        />
        <img
          src="../assets/logo.png"
          alt="Cabrio logo"
          class="h-5 md:ml-8 md:h-7"
        />
      </div>
      <nav
        class="hidden lg:flex gap-9 items-center mt-2 gap-"
        v-for="(navItem, index) in navItems"
        :key="index"
      >
        <div
          :class="[index === 1 ? 'font-semibold' : '']"
          class="flex flex-col items-center gap-1 cursor-pointer"
        >
          <p class="text-white">{{ navItem }}</p>
          <p
            class="w-1.5 h-1.5 rounded-[50%]"
            :class="[index === 1 ? 'bg-white' : 'bg-transparent']"
          ></p>
        </div>
      </nav>
    </div>

    <div class="hidden lg:flex gap-3 items-center">
      <div class="border-r border-lightgrey px-2">
        <p class="text-xs font-light text-white">Balance</p>
        <p class="text-sm font-bold text-white">50,600,0 SAR</p>
      </div>

      <div class="flex gap-24 items-center pr-4">
        <div class="flex items-center gap-2">
          <img src="../assets/profile-pic.png" alt="" />
          <div>
            <p class="text-sm font-bold text-white">Khuzimah A.</p>
            <p class="text-xs font-light text-white">Cabrio Co.</p>
          </div>
        </div>

        <img
          src="../assets/light-arrow-down.png"
          class="cursor-pointer ml-auto"
          @click="handleProfilePopOver"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

import ProfilePopover from "./ProfilePopover.vue";
const navItems = ["Company Profile", "Book a Ride", "Rides"];

const showProfilePopOver = ref(false);

const handleProfilePopOver = () => {
  showProfilePopOver.value = !showProfilePopOver.value;
};
</script>
<style scoped>
p {
  margin: 0;
}
</style>
