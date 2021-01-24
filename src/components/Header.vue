<template>

  <div>

    <!-- Top app bar -->
    <v-app-bar color="primary" app>

      <!-- Nav drawer icon -->
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </span>

      <!-- Company logo -->
      <v-img
          class="ma-2"
          v-bind:src="companyLogo"
          max-height="40"
          max-width="40"
          contain
      />

      <!-- Company name -->
      <v-toolbar-title class="accent--text ma-3 companyTitle">{{ companyTitle }}</v-toolbar-title>

      <!-- Navigation menu options -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
            plain
            v-for="item in menu"
            :key="item.title"
            :to="item.path"
            color="accent">
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>

      <v-spacer/>

      <!-- Log in / Sign out buttons -->
      <span class="hidden-xs-only">
        <v-btn outlined small color="accent" to="/login" v-if="!authenticated">Log in</v-btn>
        <v-btn outlined small color="accent" @click="logout" v-else>Log out</v-btn>
      </span>

    </v-app-bar>

    <!-- Nav drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>

      <!-- Log in / Sign out buttons -->
      <div class="text-end ma-3">
        <v-btn outlined small color="accent" to="/login" v-if="!authenticated">Log in</v-btn>
        <v-btn outlined small color="accent" @click="logout" v-else>Log out</v-btn>
      </div>

      <!-- Navigation menu options -->
      <v-list nav dense>

        <v-subheader class="listSecctionTitle">Menu</v-subheader>

        <v-list-item-group active-class="accent--text text--accent-4">
          <v-list-item
              v-for="item in menu"
              :key="item.title"
              :to="item.path">
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

  </div>

</template>

<script>

import {auth} from "../../firebase";

export default {
  name: "Header",
  props: ['companyTitle', 'companyLogo'],
  data() {
    return {
      menu: [],
      drawer: false,
      menuItems: [
        {title: 'Home', path: '/', icon: 'home'},
        {title: 'Rooms', path: '/rooms', icon: 'door'},
        {title: 'Services', path: '/services', icon: 'room-service'},
        {title: 'About Us', path: '/aboutUs', icon: 'account-group'},
        {title: 'Blog', path: '/blog', icon: 'blogger'},
        {title: 'Contact', path: '/contact', icon: 'face-agent'},
      ],
      userMenuItems: [
        {title: 'Home', path: '/access', icon: 'home'},
        {title: 'Services', path: '/roomServices', icon: 'room-service'},
        {title: 'Food', path: '/menu', icon: 'food'},
        {title: 'Contact', path: '/contact', icon: 'face-agent'},
      ],

      authenticated: false,
    }
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        auth.onAuthStateChanged(() => {
          this.$router.push('/')
        })
      })
    }
  },
  created() {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        this.menu = this.userMenuItems;
        this.authenticated = true;
      } else {
        this.menu = this.menuItems;
        this.authenticated = false;
      }
    });
  },
}
</script>

<style lang="scss" scoped>

.companyTitle {
  font-size: xx-large;
}

.listSecctionTitle {
  text-transform: uppercase;
  border-bottom: 1px solid gray;
  color: #00BCD4 !important;
}

</style>