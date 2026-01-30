
<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <!-- 1. USE the COMPONENT BaseButton -->
    <BaseButton @click="sayHello">Say Hello</BaseButton>
  </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>

export default {
  name: 'App',
  methods: {
    sayHello() {
      alert('Hello from BaseButton');
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
