// 1. Instantiate a new Vue Application + Build its Reactive State, Methods...
const app = Vue.createApp({
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
            app.unmount();
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
    },

});
// 2. Instruct Vue.js to take control of the html element having id=app
app.mount("#app");