
<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <!-- 1. USE the COMPONENT BaseButton -->
    <BaseButton @click="sayHello">Say Hello</BaseButton>
  </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 2. IMPORT the COMPONENT BaseButton
import BaseButton from './components/BaseButton.vue';

export default {
  name: 'App',
  // 3. REGISTER the COMPONENT BaseButton
  components: {
    BaseButton
  },
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
