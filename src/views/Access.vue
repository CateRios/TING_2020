<template>
    <div><QR v-bind:user="user" /></div>
</template>


<script>
import {auth} from "../../firebase";
import {getUserByEmail} from "../../server/functions/usersFunctions";
import {getClientByRoomId} from "../../server/functions/clientsFunctions";
import QR from "@/components/QR";
export default {
  name: "Access",
  components: {
    QR
  }, 
  roomEmail: auth.currentUser.email.substr(0,auth.currentUser.email.length-9),
  data(){
    return{
      user: {

          qr:'https://chart.googleapis.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl='
      }
    }
  },
  created() {
      let vm = this;
    getUserByEmail(auth.currentUser.email.substr(0,auth.currentUser.email.length-9)).then(function(data) {
      vm.userData = data[0];
      vm.id = vm.userData.data.id;
      //console.log(vm.id);
      getClientByRoomId(vm.id).then(function(data) {
        vm.clientData = data[0];
        vm.email = vm.clientData.data.email;
        vm.phone = vm.clientData.data.phoneNumber;
        vm.user.qr = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&choe=UTF-8&chl=' + vm.email + vm.phone
      });
    });
    
  },
}

</script>