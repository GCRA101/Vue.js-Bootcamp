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
    <!-- Conditional Vue Directives for handling loading and errors -->
    <!-- Inform about Loading Data... - USE LOADING SPINNER -->
    <div v-if="loading" class="spinner">
      <img src="./assets/spinner.gif" alt="Loading data..."/>
      <p>Loading data...</p>
    </div>
    <!-- Inform about Error...-->
    <div v-else-if="error">
      <!-- Text Interpolation -->
      <p class="error"> {{ error }}</p>
      <!-- Event Handling - ALLOW RETRY ON ERROR -->
      <button @click="fetchData">Retry</button>
    </div>
    <!-- Carry on rendering list of users fetched from API otherwise...-->
    <ul v-else>
      <li v-for="user in data" :key="user.id">
        <!-- Text Interpolation -->
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // IMPORT AXIOS with Local Configuration
    import axios from 'axios';

    export default {
      // Name of the Vue Component and its Custom HTML TagName
      name: 'App',
      // Reactive State
      data() {
        return {
          // Variable storing the data returned from the API
          data: null,
          // Bool Control Parameter for toggling/untoggling Loading Message
          loading: true,
          // Variable storing Error infos returned from the API
          error: null
        }
      },

      // Methods
      methods:{
        async fetchData() {
          this.loading = true;
          this.error = null;
          try {
            // Send HTTP GET Request via Axios.
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // Extract Data from parsed JSON response body and store it in reactive state variable.
            this.data = response.data;
          } catch (err) {
            // If error comes up, assign reactive state error object/variable.
            this.error = 'Failed to load user data. Please try again.';
            console.error(err);
          } finally {
            // If everything works out well, untoggle loading message.
            this.loading = false;
          }
        }
      },
      
      async mounted() {
        this.fetchData();
      }
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
</style>
