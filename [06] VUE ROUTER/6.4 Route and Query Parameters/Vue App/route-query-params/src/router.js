/* IMPORTANT NOTES
    1. KEEP ROUTING LOGIC in ONE SINGLE PLACE
        - All routing logic is best to be placed in a src/router.js file
    2. ROUTER CREATION Step-By-Step
        1) IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
        2) IMPORT Views
        3) CREATE ROUTES
        4) CREATE ROUTER (passing HISTORY and ROUTES)
        5) EXPORT ROUTER
*/

// 1. IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
import {createRouter, createWebHistory} from 'vue-router'

// 2. IMPORT VIEWS
import UserProfile from './views/UserProfile.vue'
import SearchView from './views/Search.vue'

// 3. CREATE ROUTES
const routes =[
    {path: '/user/:id', name: 'UserProfile', component: UserProfile},
    {path: '/search', name: 'Search', component: SearchView}
]

// 4. CREATE ROUTER passing HISTORY and ROUTES
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 5. EXPORT ROUTER
export default router