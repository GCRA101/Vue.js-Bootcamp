
<!--
IMPORTANT NOTES:
    1) Managing CSS Styling
        - via Classes (Good Practice)
        - via Inline Style (Bad Practice)
    2) Links to Google Fonts
        - Links to external files such as Google Fonts are NOT to be placed in .vue files.
          They MUST BE placed at the BOTTOM of the <head></head> section of the index.html file
          inside the /public folder of the project.
    3) Scoped CSS Style
        - Always use the opening tag <style scoped> for the style element in the .vue file in order
          to prevent the css properties from leaking out of it.
-->


<!-- TEMPLATE ------------------------------------------------------------------------------>
<template>
    <div>
      <!-- CLASS BINDING + INLINE STYLE BINDING + EVENT LISTENING + TEXT INTERPOLATION -->
      <button
          :class="{'btn': true, 'btn-success':isToggled, 'btn-danger':!isToggled}"
          :style="{ fontSize: isToggled ? '18px' : '14px'}"
          @click="isToggled = !isToggled"
      >
          {{ isToggled ? 'On' : 'Off' }}
      </button>

  </div>
</template>

<!-- SCRIPT -------------------------------------------------------------------------------->
<script>
export default {
    data() {
        return {
            isToggled: true
        }
    }
}
</script>

<!-- STYLE --------------------------------------------------------------------------------->
<style scoped>
  .btn {
      background-color: grey;
      border: 1px solid black;
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 20px;
      cursor: pointer;
  }

  .btn-success {
      background-color: greenyellow;
      border: 3px solid blue;
      font-family: "Asimovian", sans-serif;
  }

  .btn-danger {
      background-color: orange;
      border: 3px solid red;
      font-family: "UnifrakturMaguntia", cursive;
  }
</style>
