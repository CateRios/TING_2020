<template>
    <div><QR v-bind:user="user" /></div>
</template>


<script>
import {auth} from "../../firebase";
import QR from "@/components/QR";

export default {
  name: "Access",
  components: {
    QR
  }, 
  data(){
    return{
      user: {
       email: auth.currentUser.email,
       qr: "https://chart.googleapis.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl="+auth.currentUser.email,
      }
    }
  }
};
</script>