/* IMPORTANT NOTES
    1. Location of index.js
        - the js file containing the creation/definition of the Store 
          object must be placed in the folder src/store !!
    2. CREATE VUEX STORE WITH MODULES Step-by-Step
        1) IMPORT the createStore() function from VUEX
        2) IMPORT the STORE MODULES
        3) CREATE VUEX STORE Object
        4) REGISTER STORE MODULES
        5) EXPORT the VUEX STORE object
    3. Mounting the Store Object on the Vue App
        - Get into the main.js file and do the steps below
            1) IMPORT the STORE object
            2) USE the STORE object on the mounting VUE APP object
*/

// 1. Import createStore() method from Vuex
import {createStore} from 'vuex';
// 2. Import Store Modules
import auth from './modules/auth';
import cart from './modules/cart';

// 3. Create Vuex Store Object
const store = createStore({
    // 4. Register Store Modules
    modules: {
        auth,
        cart
    }
});

// 5. EXPORT the VUEX STORE object
export default store;