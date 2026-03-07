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
            2.6 Return variables/objects/functions extracted from VUEX STORE 
                and to be used in <template></template> section
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>

    <h1>Shopping Cart</h1>

    <h2>Purchase an Item</h2>
    <input v-model="item" placeholder="bananas" />
    <button @click="onAddToCart">Add to Cart</button>

    <h2>Purchased Items</h2>
    <ul>
      <li v-for="(cartItem, i) in cartItems" :key="i">{{ cartItem.name ?? cartItem }}</li>
    </ul>

    <h2>Total Price</h2>
    <p>{{ total }}</p>

    <hr />

    <div>
      <h3>Auth</h3>
      <p v-if="isAuth">You are logged in.</p>
      <p v-else>You are not logged in.</p>
      <button @click="login">Login (demo)</button>
    </div>

    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
// 1. Import computed() function from Vue to create reactive values/objects on the fly
import {ref, computed} from 'vue';
// 2. Import useStore() function from Vuex to create the store object
import {useStore} from 'vuex';

export default {
    // The Name of the Vue Component and its Custom HTML TagName
    name: 'GenericComponent',
    // 3. Set up the Vue Component USING the VUEX STORE object
    setup() {
        // 3.1 Create object referencing the Vuex Store Object
        const store = useStore();
        
        // Local input state
        const item = ref('');

        // 3.2 Create local reactive variables referencing Vuex Store State variables
        const cartItems = computed(()=> store.state.cart.items);
        // 3.3 Create local reactive methods calling Vuex Store Getters
        const isAuth = computed(() => store.getters['auth/isAuthenticated']);
        const total = computed(()=> store.getters['cart/totalPrice']);
        // 3.4 Create local reactive methods calling Vuex Store Mutations
        const addItem = (item) => store.commit('cart/addItem',item);
        // 3.5 Create local reactive methods calling Vuex Store Actions
        const login = () => {
            store.dispatch('auth/login', {email:'jane@example.com',password:'1234'});
        };
        // Local handler that uses the mutation
        const onAddToCart = () => {addItem(item);};
        // 3.6 Return list of variables/objects/funcitons to be used in <template>
        return {isAuth, cartItems, total, login, onAddToCart};
    },
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>

</style>
