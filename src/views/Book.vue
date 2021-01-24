<template>

  <div>

    

    <!-- Rooms -->
    <v-container>


      //Habria que hacer que aparezca la roomcard con el indice de la que el usuario haya picado
	// pasando ese index por la url o algo 
		// importante darse cuenta de que esto no son comentarios :)
      <RoomCard />


    </v-container>

 <v-container fluid fill-height class="container">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <!-- Card -->
        <v-card class="elevation-5 ma-5 pa-5" color="rgb(255, 255, 255, 0.825)">
 <!-- Title -->
          <v-card-title class="justify-center accent--text title">Book Form</v-card-title>

          <!-- Form -->
          <v-card-text class="pa-3">

            <v-form ref="form"
                    v-model="valid"
                    lazy-validation
            >

              <!-- User field -->
              <v-text-field
                  label="First Name"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Second Name"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Phone Number"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Email"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Company"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Credit Card Number"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Titular Name"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Expiration Date"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

		<v-text-field
                  label="Comments"
                  type="text"
                  color="accent" 
                  :rules="userRules"
                  required
              />

         
            </v-form>

          </v-card-text>

 <v-card-actions>
            <v-btn block color="accent"  @click="bookButtonPressed">Book</v-btn>
          </v-card-actions>

 </v-card>

</v-flex>
    </v-layout>
  </v-container>

  </div>


</template>

<script>

import RoomCard from "@/components/Room-card";
import emailjs from 'emailjs-com';


export default {
  name: "Book",
email: "",
  components: {
    RoomCard
  },
  data() {
    return {
      valid: true,
      user: '',
      userRules: [
        v => !!v || 'This field is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^[a-z0-9]+$/.test(v) || 'Permitted only lowercase characters and numbers',
        v => (v && v.length <= 8) || 'Password must be 8 characters/numbers',
      ],
      showPassword: false,

      error:[]

    };
},
 methods:{
    sendEmail(e) {
      try {
        emailjs.sendForm('service_gqqo60m', 'template_ykmyzgj', e.target,
        'user_OvCYTVO2E6wAnouSJYryv', {
          email: this.email
        })
        console.log("enviado")
      } catch(error) {
          console.log("Failed", {error})
      }
    },
  }
};



</script>

<style scoped>


.title {
  font-family: 'Ruluko', sans-serif !important;
  font-size: 200% !important;
  border-bottom: 2px solid #00BCD4;
}

</style>