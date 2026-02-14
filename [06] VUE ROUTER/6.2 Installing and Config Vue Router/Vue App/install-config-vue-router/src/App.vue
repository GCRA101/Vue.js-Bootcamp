<!--
IMPORTANT NOTES
    1. USE of VUE ROUTER in App.vue
        - Add <router-link></router-link> elements as VUE ROUTER versions of the 
          classic <a></a> HTML anchor element.
        - Add <router-view></router-view> as PLACEHOLDER for VIEW SELECTED via the
          VUE ROUTER.
    2. ASSIGN CSS STYLING TO <router-link> elements
        - It' not possible to use the Element/Type Selector with them...but we can
          use any other selector - i.e. Class, Id and Attribute Selectors!
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <h1>My Vue SPA</h1>
    <nav>
      <!-- ROUTER LINKS - SPA Anchors for Navigation -->
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/about">About</router-link>
    </nav>
    <!-- ROUTER VIEW - SPA Placeholder -->
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

  .router-link {
    /* FONT Properties */
    color: #B8C4A9;
    text-shadow: none;
    /* BOX Properties */
    margin: 10px;
  }
</style>
