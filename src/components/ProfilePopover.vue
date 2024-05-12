<template>
  <div
    class="rounded-lg z-20 hidden lg:flex absolute top-[9.5%] right-0 shadow-lg p-4 bg-white w-64 flex-col gap-5"
  >
    <div class="flex gap-4 cursor-pointer items-center">
      <img src="../assets/setting.png" class="h-4 w-4" />
      <p class="text-sm font-normal">Profile Settings</p>
    </div>
    <hr class="text-primary opacity-50" />
    <div class="flex gap-4 cursor-pointer items-center">
      <img src="../assets/translate.png" class="h-4 w-4" />
      <p class="text-sm font-normal">العربية</p>
    </div>

    <div class="w-full mt-4">
      <button
        class="border-primary border shadow-md bg-white text-primary font-bold w-full px-3 py-1 rounded-md"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
p {
  margin: 0;
}
</style>
