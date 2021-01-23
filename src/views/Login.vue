<template>
  <v-container fluid fill-height class="container">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>

        <!-- Card -->
        <v-card class="elevation-5 ma-5 pa-5" color="rgb(255, 255, 255, 0.825)">

          <!-- Title -->
          <v-card-title class="justify-center accent--text title">Login form</v-card-title>

          <!-- Form -->
          <v-card-text class="pa-3">

            <v-form>

              <!-- Email field -->
              <v-text-field
                  v-model="email"
                  label="Login"
                  prepend-icon="mdi-account"
                  type="text"
                  color="accent"
              />

              <!-- Password field -->
              <v-text-field
                  v-model="password"
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
                  color="accent"
              />
            </v-form>

          </v-card-text>

          <!-- Buttons -->
          <v-card-actions>
            <v-btn block color="accent" @click="loginButtonPressed">Login</v-btn>
          </v-card-actions>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

import {auth} from "../../firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        auth.currentUser.getIdTokenResult()
            // eslint-disable-next-line no-unused-vars
            .then(tokenResult => {
              console.log(tokenResult.claims);

            });
      }
    });
  },
  methods: {
    async loginButtonPressed() {
      try {
        const {
          user
        } = await auth.signInWithEmailAndPassword(this.email, this.password);
        console.log(user)
        await this.$router.push({path: '/home'})
      } catch (error) {
        console.log(error.email);
      }
    }
  }
};
</script>

<style scoped>

.container{
  background-image: url("https://images.unsplash.com/photo-1598846592750-db20422d70d4");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative
}

.title {
  font-family: 'Ruluko', sans-serif !important;
  font-size: 200% !important;
  border-bottom: 2px solid #00BCD4;
}

</style>