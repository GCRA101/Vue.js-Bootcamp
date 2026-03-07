<!-- IMPORTANT NOTES 
    1. View .vue file having the following features
        - TEMPLATE (Html)
            - TaskForm vue component allowing input of new task
            - <div> displaying loading message while fetching data from external api
            - TaskList vue component listing all tasks fetched from external api
        - SCRIPT (Javascript)
            - Import Helper Tools mapActions and mapGetters from Vuex to communicate
              with Central Store
            - Import Child Components
            - Register Child Components
            - Set-up Computed Properties using Vuex Store Module Getters
            - Set-up Methods using Vuex Store Module Actions
            - Set-up Life-Cycle Hooks (i.e. created())
        - STYLE (CSS) - optional
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <!-- 1. USE Child Components - v-on + v-if + v-bind -->
        <TaskForm @task-added="handleAddTask"/>
        <div v-if="loading">Loading tasks...</div>
        <TaskList :tasks="tasks" @task-updated="updateTaskLocally"/>
    </div>
</template>                                                 


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // IMPORT Helper Tools from VUEX to communicate with Central Store
    import {mapActions, mapGetters} from 'vuex';
    // 2. IMPORT Child Components
    import TaskForm from '../components/TaskForm.vue';
    import TaskList from '../components/TaskList.vue';

    export default {
        // 3. REGISTER Child Components
        components: {TaskForm, TaskList},

        // COMPUTED
        /* Computed properties returning reactive state data from Vuex Store
           Module using its getters. */
        computed: {
            ...mapGetters('tasks', ['allTasks', 'isLoading']),
            tasks() {
                return this.allTasks;
            },
            loading() {
                return this.isLoading;
            }
        },

        // METHODS
        /* Methods using the Vuex Store Module Actions to deal with adding
           and updating tasks. */
        methods: {
            ...mapActions('tasks', ['fetchTasks', 'addTask']),
            async handleAddTask(task) {
                await this.addTask(task);
            },
            updateTaskLocally(updatedTask) {
                console.log('Task updated:', updatedTask);
            }
        },
        
        // LIFECYCLE-HOOKS
        /* CREATED() - loads tasks via action fetchTasks() 
           as soon as the page opens*/
        created() {
            this.fetchTasks();
        }
    };
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
