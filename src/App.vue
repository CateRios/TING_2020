<template>

  <v-app class="app">

    <!-- Header -->
    <Header v-bind:company-title="companyTitle" v-bind:company-logo="companyLogo"/>

    <!-- Page content -->
    <v-main style="overflow: hidden">
      <router-view/>
    </v-main>

    <!-- Footer -->
    <Footer v-bind:company-title="companyTitle"/>

  </v-app>

</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return{
      companyTitle: '[Hotel name]',
      companyLogo: 'https://michiganhr.org/wp-content/uploads/2015/01/insert-logo-375x360.png'
    }
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Ruluko&display=swap');

#app {
  font-family: 'Ruluko', sans-serif !important;
}

</style>
