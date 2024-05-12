<template>
  <Carousel :items-to-show="itemsToShow">
    <slide v-for="(car, index) in cars" :key="index">
      <CarCard
        :carClass="car.carClass"
        :carModel="car.carModel"
        :passengers="car.passenger"
        :bags="car.bags"
        :price="car.price"
        :id="car.id"
        :isSelected="car.id === selectedCar?.id"
        :select-car="
          () => {
            handleSelectCar(index);
          }
        "
      />
    </slide>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import CarCard from "./CarCard.vue";
import { ref } from "vue";
import { Cars } from "../data";
import { defineProps } from "vue";

const cars = ref(Cars);
defineProps({
  itemsToShow: Number,
});

let selectedCar = ref({});

const handleSelectCar = (index) => {
  selectedCar.value = cars.value[index];
  console.log(selectedCar.value);
};
</script>
