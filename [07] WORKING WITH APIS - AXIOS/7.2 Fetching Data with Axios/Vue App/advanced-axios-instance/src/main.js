/* IMPORTANT NOTES
    1. USE of AXIOS INSTANCE
        Since the implementation of Axios is made by using an
        Axios instance, there's no need to import it in here.
*/

import { createApp } from 'vue'
import App from './App.vue'

// Create the Vue App
const app = createApp(App)
// Mount the APP
app.mount('#app')
