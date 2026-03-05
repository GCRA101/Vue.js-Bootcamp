/* IMPORTANT NOTES
    1. CREATION of ROUTES AND ROUTER - STEP-BY-STEP
        1) IMPORT Functions to CREATE the VUE-ROUTER
        2) IMPORT Vue Files for VIEWS
        3) CREATE ROUTES and REGISTER COMPONENTS to them
        4) CREATE ROUTER
        5) EXPORT ROUTER
*/

// 1. IMPORT Functions to CREATE the VUE-ROUTER
import {createRouter, createWebHistory} from 'vue-router';

// 2. IMPORT vue files for VIEWS
import AllTasks from '../views/AllTasks.vue';
import CompletedView from '../views/CompletedView.vue';
import PendingView from '../views/PendingView.vue';

// 3. CREATE ROUTES and REGISTER COMPONENTS
const routes = [
    {path: '/', name: 'AllTasks', component: AllTasks},
    {path: '/completed', name: 'Completed', component: CompletedView},
    {path: '/pending', name: 'Pending', component: PendingView}
];

// 4. CREATE ROUTER
const router = createRouter({
    // Simulate Web History for SPA
    history: createWebHistory(),
    // Register Routes
    routes,
});

// 5. EXPORT ROUTER
export default router;