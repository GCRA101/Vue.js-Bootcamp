/* IMPORTANT NOTES
    1. CREATION of VUEX STORE STEP-BY-STEP
        1) IMPORT createStore() Function from VUEX
        2) IMPORT Vuex Store Modules
        3) CREATE VUEX STORE registering the MODULES
        4) EXPORT VUEX STORE
*/

// 1. IMPORT createStore() Function from VUEX
import {createStore} from 'vuex';
// 2. IMPORT Vuex Store MODULES
import tasks from './modules/tasks';

// 3. CREATE + EXPORT VUEX STORE
export default createStore ({
    modules: {
        tasks
    }
});