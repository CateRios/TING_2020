<template>
  <v-container grid-list-md text-xs-center mt-15>
    <form max-width="100%">
      <div class="form rounded-xl pa-5">
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{menu.items[0].title}}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[0].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox v-model="checkbox" color="#7bbce1">
              <template v-slot:label>
                <div class="label">
                  {{d.dish}}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row>
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{menu.items[1].title}}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[1].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox v-model="checkbox" color="#7bbce1">
              <template v-slot:label>
                <div class="label">
                  {{d.dish}}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row>
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{menu.items[2].title}}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[2].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox v-model="checkbox" color="#7bbce1">
              <template v-slot:label>
                <div class="label">
                  {{d.dish}}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row>
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{menu.items[3].title}}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[3].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox v-model="checkbox" color="#7bbce1">
              <template v-slot:label>
                <div class="label">
                  {{d.dish}}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row>
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
      </div>


      <!--Button-->
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6 sm6 md6 lg6 xl6 offset-xs5 mt-3>
            <v-layout column>
              <v-flex class="text-xs-center" mt-5 mb-5>
                <v-btn
                  type="submit"
                  color="accent"
                  x-large
                  class="btn pa-5 text-h6"
                  to="/order"
                  >Place order</v-btn
                >
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </form>
  </v-container>

  
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      menu: {
        items: [
          {
            id: 0,
            title: "Starter",
            dishes: [
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
            ],
          },
          {
            id: 1,
            title: "Main Dish",
            dishes: [
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
            ],
          },
          {
            id: 2,
            title: "Second course",
            dishes: [
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
            ],
          },
          {
            id: 3,
            title: "Dessert",
            dishes: [
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
              { dish: "List item" },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.form {
  border: 1px solid #7bbce1;
  color: black;
}

.separator {
  border: 0.5px solid;
  background-color: #7bbce1;
  border-color: #7bbce1;
}

.title {
  font-family: "Ruluko", sans-serif !important;
  margin-inline-start: 1rem;
}

.label {
  color: black;
  font-family: "Ruluko", sans-serif !important;
  font-weight: bold;
}

.btn {
  font-family: "Ruluko", sans-serif !important;
}
</style>
