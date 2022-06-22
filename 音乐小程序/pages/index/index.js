// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:0,
    tab:0,

    //音乐数据
    playList:[
      {
        id:1,
        title:"孤勇者",
        singer:'陈奕迅',
        src:"https://m701.music.126.net/20220405194609/9fda680a4196fb7e026036ac40ae4733/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11983357028/fa35/71e6/ecfb/e58acc011ea31f62f8aad4bb0ce96846.m4a",
        imageSrc:"/images/cover.jpg"
      },
      {
        id:2,
        title:"哪里都是你",
        singer:'队长',
        src:"https://m701.music.126.net/20220405220236/271f5575d734ede01542763f0184ab82/jdyyaac/015a/5259/025a/603087e667e391674ac550a240ab60c5.m4a",
        imageSrc:"/images/cover.jpg"
      },
      {
        id:3,
        title:"予你",
        singer:'队长',
        src:"https://m701.music.126.net/20220405220359/35fe6d960b2e883d859c6c76774f65c0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11679155749/cd4e/66cc/7d55/c0ee5d6f563fb362f81f41f30451cd31.m4a",
        imageSrc:"/images/cover.jpg"
      },
      {
        id:4,
        title:"李白",
        singer:'李荣浩',
        src:"https://m701.music.126.net/20220405220359/35fe6d960b2e883d859c6c76774f65c0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11679155749/cd4e/66cc/7d55/c0ee5d6f563fb362f81f41f30451cd31.m4a",
        imageSrc:"/images/cover.jpg"
      }
    ],
    // 记录音乐的播放状态、播放位置
    state:'paused',//state表示音乐的播放状态，其值为paused表示暂停，running表示正在播放
    playIndex:0,//表示播放的曲目的id
    play:{
      currentTime:'00:00',  //表示播放时长
      duration:'00:00', //总时长
      percent:0, //播放进度
      title:'',  //歌曲标题
      singer:'', //歌手姓名
      imageSrc:'/images/cover.jpg' //歌曲封面
    }
  },

  audioCtx: null,

  //事件处理函数
  //通过点击item实现页面切换
  changeItem:function(e){
    var item = e.target.dataset.item;
    this.setData({
      item:item,
    });
  },

  //滑动改变页面
  changeCurrent:function(e){
    this.setData({
      tab:e.detail.current
    })
  },

  //点击底部播放按钮播放音乐
  play:function(){
    this.audioCtx.play();
    this.setData({
      state:"running"
    })
  },

  //点击暂停按钮暂停音乐播放
  pause:function(){
    this.audioCtx.pause();
    this.setData({
      state:'paused'
    })
  },

  //播放下一首
  next:function(e){
    var index = this.data.playIndex;
    index++;
    if(index>3)
      index = 0;
    // 可以写成三元运算符
    // var index = this.data.playIndex>=this.data.playList.length-1?0:this.data.playIndex+1;
    this.setMusic(index);  //切换音乐
    this.pause();

  },

  //滑动进度条改变进度
  sliderchange:function(e){
    var second = e.detail.value * this.audioCtx.duration /100;
    this.audioCtx.seek(second);
  },

  //实现播放列表换取功能
  change:function(e){
    this.setMusic(e.currentTarget.dataset.index);
    this.play();
  },

  //点击底部播放列表图标转向播放列表
  changePage:function(){
    this.setData({
      item:2
    });
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
    //创建音频播放器实例
    this.audioCtx = wx.createInnerAudioContext();
    var that = this;
    //播放失败检测
    this.audioCtx.onError(function(){
      console.log('播放失败：'+this.audioCtx.src);
    });
    //播放完自动切换下一曲
    this.audioCtx.onEnded(function(){
      that.next();
    });
    //自动更新播放速度
    this.audioCtx.onPlay(function(){});
    this.audioCtx.onTimeUpdate(function(){
      that.setData({
        'play.duration':formatTime(that.audioCtx.duration),
        'play.currentTime':formatTime(that.audioCtx.currentTime),
        'play.percent':that.audioCtx.currentTime/that.audioCtx.duration *100
      });
    });

    //跳转到指定位置时触发
    this.audioCtx.onSeeked(function(){
      that.setData({
        'play.currentTime':formatTime(that.audioCtx.currentTime)
      });
    })
    this.setMusic(0);  //默认播放第一首

    //格式化时间
    function formatTime(time){
      var munite = Math.floor(time/60)%60;
      var sceond = Math.floor(time)%60;
      return (munite<10?'0'+munite:munite)+':'+(sceond<10?'0'+sceond:sceond);
    }
  },

  //选择音乐函数
  setMusic:function(index){
    var music = this.data.playList[index];
    this.audioCtx.src = music.src;
    this.setData({
      playIndex:index,
      'play.title':music.title,
      'play.singer':music.singer,
      'play.imageSrc':music.imageSrc,
      'play.currentTime':'00:00',
      'play.duration':'00:00',
      'play.percent':0
    });
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
