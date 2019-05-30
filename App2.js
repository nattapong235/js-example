new Vue({
  el: '#app2',
  data: {
    newData:{
      empName:'' ,
      saraly:0
    },
     empGroup:[
       {
       empName:"สมพร",
       saraly:5000
       },
       {
       empName:"สมปอง",
       saraly:6000
       }
      ]
  },
  methods: {
    addEmp:function() {  //Method Dynamic รับค่าจากภายนอกได้
      this.empGroup.push({
        empName:this.newData.empName,
        saraly:this.newData.saraly
      });
      this.newData.empName = '',
      this.newData.saraly =0
    },showMessage:function(){
      //console.log("บันทึกข้อมูลเรียบร้อย");
      alert("บันทึกข้อมูลเรียบร้อย");
    }
  },
     computed:{ //รูปแบบการ Getter method แยกมาจัดการด้านคำนวณจาก data
       summation:function(){
         var sum = this.empGroup.reduce(function(value,data) { //reduce ทำหน้าที่จัดการอรา์เรย์ รวบรวมผลลัพธ์
           return value + Number(data.saraly);//ดึงข้อมูล salary มาแปลงเป็นตัวเลข
         },0); //ค่าเริ่มต้น reduce = 0
            return sum;
       },
       avg:function(){
         var sum = this.empGroup.reduce(function(value,data){
           return value + Number(data.saraly);
         },0);
         return sum/this.empGroup.length;
       }
     },
     watch:{ //หลังจากที่ผลรวมของข้อมูลทำงานเสร็จเรียบร้อยแล้ว
       summation:function(){
         //ทำอะไร
         this.showMessage();
       }
    }
})