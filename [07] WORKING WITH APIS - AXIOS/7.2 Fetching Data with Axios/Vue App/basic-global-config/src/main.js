/* IMPORTANT NOTES
    1. Mounting AXIOS on the Vue App via GLOBAL AXIOS CONFIGURATION
        1) IMPORT AXIOS
        2) DEFINE AXIOS BASE URL AND HEADERS
        3) EXPOSE AXIOS to COMPONENTS
        3) MOUNT the APP
*/

import { createApp } from 'vue'
import App from './App.vue'

// 1. IMPORT AXIOS <<<<<<<<<<<<<<
import axios from 'axios'
// 2. DEFINE AXIOS BASE URL and HEADERS <<<<<<<<<<<<<<
axios.defaults.baseURL='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization']='BearerTokenHere'
// 3. Create the Vue App
const app = createApp(App)
// 4. EXPOSE AXIOS TO COMPONENTS <<<<<<<<<<<<<<
app.config.globalProperties.$axios = axios
// 5. MOUNT the APP
app.mount('#app')
