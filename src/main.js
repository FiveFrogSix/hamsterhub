// import 'vue3-carousel/dist/carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '@/scss/styles.scss';
import "bootstrap";
import 'animate.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from '@/App.vue'
import router from '@/router/router.js'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
