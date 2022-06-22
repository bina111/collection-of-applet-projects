Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ['日', '一', '二', '三', '四', '五', '六'],  //头部星期
    dateArr:[],   //日期数组，存放一个月的日期
    year:0,   //当前年份
    month:0,  //当前月份
    isToday:0,    //当前时间，特殊标记
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    this.setData({
      year:year,
      month:month,
      isToday: '' + year + month + date.getDate(),
    });
     this.initDate(year,month);
  },

  //初始化日历
  initDate(setYear,setMonth){
    let dateArr = [];          //需要遍历的日历数组数据
    let arrLen = 0;            //dateArr的数组长度
    let month = setMonth - 1; //date对应的月份，实际月份减一
    const startWeek = new Date(setYear,month,1).getDay();      //1号开始于周几
    let dayNums = 0;  //获取该月的天数
    if(setMonth == 12){
      dayNums = 31;
    }
    else{
      dayNums = new Date(setYear,setMonth,0).getDate();
    }
    // 需要遍历数组的长度为周几数加上天数
    arrLen = startWeek + dayNums;
    for(let i = 0;i < arrLen; i++){
      let obj = {};
      if(i>=startWeek){
        let num = i - startWeek + 1;
        obj = {
          dateNum: num,
          isToday: '' + setYear + setMonth + num,
          isSuccess:true  //是否完成目标
        }
      }
      else{
        obj = {};
      }
      dateArr.push(obj);
    }
    this.setData({
      dateArr:dateArr
    })
  },

  //下一个月
  nextMonth:function(){
    const month = this.data.month + 1 > 12 ? 1 : this.data.month + 1;
    const year = this.data.month + 1 > 12 ? this.data.year + 1 : this.data.year;
    this.setData({
      year:year,
      month:month
    })
    this.initDate(year,month);
  },

  //上一个月
  lastMonth:function(){
    const month = this.data.month - 1 < 1 ? 12 : this.data.month - 1;
    const year = this.data.month - 1 < 1 ? this.data.year - 1 : this.data.year;
    this.setData({
      year:year,
      month:month
    })
    this.initDate(year,month);
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