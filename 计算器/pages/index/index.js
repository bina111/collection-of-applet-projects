// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:"0",
    op:""
  },

  result:null,
  isClear:false,

  //处理数字按钮
  numBtn:function(e){
    let num = e.target.dataset.val;
    if(this.data.num === '0' || this.isClear)
    {
      this.setData({
        num:num
      });
      this.isClear=false;
    }
    else{
      this.setData({
        num:this.data.num+num
      })
    }
  },

  //操作符函数
  opBtn:function(e){
    let op = this.data.op;
    let num = Number(this.data.num);
    //将操作符换成当前操作符
    this.setData({
      op:e.target.dataset.val
    });
    
    //如果isClear为true，则替换前一个操作符
    if(this.isClear){
      return ;
    }

    //将isClear变成true，说明已输入操作符
    this.isClear=true;

    //如果结果为null，则直接改变result返回
    if(this.result===null){
      this.result = num;
      return ;
    }

    //进行各类操作符结果计算
    switch(op){
      case '+':this.result=this.result + num;break;
      case '-':this.result=this.result - num;break;
      case '*':this.result=this.result * num;break;
      case '/':this.result=this.result / num;break;
      case '%':this.result=this.result % num;break;
      default:break;
    }
    this.setData({
      num:this.result+""
    });
  },

  //清除按钮
  delBtn:function(){
    let num = this.data.num.substr(0,this.data.num.length-1);
    this.setData({
      num:num===''?'0':num
    });
  },

  //重置按钮
  resetBtn:function(e){
    this.result = null;
    this.isClear = false;
    this.setData({
      num:'0',
      op:''
    });
  },

  //小数点按钮
  dotBtn:function(e){
    let dot = e.target.dataset.val;
    if(this.isClear){
      this.setData({
        num:'0.'
      });
    
    }
    if(this.data.num.indexOf('.')>=0){
      return;
    }
    else{

      this.setData({
        num:this.data.num+".",
      })
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
