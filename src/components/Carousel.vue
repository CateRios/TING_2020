<template>

  <v-carousel
      cycle
      height="92vh"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <!-- Slides -->
    <v-carousel-item
        v-for="(item,i) in carouselData"
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