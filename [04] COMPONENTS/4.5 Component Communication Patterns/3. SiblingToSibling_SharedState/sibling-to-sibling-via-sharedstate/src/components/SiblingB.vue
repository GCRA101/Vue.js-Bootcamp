<!--
IMPORTANT NOTES
    1. Passing Data Parent-To-Child via Props
        - The props declared for the Child Component appear as custom HTML attibutes in
          the opening tag of the Child Component HTML Element whenever used in another
          .vue file. Passing a value to these custom attributes, it's possible to 
          pass a value from the Parent to the Child via Props.
    2. Sibling-To-Sibling
        - The data passed to the parent via emitted event can then be passed to the
          other sibling component via attribute binding (see ParentComponent.vue)
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- Text Interpolation -->
    <p>{{ message }}</p>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    export default {
        // Name of the Component and its TagName
        name: "SiblingB",
        // List of Properties of the Component and its Custom HTML Attributes
        props: ['message']
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    p{
        /* COLOR Properties */
        background-color: rgb(100 100 100);
        /* FONT Properties */
        color: purple;
        font-size: 20pt;
        font-weight: bold;
        font-family: "Bitcount Single", system-ui;
        text-align: center;
        /* BOX Properties */
        border: 2px dashed black;
        margin: 10px;
        padding: 10px;
        box-shadow: 0px 0px 10px black;
        /* DISPLAY Properties */
        display: block;
        /* POSITION Properties */
        position: absolute;
        top: 80%;
        left: 28%;
        /* SIZE Properties */
        height: 5vh;
        width: 20vw;
    }

</style>
