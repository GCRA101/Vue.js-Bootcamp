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
    <div>
        <h1 style='font-family: "Mogra", system-ui; margin: 10px;'>TODAY IN CINEMAS</h1>
        <hr/>
        <!-- 1. USE Child Component with Attributes Binding -->
        <GrandChild :title="movieTitle"></GrandChild>
        <hr/>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 2. IMPORT Child Component
import GrandChild from './GrandChild.vue'

export default {
    // Name of the Component and its Custom HTML TagName
    name: 'ChildComponent',
    // List of Child Components
    components: {GrandChild},
    data() {
        return {
            movieTitle:'Il Gladiatore'
        }
    }
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color:#a0144f;
        /* FONT Properties */
        color: white;
    }
</style>
