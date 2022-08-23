// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    //  name:"",
    //  gender:[
    //    {name:'男',value:"0",checked:true},
    //    {name:'女',value:"1",checked:false}
    //  ],
    //  skills:[
    //    {name:'HTML',value:"html",checked:false},
    //    {name:'CSS',value:"css",checked:false},
    //    {name:'JavaScript',value:"js",checked:false},
    //    {name:'PhotoShop',value:"ps",checked:false}
    //  ],
    //  option:""
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
    // console.log(e.detail.value)
    wx.request({
      url: 'http://127.0.0.1:3000/',
      method:'post',
      data:e.detail.value,
      success:res=>{
        console.log(res);
        //清空选择的数据
        let gender = [
          {name:'男',value:"0",checked:true},
          {name:'女',value:"1",checked:false}
        ];
        let skills = [
          {name:'HTML',value:"html",checked:false},
          {name:'CSS',value:"css",checked:false},
          {name:'JavaScript',value:"js",checked:false},
          {name:'PhotoShop',value:"ps",checked:false}
        ];
         this.setData({
           name: '',
           gender,
           skills,
           option:''
         });
         wx.showToast({
           title: '提交成功',
         })
      },
      fail:error=>{
        console.log(error)
      }
    })
  }
})
