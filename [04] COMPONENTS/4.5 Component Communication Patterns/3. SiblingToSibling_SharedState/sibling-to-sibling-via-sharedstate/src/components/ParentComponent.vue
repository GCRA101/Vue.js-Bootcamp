<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE Sibling Component 01 in the <template> section adding an Event Listener 
           to the CUSTOM EVENT emitted by the Child Component (using v-on/@) + USE
           Sibling Component 02 passing to its props the values returned by Sibling 01.
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
    <div>
        <!-- 1a. USE one Child Component HANDLING the EMITTED CUSTOM EVENT -->
        <SiblingA @message-sent="handleMessage" />
        <!-- 1b. USE the other Child Component BINDING message ATTRIBUTE -->
        <SiblingB :message="sharedMessage" />
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // 2. IMPORT the Child Components
    import SiblingA from './SiblingA.vue';
    import SiblingB from './SiblingB.vue';

    export default {
        // The Name of the Component and its HTML TagName
        name: 'ParentComponent',
        // 3. REGISTER the Child Components
        components: { SiblingA, SiblingB },
        data() {
            return {sharedMessage:''}
        },
        // Methods
        methods: {
            // 4. HANDLE the CUSTOM EVENT EMITTED by the Child Component
            handleMessage(msg) {
                this.sharedMessage = msg;
            }
        }
    }
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: beige;
        /* BOX Properties */
        border: 2px solid black;
        margin: 20px;
        padding: 0px;
        /* POSITION Properties */
        position: relative;
        top:15vh;
        left: 25vw;
        /* SIZE Properties */
        height: 50vh;
        width: 50vw;

    }
</style>
