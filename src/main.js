import { createApp } from 'vue'
import VueYtframe from "vue3-ytframe"
import './app.scss'
import 'animate.css';
import App from './App.vue'
import router from './router'
// import { createManager } from '@vue-youtube/core';
createApp(App).use(router).use(VueYtframe).mount('#app');
