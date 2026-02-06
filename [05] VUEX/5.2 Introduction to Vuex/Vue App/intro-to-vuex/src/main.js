/* IMPORTANT NOTES
    1. Mounting the Store Object on the Vue App
        1) IMPORT the STORE object from the src/store/ folder
        2) USE the STORE object on the mounting VUE APP object
*/

import { createApp } from 'vue'
import App from './App.vue'

// 1. IMPORT the STORE object from the store/ folder
import store from './store';

// 2. Create and mount the Vue App USING the STORE object
createApp(App).use(store).mount('#app');
