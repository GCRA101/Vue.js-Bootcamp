
<!--
IMPORTANT NOTES:
    1) Multiple Class Binding Options
        - via Object
        - via Array
        - via Computed Properties
    2) Links to Google Fonts
        - Links to external files such as Google Fonts are NOT to be placed in .vue files.
          They MUST BE placed at the BOTTOM of the <head></head> section of the index.html file
          inside the /public folder of the project.
    3) THIS keyword
        -To be able to use and modify the values assigned to the variables of the reactive state,
          we have to call them using the "this" keyword. The use of the "this" keyword is mandatory!
          It is NOT OPTIONAL!!
-->

<template>
        <div id="app">
            <div class="section">
                <!-- CLASS BINDING - Object Syntax -->
                <div v-bind:class="{ active: isActive, 'text-bold': isBold}">Stylish Text</div>
                <button @click="textBold">Bold</button>
            </div>
            <div class="section">
                <!-- CLASS BINDING - Array Syntax -->
                <div v-bind:class="['box', isSelected ? 'highlight' : '']">Box</div>
                <button @click="highlight">Highlight</button>
            </div>
            <div class="section">
                <!-- CLASS BINDING - Computed Properties Syntax-->
                <div v-bind:class="buttonClasses">Click me</div>
                <button @click="disableBtn">Disable</button>
            </div>
        </div>
</template>

<script>
  export default {
        // Reactive State
        data() {
            return {    
                isActive: true,
                isBold: true,
                isSelected: false,
                isPrimary: true,
                isDisabled: false
            }
        },
        // Methods
        methods: {
            textBold() {
                this.isBold=!this.isBold;
            },
            highlight() {
                this.isSelected=!this.isSelected;
            },
            disableBtn() {
                this.isDisabled=!this.isDisabled;
            }
        },
        // Computed
        computed: {
            buttonClasses() {
                return {
                    'btn': true,
                    'btn-primary': this.isPrimary,
                    'btn-disabled': this.isDisabled
                };
            }
        }
  }
</script>

<style scoped>
              /* General Styling */
            div {
                min-width: 25%;
            }
            
            button{
                margin: 0px 10px 0px 20px;
            }

            .section {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: start;
                align-items: center;
            }

            /* Specific Styling for Testing Class Bindings */
            .active {
                color: orange;
                font-size: 20px;
                outline-width: 10px;
                outline-color: green;
                visibility: visible;
            }

            .text-bold{
                color: black;
                font-size: 30px;
                font-weight: bold;
                font-family: "UnifrakturMaguntia", cursive;
            }

            .box{
                border-radius:0%;
                border: 5px solid black;
                margin: 10px 10px 20px 10px;
                padding: 10px 20px 10px 20px;
                box-shadow: 10px 5px 5px grey;
            }

            .highlight{
                border: 10px solid red;
                border-image: linear-gradient(yellow, red) 30;             
                box-shadow: 10px 5px 5px yellow;
            }

            .btn{
                border: 2px solid grey;
            }

            .btn-primary{
                border: 10px solid black;
                border-radius: 10%;
            }

            .btn-disabled{
                cursor: not-allowed;
                opacity: 0.2;
            }
</style>
