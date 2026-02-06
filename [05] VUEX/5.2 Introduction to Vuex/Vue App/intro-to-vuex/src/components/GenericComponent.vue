<!--
IMPORTANT NOTES
    1. MAIN STEPS to use VUEX STORE
        1) IMPORT computed() from Vue and useStore() from Vuex
        2) USE setup() to get all data from Vuex Store in the current component 
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <!-- Text Interpolation -->
        <p> Count: {{ count }}</p>
        <p> Double: {{ doubleCount }}</p>
        <!-- Event Listening -->
        <button @click="increment">Increment</button>
        <button @click="asyncIncrement">Async Increment</button>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// Import computed() function from Vue to create reactive values/objects on the fly
import { computed } from 'vue';
// Import useStore() function from Vuex to create the store object
import { useStore } from 'vuex';

export default {
    // The Name of the Vue Component and its custom HTML TagName
    name: 'GenericComponent',
    // Starting point of a Vue component when using the Composition API
    setup() {
        // Create a new Vuex Store object
        const store = useStore();
        // Create local reactive variables matching Vuex store state variables
        const count = computed(()=> store.state.count);
        const doubleCount = computed(() => store.getters.doubleCount);
        // Create methods/handlers matching Vuex Mutation/Action functions
        const increment = () => store.commit('increment');
        const asyncIncrement = () => store.dispatch('asyncIncrement');

        // Return list of variables/object/functions to be used in <template>
        return {count, doubleCount, increment, asyncIncrement};
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: #E491C9;
        /* FONT Properties */
        color: #0D1A63;
        font-size: 30px;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* DIMENSION Properties */
        height: 50vh;
        width: 20vw;
        min-width:100px;
        min-height: 100px;
        /* BOX Properties */
        border: 2px solid black;
        margin: 0px 30px 0px 30px;
        padding: 0px;
        box-shadow: 0px 0px 30px purple;
        border-radius:10px;
        /* POSITION Properties */
        position: fixed;
        top: 20%;
        left: 35%;
        /* DISPLAY [FLEXBOX] Properties */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 5px;
    }

    div > * {
        /* FLEXBOX Properties */
        flex-basis: 20%;
        /* BOX Properties */
        margin: 5px;
        padding: 5px;
    }

    div > button {
        /* BOX Properties */
        background-color: beige;
        border: 2px solid black;
        border-radius: 10%;
        box-shadow: 0px 0px 10px brown;

    }

</style>
