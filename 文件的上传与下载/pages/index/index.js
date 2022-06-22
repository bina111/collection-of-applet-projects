// index.js

var tempFilePath = null;  //音频文件临时路径
var audioCtx = wx.createInnerAudioContext(); //获取音频对象
var rec = wx.getRecorderManager();  //获取录音管理对象
rec.onStop(res=>{   //录音停止时获取音频临时路径
  tempFilePath = res.tempFilePath;
  console.log(tempFilePath);
})


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  //开始录音
  record:function(){
    rec.start();
  },

  //停止录音
  stop:function(){
    rec.stop();
  },

  //回放录音
  playback:function(){
    audioCtx.src = tempFilePath;
    audioCtx.play();
  },

  //上传录音文件
  upload:function(){
    if(!tempFilePath){
      wx.showToast({
        title: '您还没有录音',
        icon:'none',
        duration:2000
      });
      return ;
    }
    wx.uploadFile({
      filePath: tempFilePath,
      name: 'file',
      url: 'http://127.0.0.1:3000/upload',
    })
  },

  //播放文章
  play:function(){
    wx.showLoading({
      title: '下载中',
      mask:true,
    });
    //从服务器上，把音频下载到本地
    wx.downloadFile({
      url: 'http://127.0.0.1:3000/download',
      success:res=>{
        //下载完成，播放音频
        audioCtx.src = res.tempFilePath;
        audioCtx.play();
        wx.hideLoading();
      }
    });
  },

  //暂停、继续播放
  pause:function(){
    if(audioCtx.paused){
      audioCtx.play()
    }
    else{
      audioCtx.pause();
    }
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