
<!-- TEMPLATE ---------------------------------------------------------------------------------->
<template>
  <div>
    <!-- HTML Content -------------------------------------------------------------------------->
    <!-- INLINE STYLE BINDING - Object Syntax -->
    <div :style="{color: textColor, fontSize: fontSize + 'px'}"> Styled Text </div>
    <hr/>
    <!-- INLINE STYLE BINDING - Array Syntax -->
    <div :style="[baseStyle, overrideStyle]"> Styled Div </div>
  </div>
</template>

<!-- SCRIPT ------------------------------------------------------------------------------------>
<script>
  export default {
      // Reactive State
      data() {
          return {
              // Properties for Object Syntax
              textColor: 'red',
              fontSize: 18,
              // Properties for Array Syntax
              baseStyle: {color:'blue', padding:'10px'},
              overrideStyle: { fontWeigth: 'bold'}
          }
      }
  }
</script>

<!-- STYLE ------------------------------------------------------------------------------------>
<style scoped>
</style>