


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <li>
        <label>
            <!-- Two-Way Binding + Event Handling -->
            <input type="checkbox" v-model="localTask.completed" @change="emitChange"/>
            <!-- Attribute Binding + Text Interpolation -->
            <span :class="{done: localTask.completed}">{{ localTask.title }}</span>
        </label>
    </li>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // PROPERTIES
    props: ['task'],

    // REACTIVE STATE
    data() {
        return {
            localTask: {...this.task}
        };
    },

    // METHODS
    methods: {
        /* Event Handler Method run when the 'change' event occurs in the <input> 
           HTML element. It emits the custom event 'task-updated' while returning 
           the object this.localTask to the Parent Component. */
        emitChange() {
            this.$emit('task-updated', this.localTask);
        }
    }
};
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .done {
        /* FONT Properties */
        color: darkgray;
        font-style: italic;
        font-weight: normal;
        text-decoration: line-through;
    }
    span {
        /* FONT Properties */
        font-weight: bold;
        text-shadow: 1px 0px 10px #89D4FF;
    }
</style>