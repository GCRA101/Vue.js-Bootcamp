<!--
IMPORTANT NOTES
    1. USE of AXIOS in App.vue STEP-BY-STEP
        1) Import AXIOS in <script></script> section if Global Axios Configuration is
           not used (Axios Instance is used in this case)
        2) Set up Reactive State with following variables
            2.1 Variable storing data coming from API
            2.2 Bool Control Parameter to display loading message to user 
                during async operations
            2.3 Variable storing encountered error if any
        3) Define Async mounted() Lifecycle Hook
            3.1 Execute async HTTP GET Request via AXIOS INSTANCE <<<<<<<<<<<<<<<
            3.2 Extract data from returned parsed json object
            3.3 Assign value to reactive Error object
            3.4 Toggle Bool Control Parameter for displaying loading message
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <h2>User List</h2>
    <!-- Conditional Vue Directives for handling loading and errors -->
    <div v-if="loading">Loading users...</div>
    <!-- Text Interpolation -->
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <!-- Rendering Lists with Vue Directive v-for + Text Interpolation -->
      <li v-for="user in users" :key="user.id"> {{ user.name }}</li>
    </ul>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// IMPORT AXIOS here if using LOCAL Axios Configuration
import api from './services/api'

export default {

  // Name of the Component and its Custom HTML TagName
  name: 'App',

  // Reactive State
  data() {
    return {
      /* Variable storing data coming from API      <<<<<<<<<< */
      users: [],
      /* Bool Control Parameter to display loading
      message to user during async operations       <<<<<<<<<< */
      loading: true,
      /* Variable storing encountered error if any  <<<<<<<<<< */
      error: null
    }
  },

  // ASYNC mounted() LIFECYCLE HOOK <<<<<<<<<< 
  async mounted() {
    try {
      /* Execute async HTTP GET Request via AXIOS INSTANCE <<<<<<<<< */
      const res = await api.get('/users');
      /* Extract data from returned parsed json object */
      this.users = res.data;
    } catch (error) {
      /* Assign value to reactive Error object */
      this.error = 'Failed to load user data';
      console.error(error);
    } finally {
      /* Toggle Bool Control Parameter for displaying loading message */
      this.loading = false;
    }
  }
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  h2 {
    /* COLOR Properties */
    background-color: #ECE7D1;
    /* FONT Properties */
    color: #8A7650;
    font-size: 50px;
    font-weight: 900;
    font-family: "Fleur De Leah", cursive;
    text-align: center;
    text-shadow: 0px 0px 10px #8E977D;
    /* BOX Properties */
    border: 3px solid #8E977D;
    margin: 0px 50px 20px 50px;
    padding: 0px;
    box-shadow: 0px 10px 10px #8E977D;
    /* POSITION Properties */
    position: fixed;
    top:2vh;
    left: 10vw;
    /* DIMENSION Properties */
    min-width: 200px;
    width: 1200px;
    /* DISPLAY Properties */
    display: block;
  }
  ul {
    /* COLOR Properties */
    background-color: #DBCEA5;
    /* FONT Properties */
    font-size: 20px;
    font-weight: light;
    font-family: "The Girl Next Door", cursive;
    text-align: left;
    text-shadow: 0px 2px 3px black;
    /* BOX Properties */
    border: 1px solid #8E977D;
    padding: 10px 50px;
    margin: 0px;
    border-radius: 10%;
    box-shadow: 0px 20px 10px #8E977D;
    /* POSITION Properties */
    position: absolute;
    top:100px;
    left: 42vw;
  }
</style>
