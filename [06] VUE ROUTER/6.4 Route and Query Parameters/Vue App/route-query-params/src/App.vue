<!--
IMPORTANT NOTES
    1. USE of VUE ROUTER in App.vue
        - Add <router-link></router-link> elements as VUE ROUTER versions of the 
          classic <a></a> HTML anchor element.
        - Add <router-view></router-view> as PLACEHOLDER for VIEW SELECTED via the
          VUE ROUTER.
          >>> IMPORTANT!!! NEVER, EVER FORGET USING <router-view></router-view>!!
          >>> WITHOUT IT, NO VIEW WILL GET RENDERED !!
    2. ASSIGN CSS STYLING TO <router-link> elements
        - It' not possible to use the Element/Type Selector with them...but we can
          use any other selector - i.e. Class, Id and Attribute Selectors!
    3. USE of active-class HTML ATTRIBUTE
        - Vue Router automatically adds a class to the active <router-link>. Whatever
          value you assign to the html attribute "active-class" of a router-link,
          it's possible to define whatever css styling will apply to the router-link
          currently active based on user's selection.
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <nav>
      <!-- ROUTER LINKS - SPA Anchors for Navigation -->
      <!-- Passing PATH PARAMETERS.... -->
      <router-link 
        active-class="active-link" :to="`/user/${user.id}`">View Profile</router-link>
      <!-- Passing QUERY PARAMETERS.... -->
      <router-link 
        active-class="active-link" :to="{path: '/search', query:{term:'vue', sort:'latest'}}">
        Search for Vue</router-link>
    </nav>
    <!-- ROUTER VIEW - SPA Placeholder -->
    <router-view></router-view>
  </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  export default {
    // Name of the Component and its Custom HTML TagName
    name: 'App',
    // The Reactive State of the Component
    data() {
      return {
        user: {
          id: 1
        }
      }
    }
  }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  nav {
    /* COLOR Properties */
    background-color: #F2B50B;
    /* FONT Properties */
    color: #F2B50B;
    font-size: 20px;
    font-family: "Rubik Microbe", system-ui;
    text-align: center;
    /* BOX Properties */
    border: 1px solid #25671E;
    margin: 2px 10px;
    padding: 5px 10px;
    box-shadow: 0px 0px 15px #48A111;
    /* POSITION Properties */
    position: static;
    /* DIMENSION Properties */
    min-width: 200px;
    max-width: 50vw;
    /* DISPLAY Properties */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .active-link {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
