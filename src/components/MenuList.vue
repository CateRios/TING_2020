<template>
  <v-container grid-list-md text-xs-center>
    <v-card max-width="100%" class="center mt-3 pa-0" v-for="item in menu.items" :key="item" >
      <v-row class="no-gutters">
        <!--Dishes-->
         <v-col xs="12" sm="6" md="8" lg="8" xl="8">
          <v-card-title class="title text-h5">{{item.title}}</v-card-title>
          <!--Dish list-->
          <v-row v-for="d in item.dishes" :key="d" class="mt-0 ml-6">
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon">mdi-star-four-points</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{d.dish}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-row>
        </v-col>

        <!--Image-->
        <v-col xs="12" sm="6" md="4" lg="4" xl="4">
          <v-img
            max-height="100%"
            max-width="auto"
            class="ma-0 pa-0"
            :src="item.src"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MenuList",
  props:['menu']
}
</script>

<style scoped>
  .title{
    color: #7BBCE1;
    text-decoration: underline;
    font-family: 'Ruluko', sans-serif !important;
    margin-inline-start: 1rem;
  }

  .icon{
    color: black;
  }
</style>

