import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');

// expose app globally if you want to call unmount from inside 
window.__APP__ = app;
