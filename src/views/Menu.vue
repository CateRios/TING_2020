<template>
  <div>
    <!--Page title-->
    <div class="banner pa-3 ma-4 justify-center">
      <h1 class="title text-h2 text-center">Menu</h1>
    </div>

    <!--Menu Sections -->
    <MenuList v-bind:menu="menu" />

    <!--Button-->
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6 lg6 xl6 offset-xs4 offset-md6 offset-sm6 mt-3>
          <v-layout column>
            <v-flex class="text-xs-center" mt-5 mb-5>
              <v-btn color="accent" x-large class="btn pa-5 text-h6" to="/order"
                >Order</v-btn
              >
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
import {getStarters, getMain, getSeconds, getDesserts} from "../../server/functions/foodFunctions";

export default {
  name: "Menu",
  components: {
    MenuList,
  },
  data() {
    return {
      menu: {
        items: [
          {
            title: "Starter",
            src: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0",
            dishes: [],
          },
          {
            title: "Main Dish",
            src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
            dishes: [],
          },
          {
            title: "Second course",
            src: "https://images.unsplash.com/photo-1582391123232-6130296f1fcd",
            dishes: []
          },
          {
            title: "Dessert",
            src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2",
            dishes: [],
          },
        ],
      },
    };
  },
  created(){
    let vm = this;
    getStarters().then(function (items) {
      vm.menu.items[0].dishes = items;
    });
    getMain().then(function (items) {
      vm.menu.items[1].dishes = items;
    });
    getSeconds().then(function (items) {
      vm.menu.items[2].dishes = items;
    });
    getDesserts().then(function (items) {
      vm.menu.items[3].dishes = items;
    });
  },
};
</script>

<style scoped>
.banner {
  background-color: #3c444c;
}

.title {
  font-family: "Ruluko", sans-serif !important;
  color: white;
}

.btn {
  font-family: "Ruluko", sans-serif !important;
}</style
>;
