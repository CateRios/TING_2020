<template>

  <div>

    <!-- Carousel -->
    <Carousel v-bind:carousel-data="carouselData"/>

    <!-- Hotel data -->
    <div class="ma-10 pa-10">

      <!-- Title -->
      <p class="text-h4 accent--text">[Name of the hotel]</p>

      <!-- Description -->
      <p class="text-body-2 text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit dictum sociosqu lacus, dignissim vitae netus purus luctus pharetra facilisi lectus. Libero cum orci facilisi et facilisis nibh curabitur odio mauris, duis ullamcorper habitant at accumsan dapibus natoque taciti nec luctus, metus lectus mi felis nostra iaculis potenti urna. Augue interdum imperdiet cursus quisque congue dapibus lacus lectus, sapien viverra convallis tempor tincidunt taciti et, duis vel sociis libero etiam fames penatibus. <br><br>
        Dapibus cum aliquam proin nisl tempus laoreet hac scelerisque curabitur, libero bibendum accumsan tortor aptent nascetur ac non vehicula cubilia, suspendisse pulvinar natoque facilisis integer torquent pharetra aenean. Potenti semper euismod et consequat nullam laoreet bibendum facilisi platea lacinia arcu dis, elementum dapibus posuere facilisis natoque fames ornare diam vehicula pellentesque imperdiet, venenatis tortor libero magna massa nascetur quisque morbi tellus felis nunc. Rutrum ridiculus dis nec sem commodo conubia lectus nulla neque gravida, habitasse consequat lobortis molestie suscipit vitae dictumst ligula erat est, integer torquent sociis ac dignissim mi congue feugiat in. Enim quis fames sapien a nisi aliquet taciti lacus hendrerit, lacinia nostra laoreet dictumst tellus imperdiet metus nunc, semper litora malesuada erat gravida mauris sodales tempor. <br><br>
        Blandit dapibus proin mi mollis suspendisse ut odio quisque fames, lacinia consequat facilisis augue dui quam litora habitasse vestibulum, dignissim fusce vitae parturient justo arcu nisl in. Litora parturient sem vehicula suscipit phasellus nibh blandit, accumsan ultricies nisi cursus senectus nostra, mus enim lobortis ligula nunc interdum. Conubia tempus mus ornare imperdiet hendrerit faucibus congue donec, facilisis cursus magnis mauris libero inceptos phasellus, turpis venenatis nunc sociis vestibulum eget augue. Varius inceptos pellentesque fermentum sagittis primis potenti condimentum magnis a pulvinar tempus, eu iaculis magna egestas blandit ut parturient diam euismod cras, molestie sed eleifend montes nec vestibulum nisl habitasse dignissim quisque.
      </p>

    </div>

    <!-- Hotel features -->
    <Features v-bind:features="features"/>

  </div>

</template>

<script>

import Carousel from "@/components/Carousel";
import Features from "@/components/Features";

export default {
  name: "Index",
  components: {
    Carousel,
    Features
  },
  data() {
    return {
      carouselData: [
        {src: "https://images.unsplash.com/photo-1582719508461-905c673771fd"},
        {src: "https://images.unsplash.com/photo-1566073771259-6a8506099945"},
        {src: "https://images.unsplash.com/photo-1548623832-065a018e01ce"}
      ],
      features: {
        title:"Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        items: [
          {icon: "account-circle", title: "Magna Aliqua", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."},
          {icon: "monitor-cellphone", title: "Consectetur Elit", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."},
          {icon: "store-outline", title: "Minim Veniam", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."},
        ]
      }
    }
  }
}
</script>

<style scoped>

.text-h4 {
  font-family: 'Ruluko', sans-serif !important;
}

.text-body-2 {
  font-family: 'Ruluko', sans-serif !important;
}

</style>