

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <!-- 1. USE the Child Components - v-on + v-bind -->
        <TaskForm @task-added="addTask"/>
        <TaskList :task="tasks" @task-updated="updateTask"/>
    </div>
</template>                                                 


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // 2. IMPORT Child Components
    import TaskForm from '../components/TaskForm.vue';
    import TaskList from '../components/TaskList.vue';

    export default {
        // 3. REGISTER Child Components
        components: {TaskForm, TaskList},
        // REACTIVE STATE
        data() {
            return {
                tasks: []
            }
        },
        // METHODS
        methods: {
            // Add Input Task to this.tasks data structure
            addTask(task) {
                this.tasks.push(task);
            },
            // Update existing task with input task based on id
            updateTask(updatedTask) {
                const index = this.tasks.findIndex(t=>t.id===updatedTask.id);
                if (index!==-1) this.tasks.splice(index,1,updatedTask);
            }
        }
    };
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
