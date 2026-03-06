


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <ul>
        <!-- 1. USE the Child Component - v-for + v-bind + v-on -->
        <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @task-updated="$emit('task-updated', $event)"
        />
    </ul>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // 2. IMPORT Child Component
    import TaskItem from './TaskItem.vue'

    export default {
        // PROPERTIES
        props: ['tasks'],
        // 3. REGISTER Child Component
        components: {TaskItem}
    };
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>


</style>