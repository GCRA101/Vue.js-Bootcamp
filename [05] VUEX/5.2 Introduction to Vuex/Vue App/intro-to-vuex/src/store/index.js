/* IMPORTANT NOTES
    1. Location of index.js
        - the js file containing the creation/definition of the Store 
          object must be placed in the folder src/store !!
    2. Store Object Creation step-by-step
        1) IMPORT the createStore() function from VUEX
        2) CREATE the VUEX STORE object
        3) EXPORT the VUEX STORE object
    3. Mounting the Store Object on the Vue App
        - Get into the main.js file and do the steps below
            1) IMPORT the STORE object
            2) USE the STORE object on the mounting VUE APP object
*/

// 1. IMPORT the createStore() function from VUEX
import {createStore} from 'vuex';

// 2. CREATE the VUEX STORE object
const store = createStore({
    // STATE - list of Reactive Objects/Variables
    state: {
        count: 0
    },
    // MUTATIONS - list of functions used to modify the Reactive State
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    /* ACTIONS - list of Asynchronous functions running operations before
       committing a mutation */
    actions: {
        asyncIncrement({commit}) {
            setTimeout(() => {
                commit('increment');
            }, 500);
        }
    },
    /* GETTERS - list of methods returning computed values from 
       the Reactive State */
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
});

// 3. EXPORT the VUEX STORE object
export default store;