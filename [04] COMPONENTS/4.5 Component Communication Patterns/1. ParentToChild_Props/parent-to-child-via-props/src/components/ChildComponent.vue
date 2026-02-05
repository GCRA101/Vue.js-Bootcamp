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
    <div>
        <!-- Two-Way Binding -->
        <h3>Hello, {{ name }}</h3>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // Properties of the Component and its custom HTML attributes
    props: ['name']
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    h3 {
        margin: 10px;
    }

</style>
