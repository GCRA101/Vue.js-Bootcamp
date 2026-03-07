

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <TaskForm @task-added="handleAddTask"/>
        <div v-if="loading">Loading tasks...</div>
        <TaskList :tasks="tasks" @task-updated="updateTaskLocally"/>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>

    import {mapActions, mapGetters} from 'vuex';
    // 2. IMPORT Child Components
    import TaskForm from '../components/TaskForm.vue';
    import TaskList from '../components/TaskList.vue';

    export default {
        // 3. REGISTER Child Components
        components: {TaskForm, TaskList},

        // COMPUTED
        computed: {
            ...mapGetters('tasks', ['allTasks', 'isLoading']),
            tasks() {
                return this.allTasks.filter(task => !task.completed);
            },
            loading() {
                return this.isLoading;
            }
        },

        // METHODS
        methods: {
            ...mapActions('tasks', ['fetchTasks', 'addTask']),
            async handleAddTask(task) {
                await this.addTask(task);
            },
            updateTaskLocally(updatedTask) {
                console.log('Task updated:', updatedTask);
            }
        },
        
        // LIFE-HOOKS
        created() {
            this.fetchTasks();
        }
    };
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>