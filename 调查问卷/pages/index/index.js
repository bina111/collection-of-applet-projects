// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
     name:"张三",
     gender:[
       {name:'男',value:"0",checked:true},
       {name:'女',value:"1",checked:false}
     ],
     skills:[
       {name:'HTML',value:"html",checked:true},
       {name:'CSS',value:"css",checked:true},
       {name:'JavaScript',value:"js",checked:false},
       {name:'PhotoShop',value:"ps",checked:false}
     ],
     option:"测试"
  },
  // 事件处理函数
 
  onLoad() {
    var that = this;
    wx.request({
      url:'http://127.0.0.1:3000',
      success:function(res){
        that.setData(res.data)
      }
    })
  },

  submit:function(e){
    wx.request({
      url: 'http://127.0.0.1:3000/',
      method:'post',
      data:e.detail.value,
      success:function(res){
        console.log(res);
      }
    })
  }
})
