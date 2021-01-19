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
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            color="accent">
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>

      <v-spacer/>

      <!-- Log in button -->
      <v-btn outlined small color="accent" to="/login">Log in</v-btn>

    </v-app-bar>

    <!-- Nav drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="accent--text text--accent-4">

          <v-list-item
              v-for="item in menuItems"
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

export default {
  name: "Header",
  props: ['companyTitle', 'companyLogo'],
  data() {
    return {
      drawer: false,
      menuItems: [
        {title: 'Home', path: '/', icon: 'home'},
        {title: 'Rooms', path: '/rooms', icon: 'door'},
        {title: 'Services', path: '/services', icon: 'room-service'},
        {title: 'About Us', path: '/aboutUs', icon: 'account-group'},
        {title: 'Blog', path: '/blog', icon: 'blogger'},
        {title: 'Contact', path: '/contact', icon: 'face-agent'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.companyTitle {
  font-size: xx-large;
}

</style>