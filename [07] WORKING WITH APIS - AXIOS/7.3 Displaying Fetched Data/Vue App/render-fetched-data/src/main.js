/* IMPORTANT NOTES
    1. USE of LOCAL Axios CONFIGURATION
        - Since the implementation of Axios is made using
          a LOCAL CONFIGURATION directly in the vue component
          (in this case App.vue), there's no need to import it in here.
*/

import { createApp } from 'vue'
import App from './App.vue'

// Create the Vue App
const app =createApp(App);
// Mount the App
app.mount('#app');
