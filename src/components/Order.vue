<template>
  <v-container grid-list-md text-xs-center mt-15>
    <form max-width="100%">
      <div class="form rounded-xl pa-5">
        <!--Start-->
        <h4 class="text-h4 title mt-5">{{ menu.items[0].title }}</h4>
        <hr class="separator" />

        <!--Item-->
        <v-row v-for="d in menu.items[0].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              :id="d.id"
              color="#7bbce1"
              v-model="selected"
              :value="d.dish"
              :name="d.dish"
            >
              <template v-slot:label>
                <div class="label">
                  {{ d.dish }}
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
        <v-row v-for="d in menu.items[1].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              :id="d.id"
              color="#7bbce1"
              v-model="selected"
              :value="d.dish"
              :name="d.dish"
            >
              <template v-slot:label>
                <div class="label">
                  {{ d.dish }}
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
        <v-row v-for="d in menu.items[2].dishes" :key="d">
          <v-col xs="12" sm="6" md="8" lg="8" xl="8">
            <v-checkbox
              :id="d.id"
              color="#7bbce1"
              v-model="selected"
              :value="d.dish"
              :name="d.dish"
            >
              <template v-slot:label>
                <div class="label">
                  {{ d.dish }}
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
              :id="d.id"
              color="#7bbce1"
              v-model="selected"
              :value="d.dish"
              :name="d.dish"
            >
              <template v-slot:label>
                <div class="label">
                  {{ d.dish }}
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
          <v-flex xs6 sm6 md6 lg6 xl6 offset-xs5 mt-3>
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
          max-width="50%"
          pa-5
          height="auto"
          class="dialog-style"
        >
          <v-card class="pa-5 text-center">
            <v-card-title class="title text-h5 justify-center">
              Please confirm your order
            </v-card-title>
            <hr class="separator"/>
            <v-card-text class="label text-left"> {{ selected }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs6 sm6 md6 lg6 xl6 mt-3>
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
                  <v-flex xs6 sm6 md6 lg6 xl6 mt-3>
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
        <v-dialog v-model="infoDialog" persistent max-width="50%" height="auto">
          <v-card class="pa-5">
            <v-card-text class="label text-h6 text-center"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs6 sm6 md6 lg6 xl6 offset-xs5 mt-3>
                    <v-layout column>
                      <v-flex class="text-xs-center" mt-5 mb-5>
                        <v-btn
                          @click.prevent="infoDialogClose()"
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

      <!--Error dialog-->
      <v-row justify="center">
        <v-dialog v-model="warnDialog" persistent max-width="fit-content" height="auto">
          <v-card class="pa-5">
            <v-card-text class="label text-h6 text-center"
              >Seleccione por lo menos un plato</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-container fluid id="btn">
                <v-layout row wrap>
                  <v-flex xs6 sm6 md6 lg6 xl6 offset-xs5 mt-3>
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
export default {
  name: "Order",
  data() {
    return {
      selected: [],
      menu: {
        items: [
          {
            id: 0,
            title: "Starter",
            dishes: [
              { id: "0", dish: "List item 1" },
              { id: "1", dish: "List item 2" },
              { id: "2", dish: "List item 3" },
              { id: "3", dish: "List item 4" },
            ],
          },
          {
            id: 1,
            title: "Main Dish",
            dishes: [
              { id: "4", dish: "List item 5" },
              { id: "5", dish: "List item 6" },
              { id: "6", dish: "List item 7" },
              { id: "7", dish: "List item 8" },
            ],
          },
          {
            id: 2,
            title: "Second course",
            dishes: [
              { id: "8", dish: "List item 9" },
              { id: "9", dish: "List item 10" },
              { id: "10", dish: "List item 11" },
              { id: "11", dish: "List item 12" },
            ],
          },
          {
            id: 3,
            title: "Dessert",
            dishes: [
              { id: "12", dish: "List item 13" },
              { id: "13", dish: "List item 14" },
              { id: "14", dish: "List item 15" },
              { id: "15", dish: "List item 16" },
            ],
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
  color: black;
  font-family: "Ruluko", sans-serif !important;
  font-weight: bold;
}

.btn {
  font-family: "Ruluko", sans-serif !important;
}
</style>
