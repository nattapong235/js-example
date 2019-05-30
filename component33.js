new Vue({
  el:"#vue-app",
  data:{
    newComment:'',
    comments:['สวัสดีตอนเช้า','ทักทาย','ยินดีต้อนรับ','สบายดี']
  },
  method: {
    addComment:function() {  //Method Dynamic รับค่าจากภายนอกได้
      this.comments.push(this.newComment);
      this.newComment=''
    }
  } 
});