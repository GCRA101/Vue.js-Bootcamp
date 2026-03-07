


<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <!-- Event Handling -->
    <form @submit.prevent="handleSubmit">
        <!-- Two-Way Binding -->
        <input v-model="taskTitle" placeholder="Add a new task" />
        <button type="submit">Add</button>
    </form>
</template>


<!-- SCRIPT -------------------------------------------------------------------------->
<script>
    export default {

        // REACTIVE STATE
        data() {
            return {
                taskTitle: ''
            };
        },
        
        // METHODS
        methods: {
            // Method running when clicking the submit button of the form
            handleSubmit() {
                /* If the content of the HTML Input is not empty... */
                if (this.taskTitle.trim()) {
                    /* Emit the Custom Event 'task-added' while passing the task
                       object to the Parent Component */
                    this.$emit('task-added', {
                        id: Date.now(),
                        title: this.taskTitle,
                        completed: false
                    });
                    /* Reset the content of the form's HTML Input Component */
                    this.taskTitle='';
                }
            }
        }
    }
</script>


<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
    form {
        /* DISPLAY Properties */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
        gap: 1%;
    }

    form > * {
        /* BOX Properties */
        border: 3px solid black;
        border-radius: 5px;
        /* DIMENSION Properties */
        height: 20px;
    }

    input {
        /* COLOR Properties */
        background-color: #89D4FF;
        /* DIMENSION Properties */
        min-width: 200px; 
        width: 50%;
        
    }
    button {
        /* BOX Properties */
        padding: 1px;
        /* DIMENSION Properties */
        min-width: 50px; 
        width: 5%;
        height: 30px; 
    }
</style>
