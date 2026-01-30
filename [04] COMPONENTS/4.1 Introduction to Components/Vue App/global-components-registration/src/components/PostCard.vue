
<!--
IMPORTANT NOTES:
    1) Contents of export default {}
        - name
            - The name of the Vue Component that is also its HTML tag name when calling it in other
              .vue files.
        - props
            - The list of properties of the Vue Component that are also its HTML attributes when 
              calling it in other .vue files
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="post-card">
        <!-- Text Interpolation -->
        <h2>{{ title }}</h2>
        <!-- Text Interpolation -->
        <p> {{ summary }}</p>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // The HTML TagName of this Vue Component
    name: 'PostCard',
    // The HTML Attributes of this Vue Component
    props: ['title', 'summary']
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
.post-card {
    border: 1px solid #ccc;
    font-family: "UnifrakturMaguntia", cursive;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>