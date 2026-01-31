<!--
IMPORTANT NOTES
    1. SCOPED SLOTS
        - The Parent Component decides how to render the slot while the Child
          Component decides how to handle the iteration logic.
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div>
        <slot v-for="user in users" :user="user" :key="user.id"></slot>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
export default {
    props: ['users']
}
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>

</style>
