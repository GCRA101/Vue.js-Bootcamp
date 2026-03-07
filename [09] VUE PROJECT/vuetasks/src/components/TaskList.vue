<!-- IMPORTANT NOTES 
    1. Component .vue file having the following features
        - TEMPLATE (Html)
            - <TaskItem> vue component equipped with v-for, v-bind and v-on vue
              directives
        - SCRIPT (Javascript)
            - Import Child Components
            - Set-up properties
            - Register Child Components
        - STYLE (CSS) - Optional
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <ol>
        <!-- 1. USE the Child Component - v-for + v-bind + v-on -->
        <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @task-updated="$emit('task-updated', $event)"
        />
    </ol>
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