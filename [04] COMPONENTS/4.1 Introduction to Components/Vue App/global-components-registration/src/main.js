/*
IMPORTANT NOTES:
    1) GLOBAL Registration of Components
        - The GLOBAL registration of a component is carried out in the main.js script using the
          following instructions as per Vue3 syntax:
            - import <ComponentName> from 'FilePath'
            - app.component('RegisteredName', ComponentName)
*/

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// GLOBAL Registration of Components
import PostCard from './components/PostCard.vue';
app.component('PostCard',PostCard);


app.mount('#app')

