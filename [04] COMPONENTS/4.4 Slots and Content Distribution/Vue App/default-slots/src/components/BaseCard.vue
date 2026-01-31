<!--
IMPORTANT NOTES
    1. UN-NAMED/DEFAULT SLOTS
        - Slots (<slot></slot>) provided in the Child Component are placeholders that
          can be filled with whatever HTML code coming from the Parent Component.
        - The HTML code coming from the Parent Component is whatever HTML content gets
          placed in between the opening and closing html tags of the Child Component 
          when used in the Parent Component.
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="base-card">
        <!-- Un-named/Default Slot -->
        <slot></slot>
    </div>    
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<!-- No script needed in this case... -->

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .base-card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
</style>