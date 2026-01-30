import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// GLOBAL Registration of the Components
import BaseButton from './components/BaseButton.vue';
app.component("BaseButton", BaseButton);

app.mount('#app')
