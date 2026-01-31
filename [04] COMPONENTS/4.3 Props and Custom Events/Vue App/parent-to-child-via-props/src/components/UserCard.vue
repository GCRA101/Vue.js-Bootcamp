<!--
IMPORTANT NOTES
    1. Passing Data Parent-To-Child via Props
        - The props that are listed in the props section of the <script></script> element
          below, can be used in the Parent Component as HTML attributes to pass values
          to the Child Component
    2. Props as JS Objects
        - Props can be defined as JS Objects (i.e. collections of attributes assigned with
          values)
        - Key attributes are as follows:
            - required: true/false
            - type:...

-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="user-card">
        <!-- Text Interpolation -->
        <h2>{{ name }}</h2>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default ({
    // The name of the Component and its HTML TagName
    name: 'UserCard',
    // The list of the Component Properties and its custom HTML Attributes
    props: {
        name: {
            type: String,
            required: true
        }
    }
})
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .user-card {
        /* COLOR Properties */
        background-color: peru;
        /* FONT Properties */
        font-size: 20px;
        font-weight: bold;
        font-family: "Bitcount Single", system-ui;
        text-align: center;
        /* BOX Properties */
        border: 5px solid black;
        padding: 10px;
        margin: 20px 50px;
        border-radius: 20%;
        box-shadow: 0px 0px 30px yellow;
        /* POSITION Properties */
        position: fixed;
        top: 25%;
        left: 50%;
        /* DISPLAY Properties */
        display: block; 
    }
</style>