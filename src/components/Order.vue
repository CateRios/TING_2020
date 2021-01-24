<template>
  <v-container grid-list-md text-xs-center mt-15>
    <form max-width="100%">
      <div class="form rounded-xl pa-5">
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{ menu.items[0].title }}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="a in menu.items[0].dishes" :key="a">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              color="#7bbce1"
              v-model="selected"
              :value="a.name"
              :name="a.name"
            >
              <template v-slot:label>
                <div class="label">
                  {{ a.name }}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row
        >
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{ menu.items[1].title }}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="b in menu.items[1].dishes" :key="b">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              color="#7bbce1"
              v-model="selected"
              :value="b.name"
              :name="b.name"
            >
              <template v-slot:label>
                <div class="label">
                  {{ b.name }}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row
        >
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{ menu.items[2].title }}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="c in menu.items[2].dishes" :key="c">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              color="#7bbce1"
              v-model="selected"
              :value="c.name"
              :name="c.name"
            >
              <template v-slot:label>
                <div class="label">
                  {{ c.name }}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row
        >
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{ menu.items[3].title }}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[3].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              color="#7bbce1"
              v-model="selected"
              :value="d.name"
              :name="d.name"
            >
              <template v-slot:label>
                <div class="label">
                  {{ d.name }}
                </div></template
              ></v-checkbox
            ></v-col
          ></v-row
        >
        <!--Item end-->

        <hr class="separator" />
        <!--End-->
      </div>

      <!--Button-->
      <v-container fluid id="btn">
        <v-layout row wrap>
          <v-flex xs6 sm6 md6 lg6 xl6 offset-xs3 offset-md5 offset-sm5 mt-3>
            <v-layout column>
              <v-flex class="text-xs-center" mt-5 mb-5>
                <v-btn
                  @click.prevent="orderDialogOpen()"
                  color="accent"
                  x-large
                  class="btn pa-5 text-h6 mb-5"
                  to="/order"
                  >Place order</v-btn
                >
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </form>

    <!--Dialogs-->

    <!--Summary dialog-->
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="orderDialog"
          persistent
          max-width="75%"
          pa-5
          height="auto"
          class="dialog-style"
        >
          <v-card class="pa-5 text-center">
            <v-card-title class="title text-size justify-center">
              Please confirm your order
            </v-card-title>
            <hr class="separator mb-5"/>
            <v-card-text v-for="select in selected" :key="select" class="label text-left text-size-2"> 
              {{ select }}
              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs12 sm6 md6 lg6 xl6 mt-3>
                    <v-layout column>
                      <v-flex class="text-xs-center" mt-5 mb-5>
                        <v-btn
                          @click.prevent="infoDialogOpen()"
                          color="accent"
                          class="btn pa-5 text-h6"
                          >Confirm</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6 xl6 mt-3>
                    <v-layout column>
                      <v-flex class="text-xs-center" mt-5 mb-5>
                        <v-btn
                          @click.prevent="orderDialogClose()"
                          color="accent"
                          outlined
                          class="btn pa-5 text-h6"
                          >Cancel</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--End-->

      <!--Confirmation dialog-->
      <v-row justify="center">
        <v-dialog v-model="infoDialog" persistent max-width="fit-content" height="auto">
          <v-card class="pa-5">
            <v-card-text class="label text-size text-center"
              >Thank you for your order. Approximate preparation time for your dish is one and a half hours. You will be notified when you can access the dining room.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs6 sm6 md6 lg6 xl6 offset-xs4 offset-md5>
                    <v-layout column>
                      <v-flex class="text-xs-center" mt-5 mb-5>
                        <v-btn
                          @click.prevent="infoDialogClose()"
                          color="accent"
                          class="btn pa-5 text-h6"
                          to="/menu"
                          >OK</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--End-->

      <!--Error dialog-->
      <v-row justify="center">
        <v-dialog v-model="warnDialog" persistent max-width="fit-content" height="auto">
          <v-card class="pa-5">
            <v-card-text class="label text-center text-size"
              >Select at least one dish</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs6 sm6 md6 lg6 xl6 offset-md4 offset-xs4 mt-3>
                    <v-layout column>
                      <v-flex class="text-xs-center" mt-5 mb-5>
                        <v-btn
                          @click.prevent="warnDialogClose()"
                          color="accent"
                          class="btn pa-5 text-h6"
                          >OK</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--End-->

    </template>
    <!--End-->
  </v-container>
</template>

<script>
import {getStarters, getMain, getSeconds, getDesserts} from "../../server/functions/foodFunctions";

export default {
  name: "Order",
  data() {
    return {
      selected: [],
      menu: {
        items: [
          {
            title: "Starter",
            dishes: [],
          },
          {
            title: "Main Dish",
            dishes: [],
          },
          {
            title: "Second course",
            dishes: []
          },
          {
            title: "Dessert",
            dishes: [],
          },
        ],
      },
      orderDialog: false,
      infoDialog: false,
      warnDialog: false,
    };
  },
  methods: {
    orderDialogOpen: function() {
      var itemS = JSON.stringify(this.selected);
      console.log(itemS);
      if(itemS != "[]"){
        this.orderDialog = true;
      }else{
        this.warnDialog = true;
        console.log("No hay nada seleccionado");
      }
      
    },
    orderDialogClose: function() {
      this.orderDialog = false;
    },
    infoDialogOpen: function() {
      this.orderDialog = false;
      this.infoDialog = true;
    },
    infoDialogClose: function() {
      this.infoDialog = false;
    },
    warnDialogClose: function() {
      this.warnDialog = false;
    },
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
}

.label {
  color: black !important;
  font-family: "Ruluko", sans-serif !important;
  font-weight: bold;
}

.text-size{
  font-size: 1.2rem;
}

.text-size-2{
  font-size: 1rem;
}

.btn {
  font-family: "Ruluko", sans-serif !important;
}
</style>
