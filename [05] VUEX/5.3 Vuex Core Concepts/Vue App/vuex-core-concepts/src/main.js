/* IMPORTANT NOTES
    1. Mounting the Store Object on the Vue App
        1) IMPORT the STORE object from the src/store/ folder
        2) USE the STORE object on the mounting VUE APP object
*/


import { createApp } from 'vue';
import App from './App.vue';

// 1. IMPORT VUEX STORE Object from src/store/ folder
import store from './store';

// 2. USE VUEX STORE Object on MOUNTED APP
createApp(App).use(store).mount('#app')
