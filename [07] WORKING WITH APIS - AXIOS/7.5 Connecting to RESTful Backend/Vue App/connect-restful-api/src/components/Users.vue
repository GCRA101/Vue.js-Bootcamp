<!--
IMPORTANT NOTES
    1. USE of AXIOS in App.vue STEP-BY-STEP
        1) Import AXIOS in <script></script> section if LOCAL Axios Configuration is
          used (does NOT apply to this case) - <script></script>
        2) Set up Reactive State with following variables - <script></script>
            2.1 Variable storing data coming from API
            2.2 Bool Control Parameter to display loading message to user 
                during async operations
            2.3 Variable storing encountered error if any
        3) Define Async created() Lifecycle Hook - <script></script>
            3.1 Execute async HTTP GET Request via LOCAL AXIOS object
            3.2 Extract data from returned parsed json object
            3.3 Assign value to reactive Error object
            3.4 Toggle Bool Control Parameter for displaying loading message
        4) Define Async deleteUser(id) Method - <script></script>
            4.1 Execute async HTTP DELETE Request via LOCAL AXIOS object
            4.2 Update data structure removing deleted user object
            4.3 Return error message if sth goes wrong
        5) Define Async addUser(newUser) Method - <script></script>
            5.1 Execute async HTTP POST Request via LOCAL AXIOS object
            5.2 Update data structure adding posted user object
            5.3 Return error message if sth goes wrong
        6) Define Async updateUser(id, updatedData) Method - <script></script>
            6.1 Execute async HTTP PUT Request via LOCAL AXIOS object
            6.2 Update data structure replacing original user object with updated one
            6.3 Return error message if sth goes wrong
        7) Use Vue Directive v-if, v-else-if, v-else to handle loading and errors <<<<
        8) Use Vue Directive v-for to render list of data returned from the API <<<<<<
        9) Use Dynamic styling to assign css styles to data retrieved from the API <<<
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div id="component">
        <h2>Users</h2>
        <!-- Inform about LOADING DATA...-->
        <p v-if="loading">Loading...</p>
        <!-- Inform about ERROR...-->
        <p v-if="error">{{ error }}</p>
        <!-- If the Loaded Data is NOT NULL / EMPTY, carry on...-->
        <div id="inputs">
            <input v-model="userName" placeholder="User Name"/>
            <input v-model="userEmail" placeholder="User Email"/>
            <button @click="addUser({name: userName, email: userEmail})">Add</button>
        </div>
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

                // Other variables...
                userName: '',
                userEmail: '',
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
        methods: {
            /* HTTP DELETE Method */
            async deleteUser(id) {
                try {
                    // Send HTTP DELETE Request using the AXIOS Instance   <<<<<<<<<< 
                    await api.delete(`/users/${id}`);
                    // Update users list removing the deleted user by id
                    this.users = this.users.filter(user => user.id !== id);
                } catch (err) {
                    alert ('Could not delete user.');
                }
            },

            /* HTTP POST Method */
            async addUser(newUser) {
                try {
                    // Send HTTP POST Request using the AXIOS Instance    <<<<<<<<<< 
                    const response = await api.post('/users', newUser);
                    /* Update users list adding to it the user returned
                    by the HTTP Response */
                    this.users.push(response.data);
                } catch(err) {
                    this.error = 'Failed to add user.'
                }
            },

            /* HTTP PUT Method */
            async updateUser(id, updatedData) {
                try {
                    // Send HTTP PUT Request using the AXIOS Instance     <<<<<<<<<< 
                    const response = await api.put(`/users/${id}`, updatedData);
                    /* Get the index in the users list matching the id of the 
                    updated user */
                    const index = this.users.findIndex(u=> u.id === id);
                    /* If the index exists, store at its location, in the
                    users list, the updated user returned by the HTTP Response */
                    if (index !== -1) this.users[index] = response.data;
                } catch (err) {
                    console.error('Update failed', err)
                }
            }
        }
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    #component {
        /* COLOR Properties */
        background-color: #FFDBFD;
        /* FONT Properties */
        font-size: 20px;
        font-weight: 100;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
        text-shadow: 0px 1px 1px black;
        /* BOX Properties */
        border: 2px solid #6367FF;
        padding: 5px 10px 5px 20px;
        margin: 10px;
        box-shadow: 0px 20px 20px #8494FF;
        border-radius: 10px;
        /* DISPLAY Properties */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: start;
    }

    h2 {
        /* FONT Properties */
        font-size: 2em;
        font-family: Felipa, serif;
        /* BOX Properties */
        margin: 10px;
    }

    #inputs {
        /* COLOR Properties */
        background-color: #C9BEFF;
        /* BOX Properties */
        border: 1px solid #8F0177;
        padding: 10px;
        margin: 0px 0px 0px 10px;
        border-radius: 10px;
        /* DISPLAY Properties */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: start;
        gap: 20px;
    }

    #inputs > * {
        /* BOX Properties */
        box-shadow: 1px 1px 5px black;
    }

</style>
