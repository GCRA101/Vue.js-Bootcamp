<!--
IMPORTANT NOTES
    1. USE of AXIOS in App.vue STEP-BY-STEP
        - In this particular case, since AXIOS is used fully in the component
          Users.vue, no need to use it in here.
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <UsersComponent></UsersComponent>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
import UsersComponent from './components/Users.vue'

export default {
  name: 'App',
  components: {
    UsersComponent
  }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
