<template>

  <!-- Footer -->
  <v-footer  padless>
    <v-card color="secondary" class="flex">

      <!-- Main data -->
      <v-card-title class="primary text-body-2">
       Copyright © 2021 {{ companyTitle }}. All rights reserved.

        <v-spacer></v-spacer>

        <!-- Social menu -->
        <v-btn
            v-for="item in socialMenuItems"
            :key="item.title"
            icon
            color="accent"
            v-bind:href="path"
            target="_blank"
        >
          <v-icon size="24px">mdi-{{ item.icon }}</v-icon>
        </v-btn>

      </v-card-title>

      <!-- Done by - data -->
      <v-card-text class="py-2 white--text text-caption text-center">
        2021 — Done by RingTingTing
      </v-card-text>

    </v-card>

  </v-footer>

</template>

<script>
export default {
  name: "Footer",
  props: ["companyTitle"],
  data() {
    return {
      socialMenuItems: [
        {title: 'Twitter', path: '#', icon: 'twitter'},
        {title: 'Instagram', path: '#', icon: 'instagram'},
        {title: 'Facebook', path: '#', icon: 'facebook'},
        {title: 'Pinterest', path: '#', icon: 'pinterest'},
        {title: 'YouTube', path: '#', icon: 'youtube'},
        {title: 'Linkedin', path: '#', icon: 'linkedin'},
      ]
    }
  }
}
</script>

<style scoped>

</style>