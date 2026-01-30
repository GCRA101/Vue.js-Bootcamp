<!--
IMPORTANT NOTES
    1. @submit.prevent
        - Vue.js Directive allowing to stop the default event handler for the form's 
          submission and replace it with our own method.
          The .prevent stops the default browser reload.
    2. Disabling Inputs Dynamically
        - Disable inputs or button based on the state of the app using the "disabled" 
          html attribute
            - <input/button v-bind:disabled="!email" ... > ...
    3. JS Objects in the Reactive State
        - In the Reactive State we can define JS objects containing multiple attributes
          that we can assign values to just by using the DOT NOTATION.
          (e.g. v-model="form.name")
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <!-- Form @submit.prevent Directive -->
  <form @submit.prevent="registerUser">
    <!-- Two-Way Binding to JS Object property (form.name) -->
    <input v-model="form.name" placeholder="Name" />
    <!-- Two-Way Binding to JS Object property (form.email) -->
    <input type="email" v-model="form.email" placeholder="Email" />
    <!-- Two-Way Binding to JS Object property (form.password) -->
    <input type="password" v-model="form.password" placeholder="password" />
    <!-- Button with Dynamic Inputs Disabling -->
    <button :disabled="!form.name || !form.email || !form.password" 
            type="submit">Register</button>
  </form>
</template>

<!-- SCRIPT ------------------------------------------------------------------------->
<script>
  export default {
    // Reactive State
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    // Methods
    methods: {
      registerUser() {
        console.log('Form submitted:', this.form);
      }
    }
  }
</script>

<!-- STYLE -------------------------------------------------------------------------->
<style scoped>
</style>