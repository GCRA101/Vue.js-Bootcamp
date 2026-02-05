<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section adding an Event Listener to the
           CUSTOM EVENT emitted by the Child Component (using v-on/@)
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
        4) HANDLE the Custom Event Emitted by the Child Component 
           -- in <script></script> methods
    2. ASSIGN CSS STYLING to the Child Component
        - It's just enough to assign to it a class value (e.g. 'child-component') and 
          use its corresponding class selector to assign to it css styling properties
          in the <style scoped></style> section of the this .vue file.
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- 1. USE the Child Component HANDLING the EMITTED CUSTOM EVENT -->
    <ChildComponent class="child-component" @clicked="handleMessage"></ChildComponent>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // 2. IMPORT the Child Component
    import ChildComponent from './ChildComponent.vue';

    export default {
        // The Name of the Component and its HTML TagName
        name: 'ParentComponent',
        // 3. REGISTER the Child Component
        components: { ChildComponent },
        // Methods
        methods: {
            // 4. HANDLE the CUSTOM EVENT EMITTED by the Child Component
            handleMessage(message) {
                console.log(message);
            }
        }

    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>


</style>