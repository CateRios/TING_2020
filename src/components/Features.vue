<template>

  <v-container fluid class="secondary div">

    <!-- Title -->
    <p class="text-h4 white--text text-center">{{features.title}}</p>

    <!-- Description -->
    <p class="text-body-2 white--text text-center">{{features.description}}</p>

    <!-- Features -->
    <v-container fluid>

      <v-row align-content="center">

        <v-col
            v-for="item in features.items"
            :key="item"
            cols="12"
            sm="4"
        >

          <v-card elevation="0" color="rgb(0, 0, 0, 0)" class="text-center">
            <v-icon color="accent" size="8rem">mdi-{{item.icon}}</v-icon>
            <v-card-title class="justify-center white--text">{{item.title}}</v-card-title>
            <v-card-text class="white--text">{{item.description}}</v-card-text>
          </v-card>

        </v-col>

      </v-row>

    </v-container>

  </v-container>

</template>

<script>
export default {
  name: "Features",
  props:['features']
}
</script>

<style scoped>

.div {
  margin: 0 !important;
  padding: 4rem 1rem 4rem 1rem;
}

.text-h4 {
  font-family: 'Ruluko', sans-serif !important;
}

.text-body-2 {
  font-family: 'Ruluko', sans-serif !important;
}

</style>