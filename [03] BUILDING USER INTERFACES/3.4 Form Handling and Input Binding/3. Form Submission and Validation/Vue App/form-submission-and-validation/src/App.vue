<!--
IMPORTANT NOTES
    1. @submit.prevent
        - Vue.js Directive allowing to stop the default event handler for the form's 
          submission and replace it with our own method.
          The .prevent stops the default browser reload.
    2. JS External Implementation
        - Also when using Vue.js within an HTML file (like this case), we can always 
          store all our own javascript code in an external file and just implement it 
          in Html using via External implementation.
        - The reference to our JS file MUST always be AFTER the reference to the 
          Vue.js file
    3. Forms Inputs Validation
        - Always remember to write a logic to validate the inputs of the form in the 
          submitForm method (see index.js file)
    4. Disabling Inputs Dynamically
        - Disable inputs or button based on the state of the app using the "disabled" 
          html attribute
            - <input/button v-bind:disabled="!email" ... > ...
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div id="app">
        <form @submit.prevent="submitForm">
            <input v-model="email" placeholder="Email"/>
            <button v-bind:disabled="!email" type="submit">Submit</button>
        </form>
    </div>
</template>

<!-- SCRIPT ------------------------------------------------------------------------->
<script>
export default {
    // Reactive State
    data() {
        return {
            email:''
        };
    },
    // Methods
    methods: {
        submitForm(){
            // Simple Manual Validation
            if (!this.email.includes('@')) {
                alert(`Email submitted: ${this.email}`);
            } else {
                alert(`Email submitted: ${this.email}`);
            }
            return;
        }
    }
}
</script>

<!-- STYLE -------------------------------------------------------------------------->
<style scoped>
  input {
      background-color:#E5D9B6;
  }
</style>
