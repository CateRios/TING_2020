<template>

  <div>

    <v-row no-gutters class="container rounded-xl">

      <v-col cols="12" sm="7" md="8" class="pa-4">

        <v-row>

          <!-- Title -->
          <v-col>
            <p class="text-h5 accent--text">{{ roomData.name }} &nbsp;&nbsp;<v-icon color="accent">mdi-{{roomData.icon}}</v-icon></p>
          </v-col>

          <!-- Price -->
          <v-col>
            <p class="text-h5 accent--text text-center">{{ roomData.price }} €/night</p>
          </v-col>

        </v-row>

        <!-- Description -->
        <p class="text-body-2 text-justify">{{ roomData.description }}</p>


        <div class=" ma-1 pa-2">
          <!-- Include -->
          <p class="text-body-2"><span class="text-body-1 accent--text">Include</span><br>{{ roomData.include }}</p>

          <!-- Services -->
          <p class="text-body-1 accent--text ma-0">Services</p>
          <v-layout wrap class="text-body-2">
            <v-flex md3 v-for="service in roomData.services" :key="service" >{{ service }}</v-flex>
          </v-layout>

        </div>

      </v-col>

      <v-col cols="12" sm="5" md="4">
        <Carousel v-bind:carousel-data="roomData.carouselData"/>
      </v-col>

    </v-row>

  </div>

</template>

<script>

import Carousel from "@/components/Carousel";

export default {
  name: "Room-card",
  components: {
    Carousel
  },
  props:['roomData']
}
</script>

<style scoped>

.container {
  border: 1px solid #00BCD4;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.text-h5, .text-body-1, .text-body-2 {
  font-family: 'Ruluko', sans-serif !important;
}

</style>