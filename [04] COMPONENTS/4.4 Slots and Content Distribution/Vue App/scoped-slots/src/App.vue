<!--
IMPORTANT NOTES
    1. USE of CHILD COMPONENTS step-by-step
        1) USE the Component in the <template> section passing values to its props 
          (users) via custom HTML attributes (users) and Attribute Binding (v-bind/:).
           Fills the Default Slot (#default) with HTML content that depends on the 
           user item specified in the Child Component
           -- in <template></template> section
        2) IMPORT the component vue file. -- in <script></script>
        3) REGISTER the Component. -- in <script></script> components
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- 1. USE the component PASSING PROPERTIES via HTML ATTRIBUTE as well as 
       HTML CONTENT in the DEFAULT SLOT -->
  <UserList :users="[{id:1, name:'Alice'},{id:2, name:'Bob'},{id:3, name:'Matt'}]">
    <template #default="{user}">
        <ul>
          <li>{{ user.name }}</li>
        </ul>
      </template>
  </UserList>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  // 2. IMPORT the component
  import UserList from './components/UserList.vue'

  export default {
    name: 'App',
    // 3. REGISTER the component
    components: {
      UserList
    }
  }
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  li {
    /* FONT Properties */
    color:brown;
    font-size: 15pt;
    font-weight: bold;
    font-family: "Arial", sans-serif;
    /* BOX Properties */
    border: 1px dashed purple;
    margin: 2px 50px;
  }
</style>
