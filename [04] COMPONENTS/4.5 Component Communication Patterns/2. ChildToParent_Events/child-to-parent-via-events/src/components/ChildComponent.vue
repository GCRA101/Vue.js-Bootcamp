<!--
IMPORTANT NOTES
    1. Passing Data Child-To-Parent via Custom Events
        - The custom events that can be emitted by the component are listed in the emits 
          section of the <script></script> element below.
          Using the $emit() method in whatever local event handler, it is possible to
          emit the event so that it gets visible to the Parent Component while passing
          to it additional data (string 'Child says hi!' in this case...).
    2. Props as JS Objects
        - Props can be defined as JS Objects (i.e. collections of attributes assigned with
          values)
        - Key attributes are as follows:
            - required: true/false
            - type:...

-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <button @click="$emit('clicked','Child says hi!')">Click Me</button>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // The Name of the Component and its HTML TagName
    name: 'ChildComponent',
    // The Custom Events that can be emitted by the Component
    emits: ['clicked']
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    button {
        /* COLOR Properties */
        background-color: grey;
    }
</style>
