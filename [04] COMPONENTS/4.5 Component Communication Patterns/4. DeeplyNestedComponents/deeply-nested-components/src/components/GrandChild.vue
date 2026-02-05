<!--
IMPORTANT NOTES
    1. USE of INJECT to USE PROPS PASSED from ANCESTORS
        1) USE inject:[...] to LIST PROPS passed from ANCESTORS -- in <script></script>
        2) USE INJECTED PROPS in <template> - in <template></template>
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div> 
        <!-- Text Interpolation -->
        <h1> {{ title }}</h1>
        <!-- 1. USE INJECTED PROP -->
        <h2>The theme is: {{ theme }}</h2>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    export default{
        // The Name of the Component and its custom TagName
        name: 'GrandChild',
        // 2. USE inject to LIST PROPS passed from ANCESTORS
        inject: ['theme'],
        // The List of Props of the Component and its custom HTML attributes
        props: ['title']
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    div {
        /* FONT Properties */
        font-size: 100px;
        font-weight: bold;
        font-family: "Honk", system-ui;
        /* POSITION Properties */
        position: static;
        top:1000px;
        left:1000px;
        /* DISPLAY Properties */
        display: block;
    }

    h1, h2 {
        /* BOX Properties */
        border: 3px solid silver;
        margin: 1px;
        padding: 3px;
    }

    h1 {
        /* COLOR Properties */
        background-color: gold;
        /* FONT Properties */
        font-size: 0.5em;
        font-family: "Honk", system-ui;
    }

    h2 {
        /* COLOR Properties */
        background-color: silver;
        /* FONT Properties */
        font-size: 0.3em;
    }
</style>
