<!--
IMPORTANT NOTES
    1. USE of AXIOS in App.vue STEP-BY-STEP
        1) Import AXIOS in <script></script> section if LOCAL Axios Configuration is
          used (applies to this case) - <script></script>
        2) Set up Reactive State with following variables - <script></script>
            2.1 Variable storing data coming from API
            2.2 Bool Control Parameter to display loading message to user 
                during async operations
            2.3 Variable storing encountered error if any
        3) Define Async mounted() Lifecycle Hook - <script></script>
            3.1 Execute async HTTP GET Request via LOCAL AXIOS object
            3.2 Extract data from returned parsed json object
            3.3 Assign value to reactive Error object
            3.4 Toggle Bool Control Parameter for displaying loading message
        4) Use Vue Directive v-if, v-else-if, v-else to handle loading and errors <<<<
        5) Use Vue Directive v-for to render list of data returned from the API <<<<<<
        6) Use Dynamic styling to assign css styles to data retrieved from the API <<<
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div id="app">
    <h2>Posts</h2>
    <!-- Conditional Vue Directives for handling loading and errors -->
    <!-- Inform about Loading Data...-->
    <div v-if="loading">
      <p>Loading posts...</p>
    </div>
    <!-- Inform about Error...-->
    <div v-else-if="error">
      <!-- Text Interpolation -->
      <p>{{ error }}</p>
    </div>
    <!-- Carry on rendering list of posts fetched from API otherwise...-->
    <ul v-else>
      <!-- Dynamic Styling -->
      <li 
        v-for="post in posts"
        :key="post.id"
        :class="{published: post.published, draft: !post.published}"
      >
          <!-- Text Interpolation -->
          <h3 v-if="post.title" id="post-title">{{ post.title }}</h3>
          <p v-if="post.body" id="post-body"> {{ post.body }}</p>
          <p v-else><em>No content available.</em></p>
      </li>
    </ul>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 1. IMPORT AXIOS using BASIC LOCAL CONFIGURATION <<<<<<<<<<
import axios from 'axios'

export default {
  // The Name of the Component and its Custom HTML TagName
  name: 'App',
  // The Reactive State
  data() {
    return {
      // Variable storing the data returned from the API 
      posts: [],
      // Bool Control Parameter to toggle loading message
      loading: true,
      // Variable storing error information
      error: null
    }
  },
  // ASYNC mounted() LIFECYCLE HOOK <<<<<<<<<< 
  async mounted() {
    try{
      // Execute ASYNC HTTP GET Request via AXIOS
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // Extract parsed json response and store it into reactive state
      this.posts=res.data;
    } catch(err) {
      // Assign error message to reactive error variable
      this.error = 'Failed to load posts.'
      console.error(err)
    } finally {
      // Untoggle loading message setting bool control parameter to false
      this.loading=false
    }
  }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  .published {
    color: green;
  }
  .draft {
    color: gray;
    font-style: italic;
  }

  #app {
    /* DISPLAY Property */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
  }

  h2 {
    /* COLOR Properties */
    background-color: #BED4CB;
    /* FONT Properties */
    font-size: 50px;
    font-weight: 900;
    font-family: "Luxurious Script", cursive;
    text-align: left;
    text-shadow: 0px 0px 20px black;
    /* BOX Properties */
    border: 2px solid black;
    margin: 5px 20px;
    padding: 2px 20px;
    box-shadow: 0px 10px 25px grey;
    /* FLEX Properties */
    align-self: stretch;
  }

  #post-title {
    /* FONT Properties */
    color: #B35656;
    text-shadow: 0px 5px 2px lightgrey;
  }

  #post-body {
    /* FONT Properties */
    color: #87B6BC;
    text-shadow: 0px 1px 2px black;
  }
</style>
