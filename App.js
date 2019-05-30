new Vue({
  el: '#app-2',
  data: {
    message: 'นัฐพงศ์ แก้วแสงสุข ',
    name : 'north',
    food:[],
    age : 24,
    seen: true, //V-if
    Count:0,
    Gender:'',
    Job:'',
    todos: [ //todos V-for
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    messagehover: 'You loaded this page on ' + new Date().toLocaleString()
  },
  methods:{
      getName:function(){
        return this.name
      },
      setName:function(){
        return this.name
      },
      addAge:function(){
            this.age++;
            console.log(this.age);
      },
      subtractAge:function(){
            this.age--;
            console.log(this.age);
      },
      addCount:function(){
        this.Count++;
        console.log(this.Count);
    }
  }
})