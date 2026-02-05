<!--
IMPORTANT NOTES
    1. Passing Data Child-To-Parent via Custom Events
        - The custom events that can be emitted by the component are listed in the emits 
          section of the <script></script> element below.
          Using the $emit() method in whatever local event handler, it is possible to
          emit the event so that it gets visible to the Parent Component while passing
          to it additional data (string 'Child says hi!' in this case...).
    2. Sibling-To-Sibling
        - The data passed to the parent via emitted event can then be passed to the
          other sibling component via attribute binding (see ParentComponent.vue)
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- Event Handling (v-on/@)-->
    <button @click="handleClick">Click Me</button>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    // Name of the Component and its HTML TagName
    name: 'SiblingA',
    // List of Custom Events that can be emitted by the Component
    emits: ['message-sent'],
    // Methods
    methods: {
        // Local Event Handler to emit Global Event + Outputs
        handleClick() {
            this.$emit('message-sent', 'The Message Has been Sent!')
        }
    }
}
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    button {
        /* COLOR Properties */
        background-color: goldenrod;
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
        box-shadow: 0px 0px 10px green;
        /* DISPLAY Properties */
        display: block;
        /* POSITION Properties */
        position: absolute;
        top: 40%;
        left: 40%;
    }

</style>
