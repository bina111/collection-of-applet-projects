//首页页面逻辑

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  //处理函数
  changeImage:function(){  //跳转到个人中心页面
    //该跳转只能跳转到tabar页面
    wx.switchTab({
      url: '/pages/person/person',
    });

    //第二种方法既可以跳转到tabar页面也能跳转到非tabar页面
    // wx.reLaunch({
    //   url: '/pages/person/person',
    // });
  },

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