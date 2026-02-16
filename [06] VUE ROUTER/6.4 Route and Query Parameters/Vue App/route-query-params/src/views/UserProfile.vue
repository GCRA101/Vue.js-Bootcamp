<!--
IMPORTANT NOTES
    1. USE PATH PARAMETERS
        - To use Path Parameters in a Vue Component, two items are essential:
            1) ACCESS Path Parameters
                - Using the mounted() Life-Cycle Hook
            2) USE WATCHERS
                - In order to make Path Parameters REACTIVE
    2. MULTI-WORD Naming of Components
        - While the name of a Vue component FILE can be single-word (e.g. Home.vue, 
          About.vue...), the name of the COMPONENT must be multi-word (e.g. 'HomeView'
          'AboutView'...)
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h1>User Profile</h1>
        <!-- Text Interpolation -->
        <p>User ID: {{ userId }}</p>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>

export default {
    // The Name of the Component and its Custom HTML TagName
    name: 'UserProfile',
    // REACTIVE STATE
    data() {
        return {
            userId: null
        }
    },
    // LIFE-CYCLE HOOK - Method firing when component mounted in the DOM
    mounted() {
        /* Gets the value of the path parameter, displays it in the console
           window and calls the fetchUser() method to update the userId
           variable from the Reactive State */
        console.log(this.$route.params.id);
        this.fetchUser(this.$route.params.id)
    },
    // WATCHER - Method running in response to data changes
    watch: {
       /* Executes the method fetchUser whenever the "id" path parameter
          gets its value changed */
        '$route.params.id'(newId) {
            this.fetchUser(newId)
        },
    },
    // METHODS - Functions performing actions
    methods: {
        /* Updates the value of the variable userId from the Reactive State
           with the value provided in input */
        fetchUser(id) {
            this.userId = id
        }
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: #F26076;
        /* FONT Properties */
        color: #458B73;
        font-size: 1rem;
        font-weight: bold;
        font-family: "Rubik Microbe", system-ui;
        text-align: center;
        text-shadow: 0px 0px 15px #FFD150;
        /* BOX Properties */
        border: 4px solid #458B73;
        margin: 10px;
        padding: 10px;
        /* DIMENSION Properties */
        min-width: 500px;
        max-width: 50vw;
        /* DISPLAY Properties */
        display: block;
    }

</style>
