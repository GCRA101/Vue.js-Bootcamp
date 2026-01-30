// 1. Instantiate a new Vue Application + Build its Reactive State, Methods, Watchers...
const app = Vue.createApp({
    // Reactive State
    data() {
        return {
            email:''
        };
    },
    // Methods
    methods: {
        submitForm(){
            // Simple Manual Validation
            if (!this.email.includes('@')) {
                alert(`Email submitted: ${this.email}`);
            } else {
                alert(`Email submitted: ${this.email}`);
            }
            return;
        }
    }
});
// 2. Instruct Vue.js to take control of the HTML element having id=app
app.mount("#app");