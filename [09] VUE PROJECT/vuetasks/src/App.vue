

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div id="app">
    <nav>
      <!-- VUE ROUTER ANCHORS -->
      <router-link class="router-link" to="/">All</router-link>
      <router-link class="router-link" to="/completed">Completed</router-link>
      <router-link class="router-link" to="/pending">Pending</router-link>
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
    /* COLOR Properties */
    background-color: #F9F6C4;
    /* FONT Properties */
    font-size: 20px;
    font-weight: 100;
    font-family: "Sour Gummy", sans-serif;
    text-align: left;
    /* BOX Properties */
    border: 5px outset #44ACFF;
    padding: 2% 5%;
    margin: 2% 5%;
    box-shadow: 0px 10px 50px #FE9EC7;
    /* DISPLAY Properties */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: stretch;
    gap:15px;
  }

  nav {
    /* COLOR Properties */
    background-color: #FE9EC7;
    /* FONT Properties */
    font-size: 1.5em;
    font-weight: bolder;
    font-family: "Orbitron", sans-serif;
    text-align: center;
    text-shadow: 0px 3px 0px #44ACFF;
    /* BOX Properties */
    border: 6px ridge #44ACFF;
    margin: 0px;
    padding-top: 5px;
    padding-bottom: 10px;
    /* DISPLAY Properties */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }
</style>
