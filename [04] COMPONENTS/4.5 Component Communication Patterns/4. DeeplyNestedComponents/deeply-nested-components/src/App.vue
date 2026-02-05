<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing values to its props via
           custom HTML attributes. -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script> section
        3) REGISTER the Component. -- in <script></script> section
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- 1. USE the Child Component Parent.vue -->
  <ParentComponent></ParentComponent>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
  import ParentComponent from './components/Parent.vue';

  export default {
    // Name of the component
    name: 'App',
    // 3. REGISTER the component
    components: {
      ParentComponent
    }
  }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
