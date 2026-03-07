<!-- IMPORTANT NOTES 
    1. Component .vue file having the following features
        - TEMPLATE (Html)
            - <li> HTML element restricting the use of the component inside an HTML
              list element - ordered <ol></ol> or un-ordered <ul></ul>.
            - <label> HTML element
            - <input> HTML element of type checkbox for toggling task
            - <span> HTML element for displaying content of the task and assign to it
              different CSS Styling based on dynamic class assignment.
        - SCRIPT (Javascript)
            - Define Properties
            - Define Local Reactive State
            - Define Methods
                - Method emitChange() to emit custom event to transfer data to the 
                  vue parent component.
        - STYLE (CSS)
            - Use of CSS Font Properties
-->


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