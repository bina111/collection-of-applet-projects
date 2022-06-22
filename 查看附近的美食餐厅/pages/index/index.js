// index.js

//引入sdk核心类
import QQMapWX from '../../utils/qqmap-wx-jssdk.min.js'
var qqmapsdk;
var key = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: {　　　iconPath: "/resources/others.png", // 图标资源路径　　
    id: 0, // 标记点id，单击事件回调会返回此id，为每个marker设置Number类型id　　
    latitude: 23.099994,　　 // 纬度　　
    longitude: 113.324520,　 // 经度　　
    width: 50,　　　　　　　 // 图标宽度　　
    height: 50　　　　　　　 // 图标高度
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类　　　
    qqmapsdk = new QQMapWX({
      key: '申请的key'　　　
    });
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
    qqmapsdk.search({

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
