// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:'女',
    username:'xiaoyuere',
    imageUrl:"/images/avatar.jpg",
  },

  //  处理函数
  // 更换头像
  changeAvatar:function(e){
    wx.chooseImage({
      count: 1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:res=>{
        this.setData({
          imageUrl:res.tempFilePaths
        })
      }
    });
  },

  //跳转到修改页修改资料
  jumpModify:function(){
    wx.navigateTo({
      url: '/pages/modify/modify?username='+encodeURIComponent(this.data.username)+'&gender=' + encodeURIComponent(this.data.gender),
    })
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