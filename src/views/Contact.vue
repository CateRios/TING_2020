<template>

  <v-container fluid fill-height class="container">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5 lg4>


        <v-card class="elevation-5 ma-5 pa-5" color="rgb(255, 255, 255, 0.825)">

          <!-- Title -->
          <v-card-title class="justify-center accent--text title">Contact</v-card-title>

          <!-- Description -->
          <v-card-text class="text-h6 ma-5">
            <strong>Reception: </strong>+34 XXX-XXX-XXX<br>
            <strong>Hotel reservations: </strong>+34 XXX-XXX-XXX
          </v-card-text>

        </v-card>

      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.container {
  background-image: url("https://images.unsplash.com/photo-1559451035-4dd14b6aa126");
  filter: grayscale(30%);
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

.text-h6 {
  font-family: 'Ruluko', sans-serif !important;
}

</style>