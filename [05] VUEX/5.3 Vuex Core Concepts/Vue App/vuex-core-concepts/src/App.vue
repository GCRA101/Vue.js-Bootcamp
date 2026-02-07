<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing values to its props 
          via custom HTML attributes. -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script> section
        3) REGISTER the Component. -- in <script></script> section
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- 1. USE the CHILD COMPONENT -->
  <GenericComponent></GenericComponent>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 2. IMPORT the CHILD COMPONENT
import GenericComponent from './components/GenericComponent.vue';

export default {
  // The Name of the App Component and its Custom HTML TagName
  name: 'App',
  // 3. REGISTER the CHILD COMPONENT
  components: {
    GenericComponent
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
