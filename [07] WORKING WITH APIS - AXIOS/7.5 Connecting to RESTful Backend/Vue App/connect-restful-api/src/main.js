/* IMPORTANT NOTES
    1. USE of GLOBAL Axios CONFIGURATION
        - If the implementation of Axios is made using
          a GLOBAL CONFIGURATION directly in the main.js file, 
          here axios and vue-axios are imported and mounted/used on the Vue App.
*/

import { createApp } from 'vue'
import App from './App.vue'

// Import Axios and VueAxios
//import axios from 'axios'
//import VueAxios from 'vue-axios'

// Create the Vue App
const app = createApp(App);
// Use Vue Axios and Axios
//app.use(VueAxios, axios);
// Mount the App
app.mount('#app')
