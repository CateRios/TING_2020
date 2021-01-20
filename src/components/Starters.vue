<template>
  <v-container grid-list-md text-xs-center>
    <v-card max-width="100%" class="center rounded-xl">
      <v-row class="flex-nowrap ma-0">
        <!--Dishes-->
        <v-col cols="8">
          <v-card-title>Starters</v-card-title>
          <!--Dish list-->
          <v-row v-for="n in 4" :key="n" class="mt-0 ml-6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-star-four-points</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>List item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-row>
        </v-col>

        <!--Image-->
        <v-col cols="4" class="ma-0 pa-0">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            class="rounded-r-xl"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Starters"
}
</script>

<style scoped>

</style>
