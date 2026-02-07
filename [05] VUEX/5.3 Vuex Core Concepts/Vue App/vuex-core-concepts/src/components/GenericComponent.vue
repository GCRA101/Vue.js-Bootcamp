<!--
IMPORTANT NOTES
    1. MAIN STEPS to use VUEX STORE
        1) IMPORT computed() from Vue and useStore() from Vuex
        2) USE setup() to get all data from Vuex Store in the current component 
            2.1 Create object referencing the Vuex Store Object
            2.2 Create local reactive variables referencing Vuex Store STATE variables
            2.3 Create local reactive methods calling Vuex Store GETTERS
            2.4 Create local reactive methods calling Vuex Store MUTATIONS
            2.5 Create local reactive methods calling Vuex Store ACTIONS
            2.6 Return variables/objects/funcitons extracted from VUEX STORE 
                and to be used in <template></template> section
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <!-- Text Interpolation -->
        <p>Count: {{ count }}</p>
        <p>Even? {{ isEven }}</p>
        <!-- Event Handling using VUEX MUTATIONS -->
        <button @click="increment">Increment</button>
        <!-- Event Handling using VUEX ACTIONS -->
        <button @click="delayedIncrement">Delayed Increment</button>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 1. Import computed() function from Vue to create reactive values/objects on the fly
import {computed} from 'vue';
// 2. Import useStore() function from Vuex to create the store object
import {useStore} from 'vuex';

export default {
    // The Name of the Vue Component and its Custom HTML TagName
    name: 'GenericComponent',
    // 3. Set up the Vue Component USING the VUEX STORE object
    setup() {
        // 3.1 Create object referencing the Vuex Store Object
        const store = useStore();
        // 3.2 Create local reactive variables referencing Vuex Store State variables
        const count = computed(()=>store.state.count);
        // 3.4 Create local reactive methods calling Vuex Store Getters
        const isEven = computed(()=>store.getters.isEven);
        // 3.5 Create local reactive methods calling Vuex Store Mutations
        const increment = () => store.commit('increment');
        // 3.6 Create local reactive methods calling Vuex Store Actions
        const delayedIncrement = () => store.dispatch('delayedIncrement');
        // 3.7 Return list of variables/objects/funcitons to be used in <template>
        return {count, isEven, increment, delayedIncrement};
    }
};
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* COLOR Properties */
        background-color: white;
        /* BACKGROUND Properties */
        background-image: 
            linear-gradient(rgb(0 0 255 / 0.5), rgb(255 255 0 / 0.5)),
            url('../images/VuexLogo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-blend-mode: normal;
        /* FONT Properties */
        color: yellow;
        font-size: 150%;
        font-weight: bold;
        font-family: "Sonsie One", system-ui;
        text-align: center;
        /* BOX Properties */
        border: 3px solid rgb(123,123,123);
        margin: 0px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 15px #088395;
        /* POSITION Properties */
        position: relative;
        top: 0px;
        left: 0px;
        /* DISPLAY Properties */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap:10px;
    }

    /* Combined Selector using DESCENDANT Combining Rule */
    div button {
        /* COLOR Properties */
        background-color: #3BC1A8;
        /* BOX Properties */
        border: 1px solid darkblue;
        margin: 0px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 15px #088395;
    }

</style>
