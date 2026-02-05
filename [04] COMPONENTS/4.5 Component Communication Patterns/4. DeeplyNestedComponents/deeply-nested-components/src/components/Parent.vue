<!--
IMPORTANT NOTES
    1. USE of PROVIDE() to PASS PROPS to DESCENDANTS
        1) USE provide() to PASS Props to DESCENDANTS -- in <script></script>
    2. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section adding an Event Listener to the
           CUSTOM EVENT emitted by the Child Component (using v-on/@)
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
        4) HANDLE the Custom Event Emitted by the Child Component 
           -- in <script></script> methods
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <Child></Child>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// Import the Child Component
import Child from './Child.vue'

export default {
    // The Name of the Component and its custom HTML TagName
    name: 'ParentComponent',
    // 1. USE provide() to PASS Props to DESCENDANTS
    provide() {
        return {
            theme: 'dark'
        }
    },
    // Register the Child Components
    components: {Child}
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
