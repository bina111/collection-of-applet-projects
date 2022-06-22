// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   isPlayingMusic:false,
  },
  // 事件处理函数
  // 点击播放按钮进行播放和暂停
  play:function(){
    if(this.data.isPlayingMusic){
      this.bgm.pause();
    }
    else{
      this.bgm.play();
    }
    this.setData({
      isPlayingMusic:!this.data.isPlayingMusic,
    })
  },
  
  onLoad() {
    
  },

  //定义背景音乐
  bgm:null,
  bgm_src: "https://m801.music.126.net/20220407142516/aac83bb617526206d9b35f675accdef1/jdyyaac/565b/065f/0358/a1cd0e25a815dffcc0c1422398efde9e.m4a",
  bgm_coverImgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5fb8a03efd05f8ede53b3fbdb1ca905f4924d5b313a7f9-G3pWLZ_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651903599&t=47d99051c180d717a4f176ea745faa69",
  onReady(){
    this.bgm = wx.getBackgroundAudioManager();
    this.bgm.title = "merry me";
    this.bgm.epname = "wedding";
    this.bgm.singer = "singer";
    this.bgm.coverImgUrl = this.bgm_coverImgUrl;
    this.bgm.onCanplay(()=>{
      this.bgm.pause();
    });
    this.bgm.src = this.bgm_src;
    //点击底部的音乐栏暂停和播放同步图标
    this.bgm.onPause(()=>{
      this.setData({
        isPlayingMusic:false,
      })
    });
    this.bgm.onPlay(()=>{
      this.setData({
        isPlayingMusic:true
      })
    })
  },

  //点击电话图标给新郎打电话
  callGroom:function(){
    wx.makePhoneCall({
      "phoneNumber":'19924685520'
    });
  },

  //给新娘打电话
  callBrige:function(){
    wx.makePhoneCall({
      phoneNumber: '19924684463',
    });
  },

  
  
})
