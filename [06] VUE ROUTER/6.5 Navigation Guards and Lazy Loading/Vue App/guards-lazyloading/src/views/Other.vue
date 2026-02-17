<!--
IMPORTANT NOTES
    1. USE IN-COMPONENT GUARDS
        - In-Component Guards are registered in the 'methods' section and consist of
          specific hooks such as 'beforeRouteEnter' and 'beforeRouteLeave'. Essentially
          Event Listeners running when the component is loaded via routing.
          Great feature allowing to execute specific code automatically when accessing/
          leaving the component.
    2. MULTI-WORD Naming of Components <<<<<<<<<<<<<<<<
        - While the name of a Vue component FILE can be single-word (e.g. Home.vue, 
          About.vue...), the name of the COMPONENT must be multi-word (e.g. 'HomeView'
          'AboutView'...)
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h2>Other Page</h2>
        <p>Welcome to the Other page!</p>
    </div>       
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // The Name of the Component and its Custom HTML TagName
    name: 'OtherView',
    // IN-COMPONENT GUARDS <<<<<<<<<<<<<<<<<<<
    /* 
    Method Running before entering the route/view Other.vue
    - A message gets displayed in the console window of the web browser */
    beforeRouteEnter(to, from, next) {
        console.log('Entering route:', to.path)
        next()
    },
    /* 
    Method Running before leaving the route/view Other.vue
    - A window pops up on screen asking the user for confirmation to leave */
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm('Are you sure you want to leave?')
        answer ? next() : next(false)
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>


</style>
