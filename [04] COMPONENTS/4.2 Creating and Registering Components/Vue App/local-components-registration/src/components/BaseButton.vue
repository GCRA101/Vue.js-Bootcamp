
<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- Event Listening -->
    <button class="base-button" @click="handleClick">
        <!-- Un-Named/Default Slot -->
        <slot>Click Me</slot>
    </button>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    export default {
        // The Name of the Component and its HTML TagName
        name: 'BaseButton',
        // The List of Events that the Component can fire/trigger
        emits: ['click'],
        // Methods
        methods: {
            // Local Event Handler Function firing the Global event 'click' in the Parent
            handleClick() {
                this.$emit('click');
            }
        }
    }
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    .base-button {
        padding: 10px 20px;
        background-color: #42b983;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    }
</style>