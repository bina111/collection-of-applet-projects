// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //处理函数
  //跳转到个人资料页面
  info:function(){

    //该跳转方法不销毁前一个页面
    wx.navigateTo({
      url: '/pages/detail/detail',
    });

    //该方法销毁前一个页面，所以没有返回箭头
    // wx.redirectTo({
    //   url: '/pages/detail/detail',
    // })
  },

  //跳转到物流查询页面
  order:function(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },

  //跳转到收货地址页面
  address:function(){
    wx.redirectTo({
      url: '/pages/adress/address',
    })
  },

  //拨打客服电话
  contact:function(){
    wx.makePhoneCall({
      phoneNumber: '000-22-598',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})