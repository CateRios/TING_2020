<template>
  <v-img
    height="100vh"
    src="https://images.unsplash.com/photo-1541971875076-8f970d573be6"
  >
    <v-container grid-list-md text-xs-center>
        <v-card color="rgb(255, 255, 255, 0.825)" width="100%" height="auto" class="center rounded-xl vcard1 pa-5" align="center">
            <v-card-title class="justify-center"><p class="accent--text title" color="accent">Room access</p></v-card-title>
                <v-img
                height="27vh"
                width="27vh"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wikipedia_Beta_Android_QR.svg/231px-Wikipedia_Beta_Android_QR.svg.png"
                >
                </v-img>
            <v-card-text>
                <p class="p1">To access the room via NFC</p>
                <p class="p1">press the button</p>
            </v-card-text>
            <v-btn color="accent" type="submit">Access</v-btn>
        </v-card>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "QR"
}
</script>

<style scoped>
.title{
    
    border: black 2px solid;
    border-style: hidden hidden solid hidden;
    border-color: #00BCD4;
    width: 75%;
}
.p1{
    color: black;
    font-size: 22px;
}
.vcard1{
  margin: 18vh auto;
}

</style>