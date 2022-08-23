// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no:null,
    company: ['sf', 'sto', 'yt', 'yd', 'tt'],
    com: ['顺丰', '申通', '圆通', '韵达', '天天'],  //快递公司
    expressInfo:null,    //查询的物流数据
    index:0,   //选择公司的索引

  },

  //消息处理函数
  //处理picker，选择不同快递公司
  companyInput:function(e){
    var index = e.detail.value;
    this.setData({
      index:index
    })
  },

  //获取输入的单号
  noinput:function(e){
    this.setData({
      no:e.detail.value,
    });
  },

  //提交单号和快递公司进行查询
  search:function(){
    wx.showLoading({
      title: '加载中',
    });

    wx.request({
      url: `http://127.0.0.1:3000/search?no=${this.data.no}&company=${this.data.company[this.data.index]}`,
      success:res=>{
        this.setData({
          expressInfo:res.data
        });
        wx.hideLoading();
      }
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