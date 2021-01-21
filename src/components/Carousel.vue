<template>

  <v-carousel
      cycle
      v-bind:height="carouselData.height"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <!-- Slides -->
    <v-carousel-item
        v-for="(item,i) in carouselData.images"
        :key="i"
        :src="item.src"
    />

  </v-carousel>

</template>

<script>
export default {
  name: "Carousel",
  props:['carouselData']
}
</script>

<style scoped>

</style>