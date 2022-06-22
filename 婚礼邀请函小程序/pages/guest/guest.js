// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker:{
      index:0,
      arr:['0','1','2','3','4','5','6']
    },
  },

  pickerChange:function(e){
    this.setData({
      'picker.index':e.detail.value,
    })
  },

  //获取表单姓名并验证
  getName:function(e){
    this.checkName(e.detail.value);
  },

  //获取电话号码并验证
  getPhone:function(e){
    this.checkPhone(e.detail.value);
  },

  //验证姓名
  checkName:function(data){
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data,reg,'输入姓名有误');
  },

  //验证电话号码
  checkPhone:function(data){
    var reg = /^(((13)|(15)|(17)|(18))\d{9})$/;
    return this.check(data,reg,"手机号码输入有误！");
  },

  check:function(data,reg,errMsg){
    if(!reg.test(data)){
      wx.showToast({
        title: errMsg,
        icon:'none',
        duration:1500
      });
      return false;
    }
    return true;
  },

  //提交表单
  formSubmit:function(e){
    //e.detail.value为表单信息
    console.log(e.detail);
    console.log(e.detail.formid);
    console.log(e.detail.formId);
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    //再次验证表单信息
    if(this.checkPhone(phone) && this.checkName(name)){
      wx.showToast({
        title: '提交成功',
        icon:'success',
        duration:1500
      });
    }
  },

  // pickerChange:function(e){
  //   console.log(e.detail.value);
  //   this.setData({
  //     index:e.detail.value
  //   })
  // },

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