// index.js
Page({

  //初始化图形的宽高
  width:0,
  height:0,

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取系统信息
    wx.getSystemInfo({
      //获取系统信息成功，保存获取到的系统窗口的宽高
      success:res=>{
        this.width = res.windowWidth;
        this.height = res.windowHeight;
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

   //监听页面初次渲染
   timer:null,
  onReady: function () {

    //#region 
    // // 将角度转换为弧度
    // const D6 = 6 * Math.PI / 180
    // const D30 = 30 * Math.PI / 180
    // const D90 = 90 * Math.PI / 180

    // // 创建CanvasContext
    // var ctx = wx.createCanvasContext('myCanvas')

    // var width = this.width
    // var height = this.height

    // // 计算表盘半径，留出 30px 外边距
    // var radius = width / 2 - 30
 
    // draw()
    // this.timer = setInterval(draw, 1000)

    // function draw() {
    //  // 设置坐标轴原点为窗口的中心点
    //   ctx.translate(width / 2, height / 2)
    //   // 绘制表盘
    //   drawClock(ctx, radius)
    //   // 绘制指针
    //   drawHand(ctx, radius)
    //   // 执行绘制
    //   ctx.draw()
    // }

    // function drawClock(ctx, radius) {

    //   // 绘制大圆
    //   ctx.setLineWidth(2)  // 设置线条的粗细，单位px
    //   ctx.beginPath()      // 开始一个新路径
    //   ctx.arc(0, 0, radius, 0, 2 * Math.PI, true)
    //   ctx.stroke()

    //   // 绘制中心圆
    //   ctx.setLineWidth(1)
    //   ctx.beginPath()
    //   ctx.arc(0, 0, 8, 0, 2 * Math.PI, true) // 半径8px
    //   ctx.stroke()

    //   // 绘制大刻度盘
    //   ctx.setLineWidth(5)
    //   for (var i = 0; i < 12; ++i) {
    //     // 以原点为中心顺时针旋转（多次调用旋转的角度会叠加）
    //     ctx.rotate(D30) // 360 / 12 = 30
    //     ctx.beginPath()
    //     ctx.moveTo(radius, 0)
    //     ctx.lineTo(radius - 15, 0) // 大刻度长度15px
    //     ctx.stroke()
    //   }

    //   // 绘制小刻度盘
    //   ctx.setLineWidth(1)
    //   for (var i = 0; i < 60; ++i) {
    //     ctx.rotate(D6) // 360 / 60 = 6
    //     ctx.beginPath()
    //     ctx.moveTo(radius, 0)
    //     ctx.lineTo(radius - 10, 0) // 小刻度盘长度10px
    //     ctx.stroke()
    //   }

    //   // 绘制文本
    //   ctx.setFontSize(20)         // 字号
    //   ctx.textBaseline = 'middle' // 文本上下居中

    //   // 文本距离时钟中心点半径
    //   var r = radius - 30

    //   for (var i = 1; i <= 12; ++i) {
    //     // 利用三角函数计算文本坐标
    //     var x = r * Math.cos(D30 * i - D90)
    //     var y = r * Math.sin(D30 * i - D90)
    //     if (i > 10) { // 调整 11 和 12 的位置
    //       // 在画布上绘制文本 fillText(文本, 左上角x坐标, 左上角y坐标)
    //       ctx.fillText(i, x - 12, y)
    //     } else {
    //       ctx.fillText(i, x - 6, y)
    //     }
    //   }
    // }

    // // 绘制指针
    // function drawHand(ctx, radius) {
    //   var t = new Date()     // 获取当前时间
    //   var h = t.getHours()   // 小时
    //   var m = t.getMinutes() // 分
    //   var s = t.getSeconds() // 秒
    //   h = h > 12 ? h - 12 : h // 将24小时制转化为12小时制
      
    //   // 时间从3点开始，逆时针旋转90度，指向12点
    //   ctx.rotate(-D90)

    //   // 绘制时针
    //   ctx.save() // 记录旋转状态
    //   ctx.rotate(D30 * (h + m / 60 + s / 3600))
    //   ctx.setLineWidth(6)
    //   ctx.beginPath()
    //   ctx.moveTo(-20, 0) // 线条起点（针尾留出20px）
    //   ctx.lineTo(radius / 2.6, 0) // 线条长度
    //   ctx.stroke()
    //   ctx.restore() // 恢复旋转状态，避免旋转叠加

    //   // 绘制分针
    //   ctx.save()
    //   ctx.rotate(D6 * (m + s / 60))
    //   ctx.setLineWidth(4)
    //   ctx.beginPath()
    //   ctx.moveTo(-20, 0)
    //   ctx.lineTo(radius / 1.8, 0)
    //   ctx.stroke()
    //   ctx.restore()

    //   // 绘制秒针
    //   ctx.save()
    //   ctx.rotate(D6 * s)
    //   ctx.setLineWidth(2)
    //   ctx.beginPath()
    //   ctx.moveTo(-20, 0)
    //   ctx.lineTo(radius / 1.6, 0)
    //   ctx.stroke()
    //   ctx.restore()
    // }

    //#endregion 

    //获取画布结点实例并在init函数创建画布上下文
    wx.createSelectorQuery()
    .select("#myCanvas")
    .fields({
      node:true,
      size:true,
    }).exec(this.init.bind(this));

    // //第一步，创建一个绘图上下文
    // const ctx = wx.createCanvasContext('myCanvas');
    // //第二步，使用canvas绘图上下文进行绘图描述
    // ctx.setFillStyle('red');  //设置填充色为红色
    // //画一个矩形
    // ctx.fillRect(10,10,120,120);
    // //第三步，画图
    // ctx.draw();
    //使用canvas新接口进行绘图
    
    //获取画布结点
    // wx.createSelectorQuery()
    // .select("#the-id")
    // .fields({
    //   node:true,
    //   size:true
    // })
    // .exec(this.init.bind(this));
    
  },

  //获取结点实例,创建绘图上下文
  init:function(res){

    //创建上下文
    var canvas = res[0].node;
    var ctx = canvas.getContext('2d');

    // 将角度转换为弧度，方便在后面使用
    // 计算公式： 弧度 = 角度 * Math.PI / 180
    const D6 = 6 * Math.PI / 180;
    const D30 = 30 * Math.PI / 180;
    const D90 = 90 * Math.PI / 180;

    //获取宽度和高度
    var width = this.width;
    var height = this.height;
    canvas.width = width;
    canvas.height = height;

    //计算表盘宽度，留住30px的外边距
    var radius = width/2 - 30;
// 设置坐标轴原点为窗口的中心点
      ctx.translate(width / 2, height / 2)
    //每秒绘制一次
    draw();
    this.timer = setInterval(draw, 1000)//返回定时器的编号，可用于clearInterval来取消它定时

    function draw() {
      
      // 绘制表盘
      drawClock(ctx, radius)
      // 绘制指针
      drawHand(ctx, radius)
    

    }

    function drawClock(ctx, radius) {
      ctx.clearRect(-width/2, -height/2, width, height); //清除所有内容

      // 绘制大圆
      ctx.lineWidth = 2;  // 设置线条的粗细，单位px
      ctx.beginPath()      // 开始一个新路径
      ctx.arc(0, 0, radius, 0, 2 * Math.PI, true)
      ctx.stroke()

      // 绘制中心圆
      ctx.lineWidth =1;
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, 2 * Math.PI, true) // 半径8px
      ctx.stroke()

      // 绘制大刻度盘
      ctx.lineWidth = 5;
      for (var i = 0; i < 12; ++i) {
        // 以原点为中心顺时针旋转（多次调用旋转的角度会叠加）
        ctx.rotate(D30) // 360 / 12 = 30
        ctx.beginPath()
        ctx.moveTo(radius, 0)
        ctx.lineTo(radius - 15, 0) // 大刻度长度15px
        ctx.stroke()
      }

      // 绘制小刻度盘
      ctx.lineWidth = 1;
      for (var i = 0; i < 60; ++i) {
        ctx.rotate(D6) // 360 / 60 = 6
        ctx.beginPath()
        ctx.moveTo(radius, 0)
        ctx.lineTo(radius - 10, 0) // 小刻度盘长度10px
        ctx.stroke()
      }

      // 绘制文本
      ctx.font = '20px';         // 字号
      ctx.textAlign = 'center' // 文本上下居中

      // 文本距离时钟中心点半径
      var r = radius - 30

      for (var i = 1; i <= 12; ++i) {
        // 利用三角函数计算文本坐标
        var x = r * Math.cos(D30 * i - D90)
        var y = r * Math.sin(D30 * i - D90)
        if (i > 10) { // 调整 11 和 12 的位置
          // 在画布上绘制文本 fillText(文本, 左上角x坐标, 左上角y坐标)
          ctx.fillText(i, x - 12, y)
        } else {
          ctx.fillText(i, x - 6, y)
        }
      }
    }

    // 绘制指针
    function drawHand(ctx, radius) {
      var t = new Date()     // 获取当前时间
      var h = t.getHours()   // 小时
      var m = t.getMinutes() // 分
      var s = t.getSeconds() // 秒
      h = h > 12 ? h - 12 : h // 将24小时制转化为12小时制
      
      ctx.save();
      // 时间从3点开始，逆时针旋转90度，指向12点
      ctx.rotate(-D90)

      // 绘制时针
      ctx.save() // 记录旋转状态
      ctx.rotate(D30 * (h + m / 60 + s / 3600))
      ctx.lineWidth = 6;
      ctx.beginPath()
      ctx.moveTo(-20, 0) // 线条起点（针尾留出20px）
      ctx.lineTo(radius / 2.6, 0) // 线条长度
      ctx.stroke()
      ctx.restore() // 恢复旋转状态，避免旋转叠加

      // 绘制分针
      ctx.save()
      ctx.rotate(D6 * (m + s / 60))
      ctx.lineWidth = 4;
      ctx.beginPath()
      ctx.moveTo(-20, 0)
      ctx.lineTo(radius / 1.8, 0)
      ctx.stroke()
      ctx.restore()

      // 绘制秒针
      ctx.save()
      ctx.rotate(D6 * s)
      ctx.lineWidth = 2;
      ctx.beginPath()
      ctx.moveTo(-20, 0)
      ctx.lineTo(radius / 1.6, 0)
      ctx.stroke()
      ctx.restore()

      ctx.restore()
    }

    ////#region
    // //绘制函数
    // function draw(){
    //   //设置坐标轴原点为窗口中心点
    //   ctx.translate(width/2,height/2);
    //   console.log(width/2,height/2);
    //   //绘制表盘
    //   drawClock();
    //   //绘制指针
    //   drawHand();

    //   //执行绘制；
    //   ctx.stroke()

    // }

    // //绘制表盘
    // function drawClock(){
    //   //绘制大圆
    //   //大圆半径为radius，线条粗细为2
    //   ctx.lineWidth = 2;  //设置线条粗细
    //   ctx.beginPath();  //开始新的一条路径
    //   ctx.arc(0,0,radius,0,2*Math.PI,true); //绘制
    //   ctx.stroke();  //画线

    //   //绘制中心园
    //   //中心园半径为8px，线条粗细为1px
    //   ctx.lineWidth = 1;
    //   ctx.beginPath();
    //   ctx.arc(0,0,8,0,2*Math.PI,true);
    //   ctx.stroke();

    //   //绘制大刻度盘，线条粗细为5px
    //   ctx.lineWidth = 5;
    //   for(let i = 0;i<12; i++){
    //     //以原点为中心顺时针旋转（多次调整旋转角度会叠加）
    //     //大刻盘需要描绘十二条线条，每次旋转角度30度
    //     ctx.rotate(D30);
    //     ctx.beginPath();
    //     ctx.moveTo(radius,0);
    //     ctx.lineTo(radius-15,0);
    //     ctx.stroke();
    //   }

    //   //绘制小刻度盘，线条粗细为1px
    //   ctx.lineWidth = 1;
    //   for(let i=0;i<60;i++){
    //     ctx.rotate(D6);
    //     ctx.beginPath();
    //     ctx.moveTo(radius,0);
    //     ctx.lineTo(radius-10,0);
    //     ctx.stroke();
    //   }

    //   //绘制文本
    //   ctx.font = '20px';
    //   ctx.textAlign = 'center';
    //    // 计算文本距离表盘中心点的半径r
    //    var r = radius-30;
    //    for(let i=1;i<=12;i++){
    //      // 利用三角函数计算文本坐标
    //      var x = r * Math.cos(D30*i - D90);
    //      var y = r * Math.sin(D30*i - D90);
    //      if(i>10){  //文本11，12调整位置
    //         // 在画布上绘制文本fillText(文本， 左上角x坐标， 左上角y坐标)
    //         ctx.fillText(i, x - 6, y)
    //      }
    //      else{
    //        ctx.fillText(i,x-4,y);
    //      }
    //    }

    // }

    // //绘制指针
    // function drawHand(){
    //   var t = new Date();   //获取当前时间
    //   var h = t.getHours();  //获取小时
    //   var m = t.getMinutes(); //获取分钟
    //   var s = t.getSeconds(); //获取分钟
    //   h = h>12?h-12:h;  //将24小时制转换成12小时制
      
    //   // 时间从三点开始，逆时针旋转90，指向12点
    //   ctx.rotate(-D90);

    //   //绘制时针
    //   ctx.save();   //记录旋转状态

    //    // 计算时针指向的刻度　 
    //    // 通过 30度 * h 可以计算每个整点的旋转角度　 
    //    // 如果时间不是整点，需要使用h + m / 60 + s / 3600计算准确的偏移度
    //    ctx.rotate(D30*(h+m/60+s/3600));
    //    ctx.lineWidth = 6;
    //    ctx.beginPath();
    //    ctx.moveTo(-20, 0);　　　　// 指针线条的起点（针尾留出20px）
    //    ctx.lineTo(radius / 2.6, 0); // 根据表盘半径计算指针线条的长度
    //    ctx.stroke();
    //    ctx.restore()　　　// 恢复旋转状态，重新指向12点
    //    // 绘制分针
    //    ctx.save();
    //    ctx.rotate(D6*(m + s/3600));
    //    ctx.lineWidth = 4;
    //    ctx.beginPath();
    //    ctx.moveTo(-20,0);
    //    ctx.lineTo(radius/1.8,0);
    //    ctx.stroke();
    //    ctx.restore();// 恢复旋转状态，重新指向12点

    //    //绘制秒针
    //    ctx.save();
    //    ctx.rotate(D6*(s/3600));
    //    ctx.lineWidth = 2;
    //    ctx.beginPath(); 
    //    ctx.moveTo(-20, 0); 
    //    ctx.lineTo(radius / 1.6, 0);　 
    //    ctx.stroke();　 
    //    ctx.restore();

    // }


    //绘制笑脸
    // 设置线条颜色和线宽
    // ctx.strokeStyle="#FF0000";
    // ctx.lineWidth = 2;

    // // 移动画笔坐标位置，绘制外部大圆
    // ctx.moveTo(160, 100);
    // ctx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // // 移动画笔坐标位置，绘制嘴巴线条
    // ctx.moveTo(140, 100);
    // ctx.arc(100, 100, 40, 0, Math.PI,false);
    // // 移动画笔坐标位置，绘制左眼圆圈　 
    // ctx.moveTo(85, 80);　 
    // ctx.arc(80, 80, 5, 0, 2 * Math.PI, true)　 
    // // 移动画笔坐标位置，绘制右眼圆圈　 
    // ctx.moveTo(125, 80);　 
    // ctx.arc(120, 80, 5, 0, 2 * Math.PI, true);　 
    // ctx.stroke();　 

    //绘制线条
    // ctx.strokeStyle="#FF0000";
    // ctx.lineWidth = 5;
    // ctx.moveTo(10,10);
    // ctx.lineTo(100,10);
    // ctx.moveTo(50,50);
    // ctx.lineTo(150,150);

    // ctx.stroke();
    //#endregion
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
    clearInterval(this.timer);
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