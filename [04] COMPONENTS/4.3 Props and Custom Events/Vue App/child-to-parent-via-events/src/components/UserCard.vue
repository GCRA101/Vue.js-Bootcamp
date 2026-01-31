<!--
IMPORTANT NOTES
    1. Passing Data Child-to-Parent via Events
        - The events that are listed in the emits section of the <script></script> element
          below, can be fired/emitted by the Child Component using a local event handler
          (greetUser). When emitting the event, the Child Component returns/passes data
          (this.name) that can be read by the Parent Component.
-->


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div class="user-card">
        <!-- Text Interpolation -->
        <h2>{{ name }}</h2>
        <!-- Event Listening -->
        <button @click="greetUser">Greet</button>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default ({
    // The Props of the Component and its custom HTML Attributes
    props: {
        name: {
            type: String,
            required: true
        }
    },
    // The Events that can be emitted by the Component
    emits:['greet'],
    // Methods
    methods: {
        // Local Event Handler used to emit the event 'greet' + return/pass outputs
        greetUser() {
            this.$emit('greet', this.name);
        }
    }
})
</script>

<!-- STYLE --------------------------------------------------------------------------->
 <style scoped>
    .user-card {
        /* COLOR Properties */
        background-color: rgb(20, 198, 159);
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
        box-shadow: 0px 0px 30px rgb(0, 255, 81);
        /* POSITION Properties */
        position: fixed;
        top: 25%;
        left: 50%;
        /* DISPLAY Properties */
        display: block; 
    }

    .user-card button {
        /* COLOR Properties */
        background-color: black;     
        /* FONT Properties */
        color: white;
        font-size: 20px;
        font-weight: bold;
        font-family: "Bitcount Single", system-ui;
        text-align: center; 
        /* BOX Properties */
        border: 5px solid black;
        padding: 10px;
        margin: 20px 50px;
        border-radius: 50%;
        box-shadow: 0px 0px 30px rgb(0, 255, 81);
        /* DISPLAY Properties */
        display: block; 
    }
 
 </style>