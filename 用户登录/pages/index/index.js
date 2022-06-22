// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   hasUserInfo:false,
   userInfo:{}
  },
  // 事件处理函数
  //获取用户信息
  getUserInfo:function(){
    wx.getUserProfile({
      desc: '获取昵称和头像',
      success:res=>{
        console.log(res.userInfo);
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
    }
  })
 },
  


  onLoad() {
    
  },
  
  getCredit:function(e){
    wx.request({
      url: 'http://127.0.0.1:3000/credit',
      data:{token:app.globalData.token},
      success:res=>{
        console.log(res.data);
      }
    })
  },
})
