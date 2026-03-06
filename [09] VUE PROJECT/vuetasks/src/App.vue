

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div id="app">
    <nav>
      <!-- VUE ROUTER ANCHORS -->
      <router-link to="/">All</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/pending">Pending</router-link>
    </nav>
    <!-- VUE ROUTER PLACEHOLDER -->
    <router-view></router-view>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>


export default {
  name: 'App',
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
