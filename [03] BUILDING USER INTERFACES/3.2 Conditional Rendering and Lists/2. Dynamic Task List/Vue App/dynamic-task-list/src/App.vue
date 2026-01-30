
<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <h2>My Tasks</h2>
    <!-- Two-Way Binding -->
    <input v-model="newTask" placeholder="Add a new task" />
    <!-- Event Listening -->
    <button v-on:click="addTask">Add</button>
    <!-- List Rendering with v-for -->
    <ul>
      <li v-for="(task, i) in tasks" :key="i">
        <!-- Text Interpolation + JS Ternary Expression -->
        <span :style="{ textDecoration: task.done ? 'line-through' : 'none', marginRight: '10px' }">
          {{  task.text + "  " }}
        </span>
        <!-- Event Listening + Text Interpolation + JS Ternary Expression -->
        <button @click="toggleTask(i)">{{ task.done ? 'Undo' : 'Complete' }}</button>
        <button @click="removeTask(i)">Remove</button>
      </li>
    </ul>
    <!--- Conditional Rendering with v-if -->
    <p v-if="tasks.length === 0">You have no tasks.</p>
  </div>
</template>

<!-- SCRIPT ------------------------------------------------------------------------->
<script>

export default {
  // Reactive State
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  // Methods
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({text: this.newTask.trim(), done: false});
        this.newTask='';
      }
    },
    toggleTask(index) {
      this.tasks[index].done=!this.tasks[index].done;
    },
    removeTask(index) {
      this.tasks.splice(index,1);
    }
  }
};
</script>
