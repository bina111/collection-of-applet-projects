// pages/modify/modify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    gender:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var username = decodeURIComponent(options.username);
    var gender = decodeURIComponent(options.gender);
    this.setData({
      username:username,
      gender:gender,
    })
  },

  //处理函数
  //提交表单，修改个人信息
  formSubmit:function(e){
    var formData = e.detail.value;  //获取表单数据
    var pages = getCurrentPages();  //获取当前页面栈
    var prevPage = pages[pages.length-2];  //获取上一个页面
    //调用上一个页面栈，把数据传给上一个页面
    prevPage.setData({
      username:formData.name,
      gender:formData.gender=='0'?'男':'女',
    });
    wx.navigateBack();
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