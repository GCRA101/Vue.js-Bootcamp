
<!--
IMPORTANT NOTES
    1. @submit.prevent
        - Vue.js Directive allowing to stop the default event handler for the form's 
          submission and replace it with our own method.
          The .prevent stops the default browser reload.
    2. Main LIFECYCLE HOOKS
        - created(), mounted(), updated(), beforeDestroy()
    3. Activation/Run of beforeDestroy()
        - beforeDestory() gets run NOT when closing/refreshing the Web Browser, but when...
            a. NAVIGATING AWAY from a ROUTE (using Vue Router)
            b. USING v-if=false to REMOVE the COMPONENT
            c. MANUALLY UNMOUNTING the App by with app.unmount();
    4. Use app.unmount() inside App.vue
        - Unlike inside an Html file, within the App.vue, we cannot use the method
          app.unmount() as the app object is not defined in App.vue.
          What we need to do is writing the following code:
            - in main.js:
                const app = createApp(App);
                app.mount('#app');
                // expose app globally if you want to call unmount from inside 
                window.__APP__ = app;
            - in App.vue:
                window.__APP__.unmount();
-->

<!-- TEMPLATE ------------------------------------------------------------------------>
<template>
    <div id="app">
        <h2>{{message}}</h2>
        <input id="myInput" v-model="counter" placeholder="Input counter"/>
        <button v-on:click="unmountApp">UNMOUNT</button>
    </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------->
<script>
  export default {
        // Reactive State
      data() {
          return {
              message: '',
              counter: 0,
              timer: null
          };
      },

      // Methods
      methods: {
          unmountApp() {
              window.__APP__.unmount();
          }
      },

      // CREATED() Hook
      created() {
          console.log('Component is created');
          this.message='Hello from created!'
      },
      // MOUNTED() Hook
      mounted() {
          console.log('Component is now in the DOM');
          document.querySelector('#myInput').focus();
          this.timer=setInterval(()=>console.log('Tick'),1000);
      },
      // UPDATED() Hook
      updated() {
          console.log(`The counter was updated to ${this.counter}`);
      },
      // BEFOREDESTROY() Hook
      beforeUnmount() {
          clearInterval(this.timer);
          console.log('Component is being destroyed.');
      }
  }
</script>

<!-- STYLE --------------------------------------------------------------------------->
<style scoped>
  #app > * {
      display: block;
      font-family: "Asimovian", sans-serif;
      font-weight: normal;
      margin: 10px 0px 10px 0px;
  }
</style>
