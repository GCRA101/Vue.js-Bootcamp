<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing HTML Content
           into its DEFAULT and NAMED SLOTS simply writing it between the Child Component
           opening and closing HTML Tags (i.e. <CardWithHeader></CardWithHeader>) 
           with/without reference to the slot name (i.e. #header). 
           -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- USE the component PASSING HTML CONTENT in the DEFAULT and NAMED SLOT -->
  <CardWithHeader>
    <!-- Pass Html Content to the NAMED SLOT -->
    <template #header>
      <h1>Dashboard</h1>
    </template>
    <!-- Pass Html Content to the DEFAULT SLOT -->
    <p>This is your dashboard content.</p>
  </CardWithHeader>    
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
  import CardWithHeader from './components/CardWithHeader.vue'

  export default {
    name: 'App',
    // 3. REGISTER the component
    components: {
      CardWithHeader
    }
  }
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
