
<!--
IMPORTANT NOTES
    1. The main Types of Html INPUT Element where Two-Way Binding works best are as follows:
        - Inputs
        - TextAreas
        - Checkboxes
        - Radio Buttons
        - Dropdowns
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div id="app">
        <!-- INPUT -->
        <input v-model="name" placeholder="Select your name" />
        <!-- TEXTAREA -->
        <textarea v-model="message" placeholder="Write a message..."></textarea>
        <!-- CHECKBOXES - Single -->
        <input type="checkbox" v-model="isChecked" /> Checkbox
        <!-- CHECKBOXES - Multiple -->
        <div id="multi-checkbox">
            <input type="checkbox" value="HTML" v-model="skills" /> HTML
            <input type="checkbox" value="CSS" v-model="skills" /> CSS
            <input type="checkbox" value="JavaScript" v-model="skills" /> JavaScript
        </div>
        <!-- RADIOBUTTONS -->
        <div id="radio-buttons">
            <input type="radio" v-model="gender" value="male" /> Male
            <input type="radio" v-model="gender" value="female" /> Female
        </div>
        <!-- SELECT DROPDOWNS - Single Select -->
        <select v-model="country">
            <option disabled value="">Choose a country</option>
            <option>Nigeria</option>
            <option>Canada</option>
            <option>Germany</option>
        </select>
        <!-- SELECT DROPDOWNS - Multi Select -->
        <select v-model="selectedOptions" multiple>
            <option>Vue</option>
            <option>React</option>
            <option>Angular</option>
        </select>
    </div>
</template>

<!-- SCRIPT ------------------------------------------------------------------------->
<script>
  export default {
      // Reactive State
      data() {
          return {
              name:'',
              message:'',
              isChecked:false,
              skills:[],
              gender:'',
              country:'',
              selectedOptions:[]
          }
      }
  }
</script>

<!-- STYLE -------------------------------------------------------------------------->
<style scoped>
    #app > * {
        display:block;
        margin: 15px 0px 15px 0px;
    }    
</style>