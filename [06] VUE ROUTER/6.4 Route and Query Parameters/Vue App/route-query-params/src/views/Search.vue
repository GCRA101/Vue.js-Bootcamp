<!--
IMPORTANT NOTES
    1. USE QUERY PARAMETERS
        - To use Query Parameters in a Vue Component, two items are essential:
            1) ACCESS Query Parameters
                - Using the mounted() Life-Cycle Hook
            2) USE WATCHERS
                - In order to make Query Parameters REACTIVE
    2. MULTI-WORD Naming of Components
        - While the name of a Vue component FILE can be single-word (e.g. Home.vue, 
          About.vue...), the name of the COMPONENT must be multi-word (e.g. 'HomeView'
          'AboutView'...)
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h1>Search</h1>
        <!-- Text Interpolation -->
        <p>Term: {{ $route.query.term || 'none' }}</p>
        <p>Sort: {{ $route.query.sort || 'none' }}</p>
        <p>{{ resultMessage }}</p>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>

export default {
    // The Name of the Component and its Custom HTML TagName
    name: 'SearchView',
    // REACTIVE STATE
    data() {
        return {
            resultMessage: ''
        }
    },
    // LIFE-CYCLE HOOK - Method firing when component mounted in the DOM
    mounted() {
        /* Extracts the values of the query parameters, displays them in the console
           window and passes the value of the "term" parameter to the method
           fetchResults */
        const {term,sort} = this.$route.query;
        console.log(term, sort)
        this.fetchResults(term)
    },
    // WATCHER - Method running in response to data changes
    watch: {
        /* Executes the method fetchResults whenever the "term" query parameter
           gets its value changed */
        '$route.query.term'(newTerm) {
            this.fetchResults(newTerm)
        }
    },
    // METHODS - Functions performing actions
    methods: {
        /* Returns the variable resultMessage of the Reactive State filled with a
           message containing the "term" query parameter value */
        fetchResults(term) {
            this.resultMessage = term
                ? `Fetching results for "${term}"...`
                : 'No search term provided.'
        }
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: #E4FF30;
        /* FONT Properties */
        color: #008BFF;
        font-size: 1rem;
        font-weight: bold;
        font-family: "Rubik Microbe", system-ui;
        text-align: center;
        text-shadow: 0px 0px 15px #5B23FF;
        /* BOX Properties */
        border: 4px solid #362F4F;
        margin: 10px;
        padding: 10px;
        /* DIMENSION Properties */
        min-width: 500px;
        max-width: 50vw;
        /* DISPLAY Properties */
        display: block;
    }

</style>
