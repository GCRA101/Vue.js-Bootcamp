<!--
IMPORTANT NOTES
    1. NAMED & UN-NAMED/DEFAULT SLOTS
        - A NAMED SLOT is simply a <slot></slot> html element having the attribute 
          name assigned with a value.
        - In the Parent Component, to assign HTML content to a NAMED SLOT, we need
          to add the name of the slot in the html opening tag preceded by #
          (i.e. #header in this case).
          Any other HTML within the opening and closing tags of the Child Component
          (i.e. <CardWithHeader>...</CardWithHeader>) will be placed in the DEFAULT
          SLOT instead! IMPORTANT!!
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="card">
        <header class="card-header">
            <!-- NAMED SLOT -->
            <slot name="header"></slot>
        </header>
        <section class="card-body">
            <!-- UN-NAMED/DEFAULT SLOT -->
            <slot></slot>
        </section>
    </div>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // The Name of the Component and its HTML TagName
    name: 'CardWithHeader'
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .card-header {
        /* COLOR Properties */
        background-color: #333;
        /* FONT Properties */
        color: white;
        font-size: 100%;
        font-weight: normal;
        font-family: "UnifrakturMaguntia", cursive;
        text-align: left;
        /* BOX Properties */
        border: 2px solid blue;
        padding: 0.2rem;
        /* POSITION Properties */
        position: relative;
        top: 20px;
        left: 10px;
        /* DISPLAY Properties */
        display: block;
    }
    .card-body {
        /* BOX Properties */
        padding: 1rem;
        /* POSITION Properties */
        position: static;
    }
</style>
