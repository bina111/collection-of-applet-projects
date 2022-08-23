// index.js


Page({
  data: {
    num1:0,
    num2:0,
    result:""
  },
  // 事件处理函数
  
  onLoad() {
    console.log("onLoad")
  },

  num1change:function(e){
    let num1 = Number(e.detail.value);
    this.setData({
      num1:num1
    });
    // console.log(e);
  },

  //comfirm事件仅用于type为text的input使用
  // confirmnum1:function(e){
  //   let num1 = Number(e.detail.value);
  //   this.setData({
  //     num1:num1
  //   });
  //   console.log("按下了键盘的确认键")
  //   console.log(e);
  // },

  num2change:function(e){
    let num2 = Number(e.detail.value);
    this.setData({
      num2:num2
    });
    // console.log(e)
  },

  compare:function (e) { 
    let str="两数相等！"; 
    if(this.data.num1>this.data.num2){
      str = "第一个数比较大";
    }
    else if(this.data.num1<this.data.num2){
     str = "第二个数比较大";
    }
    this.setData({
      result:str
    })
  }

})
