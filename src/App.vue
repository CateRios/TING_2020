<template>

  <v-app>

    <!-- Header -->
    <Header v-bind:company-title="companyTitle" v-bind:company-logo="companyLogo"/>

    <!-- Page content -->
    <v-content>
      <router-view></router-view>
    </v-content>

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
  font-family: 'Ruluko', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
