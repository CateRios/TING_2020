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

            <v-form ref="form"
                    v-model="valid"
                    lazy-validation
            >

              <!-- User field -->
              <v-text-field
                  label="User"
                  prepend-icon="mdi-account"
                  type="text"
                  color="accent"
                  v-model="user"
                  :rules="userRules"
                  required
              />

              <!-- Password field -->
              <v-text-field
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  color="accent"
                  v-model="password"
                  :rules="passwordRules"
                  required
              />
            </v-form>

          </v-card-text>

          <!-- Buttons -->
          <v-card-actions>
            <v-btn block color="accent" :disabled="!valid" @click="loginButtonPressed">Login</v-btn>
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
      valid: true,
      user: '',
      userRules: [
        v => !!v || 'User is required',
        v => /^room+[0-9]+$/.test(v) || 'User must follow roomXXX expression',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^[a-z0-9]+$/.test(v) || 'Permitted only lowercase characters and numbers',
        v => (v && v.length <= 8) || 'Password must be 8 characters/numbers',
      ],
      showPassword: false,
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
        await auth.signInWithEmailAndPassword(this.user + "@hotel.es", this.password);
        await this.$router.push({path: '/access'})
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