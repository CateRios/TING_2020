<template>
  <div>
    <!-- Rooms -->
    <v-container>
      <RoomCardBook v-bind:room-data="roomData" />
    </v-container>

    <v-container fluid fill-height class="container">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <!-- Card -->
          <v-card
            class="elevation-5 ma-5 pa-5"
            color="rgb(255, 255, 255, 0.825)"
          >
            <!-- Title -->
            <v-card-title class="justify-center accent--text title"
              >Book Form</v-card-title
            >

            <!-- Form -->
            <v-card-text class="pa-3">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="sendEmail"
              >
                <!-- User field -->
                <v-text-field
                  label="First Name"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Second Name"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Phone Number"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Email"
                  type="text"
                  color="accent"
                  v-model="email"
                  required
                />

                <v-text-field
                  label="Company"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Credit Card Number"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Titular Name"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Expiration Date"
                  type="text"
                  color="accent"
                  required
                />

                <v-text-field
                  label="Comments"
                  type="text"
                  color="accent"
                  required
                />

                <v-btn block color="accent" type="submit">Book</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import RoomCardBook from "@/components/Room-card-book";
import emailjs from "emailjs-com";
import { getSelectedRoom } from "/server/functions/roomFunctions";

export default {
  name: "Book",
  components: {
    RoomCardBook,
  },
  props: ["roomId"],
  data() {
    return {
      valid: true,
      email: "",
      user: "",
      password: "",
      roomData: [{
        amount: "",
        description: "",
        include: "",
        name: "",
        services: "",
        peopleNumber: "",
      }],
      error: [],
    };
  },
  created() {
    let vm = this;
    getSelectedRoom(vm.roomId).then(function(data) {
      vm.roomData = data[0];
    });
  },
  methods: {
    sendEmail(e) {
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
      } catch (error) {
        console.log("Failed", { error });
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Ruluko", sans-serif !important;
  font-size: 200% !important;
  border-bottom: 2px solid #00bcd4;
}
</style>
