// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // src:"http://vjs.zencdn.net/v/oceans.mp4",
    // danmuList:[
    //   {text:"第一条弹幕", color:"#ff0000", time:1},
    //   {text:"第二条弹幕", color:"#ff0660", time:3},
    // ],
    //inputValue: '',  //输入数据
    //视频数据
    movieList:[
      {
        create_time:'1532519734589',
        title: '海边随拍',
        src: 'http://vjs.zencdn.net/v/oceans.mp4'
      },
      {
        create_time:'1532519777690',
        title: '勿忘心安',
        src: 'http://vjs.zencdn.net/v/oceans.mp4'
      },
      {
        create_time:'1532519794991',
        title: '点滴记忆',
        src: 'http://vjs.zencdn.net/v/oceans.mp4'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  // 实现发送弹幕
  videoContent: null,
  onReady() {
    this.videoContent = wx.createVideoContext('myVideo');
    //创建视频实例
  },

  //测试代码功能
  // // 获取输入
  // bindInputBlur:function(e){
  //   this.setData({
  //     inputValue:e.detail.value,
  //   });
  // },
  // // 发送弹幕
  // bindSendDanmu:function(){
  //   this.videoContent.sendDanmu({
  //     text:this.data.inputValue,
  //     color:'#f90',
  //   });
  //   this.setData({
  //     inputValue:'',
  //   });
  // },

  // 获取视频
  bindButtonTap:function(){
    wx.chooseVideo({   //选择视频接口
      camera: 'back',
      sourceType:['album', 'camera'],  //手机录像或者选择视频文件
      maxDuration:60,    //拍摄的最长时间
      success:res=>{  //成功时执行的回调
        this.setData({
          src:res.tempFilePath
        });
        console.log(res.tempFilePath);
      }
    })
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