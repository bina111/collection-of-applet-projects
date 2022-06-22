var animation;
var angle = 0; //角度
var x1,y1,x3,y3;
// 判断坐标系是顺时针还是逆时针　
function judgeturn(x1, y1, x3, y3) {
  var x2 = 150;　　
  var y2 = 150;　　
  return !((x2 - x1) * (y3 - y2) - (y2 - y1) * (x3 - x2) > 0)　
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation:''
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
    //创建动画
    animation = wx.createAnimation({
      delay: 0,
      duration:1000,
      timingFunction:'ease'
    })
  },

  //滑动开始
  start:function(e){
    x1 = e.touches[0].clientX;　　
    y1 = e.touches[0].clientY;
  },

  //滑动结束
  end:function(e){
    x3 =e.changedTouches[0].clientX;
    y3 =e.changedTouches[0].clientY;
    if(judgeturn(x1,y1,x3,y3)){
      angle = angle+35;
      animation.rotate(angle).step();
      this.setData({
        animation:animation.export()
      })
    }
    else{
      angle = angle-30;
      animation.rotate().step();
      this.setData({
        animation:animation.export()
      })
    }
  },

  rotate:function(e){
    animation.rotate(Math.random()*720-360).step();
    this.setData({
      animation:animation.export()
    })
  },

  scale:function(e){
    animation.scale(Math.random()*2).step();
    this.setData({
      animation:animation.export(),
    });
  },

  translate:function(){
    animation.translate(Math.random()*100-50,Math.random()*100-50).step();
    this.setData({
      animation:animation.export()
    });
  },

  skew:function(){
    animation.skew(Math.random()*90,Math.random()*90).step();
    this.setData({
      animation:animation.export(),
    });
  },

  rotateAndScale:function(){
    animation.rotate(Math.random()*720-360).scale(Math.random()*2).step();
    this.setData({
      animation:animation.export()
    });
  },

  rotateThenScale:function(){
    animation.rotate(Math.random()*720-360).step()
    .scale(Math.random()*2).step();
    this.setData({
      animation:animation.export(),
    })
  },

  all:function(){
    // 旋转-缩放-移动-倾斜　
    animation.rotate(Math.random()* 720 - 360)　　
    .scale(Math.random()* 2)　　
    .translate(Math.random()* 100 - 50, Math.random()* 100 - 50)　　
    .skew(Math.random()* 90, Math.random()* 90)　　 
    .step()　　
    this.setData({　　 
      animation: animation.export()　 
    })
  },

  allOrder:function(){
    // 旋转-缩放-移动-倾斜　
    animation.rotate(Math.random()* 720 - 360).step()　　
    .scale(Math.random()* 2).step()　　
    .translate(Math.random()* 100 - 50, Math.random()* 100 - 50).step()　　
    .skew(Math.random()* 90, Math.random()* 90)　　 
    .step()　　
    this.setData({　　 
      animation: animation.export()　 
    })
  },

  reset:function(){
    animation.rotate(0).scale(1).translate(0,0).skew(0,0).step();
    this.setData({
      animation:animation.export()
    });
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
