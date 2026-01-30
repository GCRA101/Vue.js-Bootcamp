<!--
IMPORTANT NOTES:
    1) NO NEED to IMPORT and REGISTER COMPONENTS
        - Since the components are already registered GLOBALLY in the main.js file,
          there's no need to import them and register them in any vue file !!
-->


<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <PostCard title="My First Post" summary="A quick intro to Vue.js"></PostCard>
    <PostCard title="Learning Props" summary="Understanding how data flows."></PostCard>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

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
