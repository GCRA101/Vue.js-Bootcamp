<!--
IMPORTANT NOTES
    1. USE of AXIOS in App.vue STEP-BY-STEP
        1) Import AXIOS in <script></script> section if LOCAL Axios Configuration is
          used (applies to this case) - <script></script>
        2) Set up Reactive State with following variables - <script></script>
            2.1 Variable storing data coming from API
            2.2 Bool Control Parameter to display loading message to user 
                during async operations
            2.3 Variable storing encountered error if any
        3) Define Async mounted() Lifecycle Hook - <script></script>
            3.1 Execute async HTTP GET Request via LOCAL AXIOS object
            3.2 Extract data from returned parsed json object
            3.3 Assign value to reactive Error object
            3.4 Toggle Bool Control Parameter for displaying loading message
        4) Use Vue Directive v-if, v-else-if, v-else to handle loading and errors <<<<
        5) Use Vue Directive v-for to render list of data returned from the API <<<<<<
        6) Use Dynamic styling to assign css styles to data retrieved from the API <<<
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h2>Users</h2>
        <!-- Inform about LOADING DATA...-->
        <p v-if="loading">Loading...</p>
        <!-- Inform about ERROR...-->
        <p v-if="error">{{ error }}</p>
        <!-- If the Loaded Data is NOT NULL / EMPTY, carry on...-->
        <ul v-if="users">
            <!-- Render Data from API via Lists with v-for -->
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="deleteUser(user.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    // IMPORT AXIOS INSTANCE
    import api from '../services/api'

    export default {

        // Name of the Component and its Custom HTML TagName
        name: 'UsersComponent',

        // Reactive State
        data() {
            return {
                // Variable storing the DATA coming from the API        <<<<<<<<<< 
                users: null,
                // Variable BOOL CONTROL PARAMETER for loading messages <<<<<<<<<< 
                loading: true,
                // Variable storing ERROR MESSAGE                       <<<<<<<<<< 
                error: null,
            }
        },

        // ASYNC created() LIFECYCLE HOOK <<<<<<<<<<
        async created() {
            try {
                // Send HTTP GET Request using the AXIOS Instance      <<<<<<<<<< 
                const response = await api.get(`/users`);
                this.users = response.data;
            } catch (err) {
                // If an ERROR occurs, assign the Error Object
                this.error = 'Failed to fetch users'
            } finally {
                /* If NO ERROR occurs, untoggle bool control param
                for loading messages */
                this.loading = false
            }
        },

        // METHODS
        async deleteUser(id) {
            try {
                // Send HTTP DELETE Request using the AXIOS Instance   <<<<<<<<<< 
                await api.delete(`/users/${id}`);
                this.users = this.users.filter(user => user.id !== id);
            } catch (err) {
                alert ('Could not delete user.');
            }
        }
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>


</style>
