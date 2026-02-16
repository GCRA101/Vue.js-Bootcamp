<!--
IMPORTANT NOTES
    1. ACCESS to QUERY PARAMETERS
        - Access to values of query parameters is carried out using the following
          syntax: this.$route.query.<parameterName>
    2. MULTI-WORD Naming of Components
        - While the name of a Vue component FILE can be single-word (e.g. Home.vue, 
          About.vue...), the name of the COMPONENT must be multi-word (e.g. 'HomeView'
          'AboutView'...)
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h2>Search Page</h2>
        <p>The word you are searching is {{ searchName }} </p>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    name: 'SearchView',
    computed: {
        searchName() {
            return this.$route.query.term || ''
        },
    },
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: #FB9B8F;
        /* FONT Properties */
        color: #92487A;
        font-size: xx-large;
        font-weight: 900;
        font-family: "Ballet", cursive;
        text-align: center;
        text-shadow: 0px 0px 10px purple;
        /* DIMENSION Properties */
        height: 300px;
        min-width: 400px;
        max-width: 50vw;
        /* BOX Properties */
        border: 3px solid purple;
        padding: 1px;
        margin: 50px;
        box-shadow: 0px 100px 50px #FFD3D5;
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
