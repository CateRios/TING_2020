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
                      :rules="phoneNumberRules"
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
                      :rules="titularCardRules"
                      required
                  />

                  <!-- Expiration date of credit card field -->
                  <v-text-field
                      label="Expiration Date"
                      type="text"
                      color="accent"
                      v-model="expirationDateCard"
                      :rules="expirationDateCardRules"
                      required
                  />

                  <!-- CVV of credit card field -->
                  <v-text-field
                      label="CVV"
                      type="text"
                      color="accent"
                      v-model="cvvCard"
                      :rules="cvvCardRules"
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
      password: '',
      user:'',
      firstName: '',
      firstNameRules: [
        v => !!v || 'First name is required',
        v => /^[a-zA-Z\s]*$/.test(v) || 'Permitted only characters',
      ],

      secondName: '',
      secondNameRules: [
        v => !!v || 'Second name is required',
        v => /^[a-zA-Z\s]*$/.test(v) || 'Permitted only characters',
      ],

      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'Phone number is required',
        v => /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(v) || 'The phone number must follow +XX XXX XXX XXX expression',
      ],

      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v) || 'The email does not has the correct formatt.',
      ],

      creditCard: '',
      creditCardRules: [
          v => !!v || 'The credit card number is required',
          v => /^[0-9]*$/.test(v) ||'Permitted only numbers',
          v => (v && v.length <= 16) || 'The credit card number 16 digits or less',
      ],

      titularCard: '',
      titularCardRules: [
        v => !!v || 'The titular of the credit card is required',
        v => /^[a-zA-Z\s]*$/.test(v) || 'Permitted only characters',
      ],

      expirationDateCard: '',
      expirationDateCardRules: [
        v => !!v || 'The expiration date of the credit card is required',
        v => /^(0?[1-9]|1[012])[/-][0-9]{2}$/.test(v) || 'The expiration date must follow mm/yy expression',
      ],

      cvvCard: '',
      cvvCardRules: [
        v => !!v || 'The credit card number is required',
        v => /^[0-9]{3}$/.test(v) ||'Permitted only 3 digits',
      ],
      roomData: [],
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
      }

      setClient(this.roomData.id, clientData).then(function (client_id) {

        let dates = {
          from: this.roomData.id,
          to: this.firstName,
          client: client_id,
        }

        this.roomData.occupationsDates.push(dates)

        bookRoom(this.roomData.id,this.roomData.occupationsDates).then(function (res) {

          console.log(res)

          this.transaction = {
            value: true,
            type: "success",
            code: "Booked room",
            message:
              "The room was successfully booked. Thank you and we will be waiting for you.",
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
