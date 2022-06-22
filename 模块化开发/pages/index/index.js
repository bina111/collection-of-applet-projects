var wel = require("../../utils/welcome.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:wel.welcome,
    item:{
      index:1,
      msg:"hahahaha",
      time:'2019-02-02',
      userInfo:{},
      value:'',
    },
    isClick:true,
    testContent:[]
  },

  getValue:function(e){
    this.setData({
      value:e.detail.value
    })
  },

  dianwo:function(){
   
    console.log(this.data.testContent);
    // wx.navigateTo({
    //   url: '/pages/page1/page1?my=123&ie=456',
    // })
  },

  click:function(){
    console.log(this.options);
    this.setData({
      isClick:!this.data.isClick
    })
  },

  // //获取用户姓名和头像
  // getUserInfo:function(){
  //   var that = this;
  //   wx.getUserProfile({
  //     desc:"用于完善用户头像和昵称",
  //     success:function(res){
  //       console.log(this);
  //       that.setData({
  //         userInfo:res.userInfo,
  //       });
  //       console.log(that.data.userInfo);
  //       console.log(that);
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})