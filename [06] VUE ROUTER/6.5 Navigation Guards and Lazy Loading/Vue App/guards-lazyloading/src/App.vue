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
    3. USE of active-class HTML ATTRIBUTE
        - Vue Router automatically adds a class to the active <router-link>. Whatever
          value you assign to the html attribute "active-class" of a router-link,
          it's possible to define whatever css styling will apply to the router-link
          currently active based on user's selection.
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <h1>Vue Router Navigation Guards and Lazy Loading</h1>
    <nav>
      <!-- ROUTER LINKS - SPA Anchors for Navigation -->
      <router-link class="router-link login" active-class="active-nav" to="/login">
        Login</router-link>
      <router-link class="router-link dash" active-class="active-nav" to="/dashboard">
        Dashboard</router-link>
      <router-link class="router-link admin" active-class="active-nav" to="/admin">
        Admin</router-link>
      <router-link class="router-link other" active-class="active-nav" to="/other">
        Other</router-link>
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
    /* DISPLAY Properties */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap:20px;
  }

  h1 {
    font-size: 5vw;
    font-family: "Grey Qo", cursive;
    text-shadow: 0px 10px 20px #0AC4E0;
    margin: 5px;
    margin-top: 20px;
  }

  nav {
    /* DISPLAY Properties */
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  .router-link {
    /* FONT Properties */
    font-size: 20px;
    font-weight: 100;
    font-family: "MedievalSharp", cursive;
    text-align: center;
    text-shadow: 0px 2px 10px purple;
    /* BOX Properties */
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 2px 10px;
    box-shadow: 10px 0px 5px pink;
  }

  .login {
    background-color: #F4F0E4;
  }

  .dash {
    background-color: #44A194;
  }

  .admin {
    background-color: #537D96;
  }

  .other {
    background-color: #EC8F8D;
  }

</style>
