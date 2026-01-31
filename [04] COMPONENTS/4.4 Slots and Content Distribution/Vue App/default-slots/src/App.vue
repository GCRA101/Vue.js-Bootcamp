<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing HTML Content
           into its DEFAULT SLOT simply writing it between the Child Component
           opening and closing HTML Tags (i.e. <BaseCard></BaseCard>). 
           -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- USE the component PASSING HTML CONTENT inside the DEFAULT SLOT -->
  <BaseCard>
    <h2>Welcome</h2>
    <p>This content is passed from the parent.</p>
  </BaseCard>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
  import BaseCard from './components/BaseCard.vue'

  export default {
    name: 'App',
    // 3. REGISTER the component
    components: {
      BaseCard
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
