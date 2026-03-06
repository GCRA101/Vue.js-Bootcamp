
// 1. IMPORT AXIOS INSTANCE
import api from '@/services/api';

// 2. REACTIVE STATE Set-Up
// - Shared and Reactive Variables
const state = {
    // Variable storing data retrieved from API via HTTP Requests
    tasks: [],
    // Bool Control Parameter for toggling loading message
    loading: false,
    // Error Object containing info about encountered error
    error: null
}

// 3. GETTERS Set-Up
// - Methods returning info/data about the Reactive State
const getters = {
    allTasks: state => state.tasks,
    isLoading: state => state.loading
}

// 4. MUTATIONS Set-Up
// - Synchronous Functions that modify the Reactive State
const mutations = {
    // Replace existing tasks with input tasks
    SET_TASKS(state, tasks) {
        state.tasks = tasks;
    },
    // Add input task to tasks list
    ADD_TASK(state, task) {
        state.tasks.push(task);
    },
    // Set loading variable to input bool value
    SET_LOADING(state, isLoading){
        state.loading = isLoading;
    },
    // Set error variable to input error value
    SET_ERROR (state, error) {
        state.error=error;
    }
};

// 5. ACTIONS Set-Up
// - Asynchronous Functions carrying out operations before
//   committing a Mutation.
const actions = {
    // Action fetchTasks
    async fetchTasks({commit}) {
        // Execute the Mutation SET_LOADING
        commit('SET_LOADING',true);
        try {
            // Execute HTTP GET Request
            const response = await api.get('/todos?_limit=5');
            // Execute the Mutation SET_TASKS
            commit('SET_TASKS', response.data);
        } catch (err) {
            // Execute the Mutation SET_ERROR
            commit('SET_ERROR', err);
        } finally {
            // Execute the Mutation SET_LOADING
            commit('SET_LOADING', false);
        }
    },
    // Action addTask
    async addTask({commit}, newTask) {
        // Execute HTTP POST Request
        const response = await api.post('/todos', newTask);
        // Execute the Mutation ADD_TASK
        commit('ADD_TASK', response.data);
    }
};

// 6. EXPORT MODULE
export default {
    namespaced: true, // IMPORTANT! This parameter ensures modularity!!
    state,
    getters,
    mutations,
    actions
};