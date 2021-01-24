
<template>

  <v-container fluid fill-height class="container">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5 lg4>


        <v-card class="elevation-5 ma-5 pa-5" color="rgb(255, 255, 255, 0.825)">

          <!-- Title -->
          <v-card-title class="justify-center accent--text title">Room access</v-card-title>

          <!-- QR image -->
          <div class="d-flex flex-column justify-space-between align-center ma-5 pa-5">
            <img _ngcontent-vga-c28="" class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" :src=user.qr>
          </div>
          <!-- Description -->
          <v-card-text class="text-center">
            To access the room via NFC press the button
          </v-card-text>

          <!-- Buttons -->
          <v-card-actions class="justify-center">
            <v-btn color="accent" type="submit">Access</v-btn>
          </v-card-actions>

        </v-card>

      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
export default {
  name: "QR",
  props:['user']
}

</script>

<style scoped>

.container {
  background-image: url("https://images.unsplash.com/photo-1541971875076-8f970d573be6");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative
}

.title {
  font-family: 'Ruluko', sans-serif !important;
  font-size: 200% !important;
  border-bottom: 2px solid #00BCD4;
}

</style>