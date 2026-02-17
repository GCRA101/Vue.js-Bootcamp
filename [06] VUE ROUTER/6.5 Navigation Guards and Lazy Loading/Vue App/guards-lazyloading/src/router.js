/* IMPORTANT NOTES
    1. KEEP ROUTING LOGIC in ONE SINGLE PLACE
        - All routing logic is best to be placed in a src/router.js file
    2. ROUTER CREATION Step-By-Step
        1) IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
        2) IMPORT Views
        3) CREATE Routes with GLOBAL and PER-ROUTE GUARDS
        4) CREATE ROUTER (passing HISTORY and ROUTES)
        5) DEFINE GLOBAL GUARDS
        6) EXPORT ROUTER
    3. LAZY LOADING <<<<<<<<<<<<<<<<
        - Vue CLI tends to bundle everything into one big Javascript file.
          Lazy loading splits the app into chunks and loads them on demand
          making the initial load faster.
        - Instead of directly importing a component, we use dynamic imports.
*/

// 1. IMPORT methods createRouter() and createWebHistory() from VUE ROUTER
import { createRouter, createWebHistory } from "vue-router";

// 2. IMPORT VIEWS
import Login from './views/Login.vue'

// 3. CREATE ROUTES
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/other',
        name: 'Other',
        component: () => import('./views/Other.vue')       // LAZY LOADING
    },
    // STANDARD GLOBAL GUARDS
    {
        path: '/dashboard', 
        name: 'Dashboard', 
        component: () => import('./views/Dashboard.vue'),  // LAZY LOADING
        meta: {requiresAuth:true}
    },
    // PER-ROUTE GUARDS
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./views/Admin.vue'),      // LAZY LOADING
        meta: {requiresAuth:true},
        beforeEnter: (to,from,next) => {
            const isAdmin = localStorage.getItem('role') === 'admin'
            isAdmin ? next() : next('/dashboard')
        }
    }
]

// 4. CREATE ROUTER passing HISTORY and ROUTES
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 5. DEFINE GLOBAL GUARDS
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth') === 'true'
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

// 6. EXPORT ROUTER
export default router