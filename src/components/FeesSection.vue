<template>
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
        <CustomCheckBox name="additional" label="Additional car for luggages ">
          <img src="../assets/info-circle.png" />
        </CustomCheckBox>
        <p class="text-sm font-medium whitespace-nowrap">SAR 150.0</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomCheckBox from "./CustomCheckBox.vue";
</script>
