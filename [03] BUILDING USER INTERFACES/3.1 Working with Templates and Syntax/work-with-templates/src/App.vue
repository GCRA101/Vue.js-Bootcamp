
<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
  <div>
    <!-- Text Interpolation {{  }} -->
    <h2> {{  title }}</h2>
    <!-- Control Flow v-if + Text Interpolation {{  }} -->
    <p v-if="showDescription">{{description}}</p>
    <ul>
      <!-- List Rendering v-for + Text Interpolation {{  }} -->
      <li v-for="(feature, i) in features" :key="i"> {{ feature }}</li>
    </ul>
    <!-- Two-Way Binding v-model -->
    <input v-model="newFeature" placeholder="Add a feature" />
    <!-- Event Listening v-on/@ -->
    <button @click="addFeature">Add</button>
  </div>  
</template>

<!-- SCRIPT ------------------------------------------------------------------------->
<script>
export default {
  
  // Reactive State
  data() {
    return {
      title: 'Vue Template Features',
      description: 'Explore powerful declarative templates',
      showDescription: true,
      features: ['Interpolation', 'Binding', 'Conditional Rendering'],
      newFeature:''
    };
  },
  
  // Methods
  methods: {
    addFeature() {
      if (this.newFeature.trim()) {
        this.features.push(this.newFeature.trim());
        this.newFeature='';
      }
    }
  }
}
</script>
