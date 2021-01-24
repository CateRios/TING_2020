<template>

  <div>

    <!-- Filter -->
    <v-container class="secondary filter">
      <v-row>

        <!-- From date -->
        <v-col cols="12" sm="3" offset="0" class="offset-sm-1">

          <v-menu
              v-model="fromDatePicker"
              :close-on-content-click="false"
              max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  :value="computedDateFormatted(fromDate)"
                  label="Check in"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="fromDate = null"
              />
            </template>
            <v-date-picker
                v-model="fromDate"
                @change="fromDatePicker = false"
                header-color="accent"
                :min="minDate"
                :show-current="minDate"
            />
          </v-menu>

        </v-col>

        <!-- To date -->
        <v-col cols="12" sm="3">

          <v-menu
              v-model="toDatePicker"
              :close-on-content-click="false"
              max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  :value="computedDateFormatted(toDate)"
                  label="Check out"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="toDate = null"
              />
            </template>
            <v-date-picker
                v-model="toDate"
                @change="toDatePicker = false"
                header-color="accent"
                :min="minDate"
                :show-current="minDate"
            />
          </v-menu>

        </v-col>

        <!-- People -->
        <v-col cols="12" sm="2">

          <v-select
              v-model="people"
              color="white"
              :items="peopleNumber"
              label="People"
              prepend-icon="mdi-account-group-outline"
          />

        </v-col>

        <!-- Button -->
        <v-col cols="12" sm="1" offset="0" class="offset-sm-1 text-center" align-self="center">

          <v-btn rounded color="accent" @click="filterRooms">Search</v-btn>

        </v-col>


      </v-row>
    </v-container>

    <!-- Rooms -->
    <v-container>

      <RoomCard v-for="(room,index) in roomsData" :key="index" v-bind:room-data="room"/>

    </v-container>

  </div>


</template>

<script>

import RoomCard from "@/components/Room-card";
import {getRooms} from "../../server/functions/roomFunctions";

import moment from 'moment'
import {format, parseISO} from 'date-fns'

export default {
  name: "Rooms",
  components: {
    RoomCard
  },
  data() {
    return {

      // ------------- Variables -------------

      // Filter
      minDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),

      fromDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      fromDatePicker: false,
      toDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      toDatePicker: false,

      people: 1,
      peopleNumber: [1, 2, 3, 4],

      // Rooms
      roomsData: [],
      roomsDataCopy: []
    }
  },
  methods: {
    computedDateFormatted(date) {
      moment.locale();
      return date ? moment(date).locale('es').format('L') : ''
    },
    filterRooms() {

      const vm = this;
      const momentRange = require('moment-range');
      momentRange.extendMoment(moment);

      this.roomsData = this.roomsDataCopy;
      this.roomsData = this.roomsData.filter(function (roomData) {

            if (roomData.peopleNumber === vm.people) {

              for (let i = 0; i < roomData.dates.length; i++) {
                let startDate = moment(new Date(roomData.dates[i].from)).subtract(1, 'days');
                let endDate = moment(new Date(roomData.dates[i].to)).add(1, 'days');

                if (!moment(vm.fromDate).isBetween(startDate, endDate) || !moment(vm.toDate).isBetween(startDate, endDate)) {
                  if (!startDate.isBetween(moment(vm.fromDate), moment(vm.toDate)) && !endDate.isBetween(moment(vm.fromDate), moment(vm.toDate))) {
                    return true
                  }
                }

              }

            } else {
              return false
            }

          }
      );

    }
  },
  created() {

    let vm = this;

    getRooms().then(function (rooms) {

      for (let room of rooms) {

        // Add icon
        switch (room.peopleNumber){

          case 2:
            room.icon = "account-multiple";
            break;

          case room.peopleNumber > 2:
            room.icon = "account-group-multiple";
            break;

          default:
            room.icon = "account";
            break;

        }

        // Add carousel data
        room.carouselData = {
          height: "24rem",
          images: room.images
        }

      }

      vm.roomsData = rooms;
      vm.roomsDataCopy = rooms;

    });


  }
}

</script>

<style scoped>

.filter {
  margin-top: 2rem;
}

</style>