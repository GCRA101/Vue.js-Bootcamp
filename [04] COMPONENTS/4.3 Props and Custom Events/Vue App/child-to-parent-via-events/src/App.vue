<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing values to its props via
           custom HTML attributes and adding Event Listener to the EMITTED EVENT 
           via v-bind(@). 
           -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
        4) HANDLE the emitted event. -- in <script></script> methods

-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- 1. USE the component HANDLING the EMITTED EVENT -->
  <UserCard name="Jane Doe" @greet="handleGreet"></UserCard>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
import UserCard from './components/UserCard.vue'

export default {
  name: 'App',
  // 3. REGISTER the component
  components: {
    UserCard
  },
  // 4. HANDLE the EMITTED EVENT and the RETURNED DATA from the CHILD COMPONENT
  methods: {
    handleGreet(name) {
      alert(`Hello, ${name}!`);
    }
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
