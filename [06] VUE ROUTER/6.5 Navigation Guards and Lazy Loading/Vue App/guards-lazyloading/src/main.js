/* IMPORTANT NOTES
    1. Mounting the VUE ROUTER Object on the Vue App
        1) IMPORT the ROUTER Object from the src/ folder
        2) Create the Vue App
        3) USE the VUE ROUTER object on the APP
        4) MOUNT the APP
*/

import { createApp } from 'vue'
import App from './App.vue'

// 1. IMPORT the ROUTER Object from the src/ folder <<<<<<<<<<<<<<
import router from './router'
// 2. Create the Vue App
const app = createApp(App)
// 3. USE the VUE ROUTER on VUE APP <<<<<<<<<<<<<<
app.use(router)
// 4. Mount Vue App
app.mount('#app')
