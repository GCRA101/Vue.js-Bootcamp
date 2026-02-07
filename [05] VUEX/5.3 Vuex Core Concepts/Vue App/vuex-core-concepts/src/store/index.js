/* IMPORTANT NOTES
    1. Location of index.js
        - the js file containing the creation/definition of the Store 
          object must be placed in the folder src/store !!
    2. CREATE VUEX STORE Step-by-Step
        1) IMPORT the createStore() function from VUEX
        2) CREATE VUEX STORE Object
            2.1 Create the STATE
            2.2 Create the GETTERS
            2.3 Create the MUTATIONS
            2.4 Create the ACTIONS
        3) EXPORT the VUEX STORE object
    3. Mounting the Store Object on the Vue App
        - Get into the main.js file and do the steps below
            1) IMPORT the STORE object
            2) USE the STORE object on the mounting VUE APP object
*/


// 1. IMPORT the function createStore() from Vuex
import {createStore} from 'vuex';

// 2. Create new Vuex Store Object
const store = createStore({
    // 2.1. STATE - The Reactive State of the Vuex Store
    state: {
        count: 0,
    },
    // 2.2. GETTERS - Functions returning computed info about the Reactive State
    getters: {
        // Method taking the STATE as input and returning info/data about it.
        isEven(state) {
            return state.count %2 == 0;
        }
    },
    // 2.3. MUTATIONS - Synchronous functions modifying the Reactive State
    mutations: {
        // Method taking the STATE as input and changing values of its variables
        increment(state) {
            state.count++;
        }
    },
    // 2.4. ACTIONS - Asynchronous functions doing operations before running a mutation
    actions: {
        /* Method taking the commit method as input and using it to execute a 
           a specific MUTATION method after carrying out other operations */
        delayedIncrement({commit}) {
            setTimeout(()=> {commit('increment')},1000);
        }
    }
});

// 3. EXPORT the VUEX STORE object
export default store;