Page({

  /**
   * 页面的初始数据
   */
  id:0,
  data: {
    scrollTop: 0,
    message: '',
    newslist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.connectSocket({
      url: 'ws://127.0.0.1:3000',
    });

    // //连接成功
    // wx.onSocketOpen((result) => {
    //   console.log("连接成功");
    //   wx.sendSocketMessage({
    //     data: '您好',
    //   });

    // })
    // wx.onSocketMessage((result) => {
    //   console.log(result);
    // });

    // wx.onSocketClose((result) => {
    //   console.log("连接已关闭")      
    // })
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    //监听服务器发送过来的消息
    wx.onSocketMessage((result) => {
      var data = JSON.parse(result.data);
      data.role = 'server';
      data.id = ++this.id;
      var list = this.data.newslist;
      list.push(data);
      this.setData({
        newslist:list
      });
      this.rolling_bottom();
    });

    //画圆
    // wx.createSelectorQuery().select("#cas")
    // .fields({
    //   node:true,
    //   size:true,
    // }).exec((res)=>{
    //   var canvas = res[0].node;
    //   //在这里设置画布大小才能正确显示比例，不然就按默认比例2：1了
    //   canvas.width = 300;
    //   canvas.height = 300;
    //   var ctx = canvas.getContext('2d');
    //   ctx.lineWidth = 2;
    //   ctx.strokeStyle = '#ff0000';
    //   ctx.arc(150,150,100,0,2*Math.PI,true);
    //   ctx.stroke();
    // })
  },

  //使聊天内容始终显示在最底端
  rolling_bottom:function(){
    var s = 0;
    wx.createSelectorQuery().selectAll(".list")
    .boundingClientRect(rects=>{
      this.setData({
        scrollTop:rects[0].bottom,
      })   
    }).exec();
  },
  //获取输入的数据
  bindChange:function(e){
    this.setData({
      message:e.detail.value,
    });
  },

  //发送消息
  send:function(e){
    //判断发送消息是否为空
    if(!this.data.message){
      wx.showToast({
        title: '发送消息不能为空！',
        duration:1000,
        icon:'none'
      });
    }
    else{
      var temp = {
        id : ++this.id,
        content : this.data.message,
        role : 'me',
        date: new Date(),
      };
      wx.sendSocketMessage({
        data: this.data.message,
      });
      var list = this.data.newslist;
      list.push(temp);
      this.setData({
        newslist:list,
        message:''
      });
    }
   this.rolling_bottom();
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
    wx.closeSocket();
    console.log("链接已关闭")
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