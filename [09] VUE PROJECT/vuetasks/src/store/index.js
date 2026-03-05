/* IMPORTANT NOTES
    1. CREATION of VUEX STORE STEP-BY-STEP
        1) IMPORT createStore() Function from VUEX
        2) CREATE VUEX STORE setting out the following
            - Reactive State
            - Mutations
            - Actions
            - Getters
        3) EXPORT VUEX STORE
*/

// 1. IMPORT createStore() Function from VUEX
import {createStore} from 'vuex';

// 2. CREATE + EXPORT VUEX STORE
export default createStore ({

    // REACTIVE STATE
    /* List of Shared and Reactive Variables */
    state: {
        tasks: []
    },

    // MUTATIONS
    /* Synchronous Functions Modifying the Reactive State */
    mutations: {
        addTask(state,task) {
            // Add input task to reactive tasks array
            state.tasks.push(task);
        }
    },

    // ACTIONS
    /* Asynchronous Functions Doing Operations before committing Mutations */
    actions: {
        addTask({commit},task) {
            // Commit/Execute addTask mutation using input task
            commit('addTask', task);
        }
    },

    // GETTERS
    /* Functions Returning Information/data about the Reactive State */
    getters: {
        // Return list of completed tasks
        completedTasks: state => state.tasks.filter(t=>t.completed),
        // Return list of un-completed tasks - i.e. pending
        pendingTasks: state => state.tasks.filter(t=>!t.completed)
    }
});