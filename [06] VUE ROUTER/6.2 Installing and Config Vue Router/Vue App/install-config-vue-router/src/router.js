/* IMPORTANT NOTES
    1. KEEP ROUTING LOGIC in ONE SINGLE PLACE
        - All routing logic is best to be placed in a src/router.js file
    2. ROUTER CREATION Step-By-Step
        1) IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
        2) IMPORT Views
        3) CREATE Routes
        4) CREATE ROUTER (passing HISTORY and ROUTES)
        5) EXPORT ROUTER
*/


// 1. IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
import {createRouter, createWebHistory} from 'vue-router';
// 2. IMPORT VIEWS
import HomeView from './views/Home.vue';
import AboutView from './views/About.vue';

// 3. CREATE ROUTES
const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView}
]

// 4. CREATE ROUTER passing HISTORY and ROUTES
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 5. EXPORT ROUTER
export default router