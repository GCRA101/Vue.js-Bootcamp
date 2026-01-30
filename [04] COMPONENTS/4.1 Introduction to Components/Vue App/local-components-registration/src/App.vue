<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <PostCard title="My First Post" summary="A quick intro to Vue.js"></PostCard>
    <PostCard title="Learning Props" summary="Understanding how data flows."></PostCard>
  </div>
</template>

<script>
// LOCAL Registration of Vue Components
import PostCard from './components/PostCard.vue'

export default {
  name: 'App',
  // LOCAL Registration of Vue Components
  components: {
    PostCard
  }
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
