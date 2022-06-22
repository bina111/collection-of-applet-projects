// pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //事件处理
  //滚动处理
  scroll:function(e){
    console.log(e);
  },

  sliderChanging:function(e){
    console.log(e.detail.value);
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
      //创建InnerAudioContext实例
      var audioCtx = wx.createInnerAudioContext();
      //设置音频资源
      audioCtx.src = "https://m701.music.126.net/20220405194609/9fda680a4196fb7e026036ac40ae4733/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11983357028/fa35/71e6/ecfb/e58acc011ea31f62f8aad4bb0ce96846.m4a";
      audioCtx.onPlay(function(){
        console.log("开始播放！");
      });
      audioCtx.onError(function(res){
        console.log(res.errMsg);
        console.log(res.errCode);  
      });
      audioCtx.play();
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