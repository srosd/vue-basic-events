const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  }, 
  methods: {
    sum(n){this.counter += n;},
    substract(n){this.counter -= n;},
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    confirmName(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
  },
});

app.mount('#events');
