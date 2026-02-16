<!--
IMPORTANT NOTES
    1. MULTI-WORD Naming of Components
        - While the name of a Vue component FILE can be single-word (e.g. Home.vue, 
          About.vue...), the name of the COMPONENT must be multi-word (e.g. 'HomeView'
          'AboutView'...)
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    name: 'HomeView',
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: #D7D7D7;
        /* FONT Properties */
        color: #447D9B;
        font-size: xx-large;
        font-weight: 900;
        font-family: "Ballet", cursive;
        text-align: center;
        text-shadow: 0px 0px 10px #273F4F;
        /* DIMENSION Properties */
        height: 300px;
        min-width: 400px;
        max-width: 50vw;
        /* BOX Properties */
        border: 3px solid purple;
        padding: 1px;
        margin: 50px;
        box-shadow: 0px 100px 50px #FE7743;
        /* POSITION Properties */
        position: relative;
        /* DISPLAY Property */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap-reverse;
        justify-content: space-around;
        align-content: center;
    }

    div > * {
        /* BOX Properties */
        margin: 12px 0px;
        padding: 6px 0px;
    }
</style>
