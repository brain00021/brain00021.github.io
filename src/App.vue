<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// import Alert from 'bootstrap/js/dist/alert';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import {Email} from './assets/smtp/smtp.js'
import Header from './components/Header.vue';

// Import Swiper styles
import 'swiper/css';
const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

// onMounted(() => {
//   Email.send({
//     SecureToken : "117E87BAE0221CA4E5DDCCD5A3B0CFEFE1400E9577476B72FCCBBEED56A9D0A5E6354B002D4BAA7F4DCB29E46728EB04",
//     To : 'brain00021@gmail.com',
//     From : "test123@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );
//   alert('test message')
// })
</script>

<template>
  <!-- <div>
   
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="mailto:brianliofficial@gmail.com?subject=這是一個設定好的主旨">
      寄信給abc@gmail.com並帶上主旨
    </a>
  </div> -->
  <Header></Header>
  <main>
    <router-view />
  </main>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper> -->
</template>

<style scoped>

</style>
