<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing values to its props via
           custom HTML attributes. -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script> section
        3) REGISTER the Component. -- in <script></script> section
    2. ASSIGN CSS STYLING to the Child Component
        - It's just enough to assign to it a class value (e.g. 'child-component') and 
          use its corresponding class selector to assign to it css styling properties
          in the <style scoped></style> section of the this .vue file.
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- 1. USE the component passing PROPERTY VALUE -->
    <ChildComponent class="child-component" name="Vue Learner"></ChildComponent>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
  import ChildComponent from './ChildComponent.vue';

  export default {
        // 3. REGISTER the component
        components: { 
            ChildComponent 
    }
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .child-component {
        /* COLOR Properties */
        background-color: antiquewhite;
        /* FONT Properties */
        color:red;
        font-size: 30px;
        font-weight: 100;
        font-family: "UnifrakturMaguntia", cursive;
        text-align: center;
        /* BOX Properties */
        border: 3px solid brown;
        padding: 5px 20px;
        margin: 50px;
        /* POSITION Properties */
        position: relative;
        top: 10vh;
        left: 5vw;
        /* DIMENSION Properties */
        width: 50vw;
    }
</style>
