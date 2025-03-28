
/*
    index.html 에 추가되는 모듈
    전역으로 적용됨
*/


import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
