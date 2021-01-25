<template>
  <v-container class="pa-5">
    <!-- Alert -->
    <v-alert dense text :type="transaction.type" v-if="transaction.value"
      ><strong> {{ transaction.code }} !</strong>
      {{ transaction.message }}</v-alert
    >

    <v-row>
      <!--Book form -->
      <v-col cols="12" md="6">
        <v-layout align-center justify-center>
          <v-flex xs12>
            <!-- Card -->
            <v-card class="pa-3" color="rgb(0, 188, 212, 0.15)">
              <!-- Title -->
              <v-card-title class="justify-center accent--text title"
                >Book Form</v-card-title
              >

              <!-- Form -->
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  @submit.prevent="sendEmail"
                  lazy-validation
                  class="ma-2 pa-2"
                >
                  <!-- First name field -->
                  <v-text-field
                    label="First Name"
                    type="text"
                    color="accent"
                    v-model="firstName"
                    :rules="firstNameRules"
                    required
                  />

                  <!-- Second name field -->
                  <v-text-field
                    label="Second Name"
                    type="text"
                    color="accent"
                    v-model="secondName"
                    :rules="firstNameRules"
                    required
                  />

                  <!-- Phone number field -->
                  <v-text-field
                    label="Phone Number"
                    prepend-icon="mdi-cellphone"
                    type="text"
                    color="accent"
                    v-model="phoneNumber"
                    :rules="phoneNumbers"
                    required
                  />

                  <!-- Email field -->
                  <v-text-field
                    label="Email"
                    prepend-icon="mdi-email"
                    type="text"
                    color="accent"
                    v-model="email"
                    :rules="emailRules"
                    required
                  />

                  <!-- Credit card field -->
                  <v-text-field
                    label="Credit Card Number"
                    prepend-icon="mdi-credit-card-outline"
                    type="text"
                    color="accent"
                    v-model="creditCard"
                    :rules="creditCardRules"
                    required
                  />

                  <!-- Titular of credit card field -->
                  <v-text-field
                    label="Titular Name"
                    type="text"
                    color="accent"
                    v-model="titularCard"
                    :rules="titularRules"
                    required
                  />

                  <!-- Expiration date of credit card field -->
                  <v-text-field
                    label="Expiration Date"
                    type="text"
                    color="accent"
                    v-model="expirationDateCard"
                    :rules="expirationDateRules"
                    required
                  />

                  <!-- CVV of credit card field -->
                  <v-text-field
                    label="CVV Date"
                    type="text"
                    color="accent"
                    v-model="cvvCard"
                    :rules="cvvRules"
                    required
                  />

                  <!--Room data-->
                  <input name="user" type="hidden" v-model="user" />
                  <input name="password" type="hidden" v-model="password" />

                  <!-- Button -->
                  <v-card-actions>
                    <v-btn block color="accent" :disabled="!valid" type="submit"
                      >Pay and book</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-col>

      <!-- Room data -->
      <v-col cols="12" md="6">
        <RoomCardBook v-bind:room-data="roomData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RoomCardBook from "@/components/Room-card-book";
import emailjs from "emailjs-com";
import { getUser } from "/server/functions/usersFunctions";
import { getSelectedRoom, bookRoom } from "/server/functions/roomFunctions";
import { setClient } from "../../server/functions/clientsFunctions";

export default {
  name: "Book",
  components: {
    RoomCardBook,
  },
  props: ["roomId"],
  data() {
    return {
      valid: true,
      user: "",
      password: "",
      roomData: [
        {
          amount: "",
          description: "",
          include: "",
          name: "",
          services: "",
          peopleNumber: "",
        },
      ],
      error: [],

      firstName: "",
      firstNameRules: [],

      secondName: "",
      secondNameRules: [],

      phoneNumber: "",
      phoneNumberRules: [],

      email: "",
      emailRules: [],

      creditCard: "",
      creditCardRules: [],

      titularCard: "",
      titularCardRules: [],

      expirationDateCard: "",
      expirationDateCardRules: [],

      cvvCard: "",
      cvvCardRules: [],

      transaction: [],
    };
  },
  created() {
    let vm = this;
    getSelectedRoom(vm.roomId).then(function(data) {
      vm.roomData = data[0];
      console.log(vm.roomData);
    });
    getUser(vm.roomId).then(function(data) {
      vm.user = data[0].email;
      vm.password = data[0].password;
    });
  },
  methods: {
    bookRoom() {
      //Todo: In the future implement the payment platform

      let clientData = {
        room_id: this.roomId,
        firstName: this.firstName,
        secondName: this.secondName,
        phoneNumber: this.phoneNumber,
        email: this.email,
      };

      let vm = this;
      setClient(vm.roomId, clientData).then(function() {
        bookRoom(vm.roomId).then(function(res) {
          console.log(res);

          this.transaction = {
            value: true,
            type: "success",
            code: "Booked room",
            message:
              "The room was successfully booked. Thank you and we will waiting for you.",
          };
        });
      });
    },
    sendEmail(e) {

      //Do the client registration before sending credentials
      this.bookRoom();

      try {
        emailjs.sendForm(
          "service_gqqo60m",
          "template_ykmyzgj",
          e.target,
          "user_OvCYTVO2E6wAnouSJYryv",
          {
            email: this.email,
            user: this.user,
            password: this.password,
          }
        );
        console.log("enviado");
      } catch (error) {
        console.log("Failed", { error });
      }

       this.$refs.form.reset()
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Ruluko", sans-serif !important;
  font-size: 200% !important;
  border-bottom: 2px solid #00bcd4;
  margin: 0 1rem;
}
</style>
