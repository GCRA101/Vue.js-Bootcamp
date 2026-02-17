

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <h2>Login Page</h2>
        <p>Welcome to the Login page!</p>
        <!-- Event Handling -->
        <button @click="loginUser">Login as User</button>
        <button @click="loginAdmin">Login as Admin</button>
        <button @click="logout">Logout</button>
    </div>       
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // Name of the Component and its Custom HTML TagName
    name: 'LoginView',
    // Methods
    methods: {
        loginUser() {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('role', 'user')
            this.$router.push('/dashboard')
        },
        loginAdmin() {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('role', 'admin')
            this.$router.push('/admin')
        },
        logout() {
            localStorage.removeItem('auth')
            localStorage.removeItem('role')
            this.$router.push('/login')
        }
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>


</style>
