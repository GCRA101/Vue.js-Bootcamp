<!--
IMPORTANT NOTES
    1. PUSHING QUERY PARAMETERS
        - To navigate to a view while passing the value of a query parameter, we
          can use the following syntax in any event handler.
            -> this.$router.push({path: '/search', query: {term: 'vue'}});
    2. NAVIGATE PROGRAMMATICALLY using VUE ROUTER
        - Instead of <router-link></router-link> elements, use standard HTML elements
          (e.g. button) with event handling (v-on/@) assigned.
          The Event handler is a function that that calls the method
          this.$router.push(....) to navigate to vue component corresponding to 
          input url.
        - SUPER IMPORTANT!! 
          >>>> DO NOT FORGET TO ADD <router-view></router-view> as <<<<
          >>>> PLACEHOLDER for VIEW SELECTED via the VUE ROUTER.   <<<<
    2. ASSIGN CSS STYLING TO <router-link> elements
        - It' not possible to use the Element/Type Selector with them...but we can
          use any other selector - i.e. Class, Id and Attribute Selectors!
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <h1>My Vue SPA</h1>
      <!-- HTML BUTTONS - Event Handling using router.push() for navigation -->
      <div class="buttons-container">
        <button @click="goToHome">Go To Home</button>
        <button @click="search">Search</button>      
      </div>
      <!-- ROUTER VIEW - SPA Placeholder -->
      <router-view></router-view>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
  name: 'App',
  methods: {
    goToHome() {
      this.$router.push({path:'/'})
    },
    search() {
      this.$router.push({path: '/search', query: {term: 'vue'}});
    },
  }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  div {
    /* COLOR Properties */
    background-color: #FEF3E2;
    /* FONT Properties */
    color: #6FA4AF;
    font-size: 20pt;
    font-weight: 100;
    font-family: "Orbitron", sans-serif;
    text-shadow: 0px 0px 10px green;
    /* BORDER Properties */
    border: 2px solid darkgrey;
    /* DISPLAY Properties [FLEXBOX] */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .buttons-container{
    /* BOX Properties */
    border: none;
    /* DISPLAY Properties */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-between;
    align-items: center;
    gap:100px;
  }
</style>
