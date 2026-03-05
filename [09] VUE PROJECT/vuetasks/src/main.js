/* IMPORTANT NOTES
    1. VUE APP CREATION STEP-BY-STEP
        1) Import createApp and App
        2) Import Vue Router and Vuex Store
        3) Create the Vue App
        4) Use/Register the Vue Router
        5) Use/Register the Vuex Store
        6) Mount the Vue App
*/

// Import createApp and Vue App
import { createApp } from 'vue'
import App from './App.vue'

// Import Vue Router and Vuex Store
import router from './router';
import store from './store';

// Create the Vue App
const app = createApp(App);

// Use the Vue Router
app.use(router);
// Use the Vuex Store
app.use(store);

// Mount the App
app.mount('#app')
