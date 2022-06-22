// app.js
App({
  onLaunch() {
    this.checkLogin(res=>{
      console.log("is_login:"+res.is_login);
      if(!res.is_login){
        this.login();
      }
    })
  },
  // 登录
  login:function(){
    wx.login({
      timeout: 60000,
      success:res=>{
        console.log("code:"+ res.code);
        wx.request({
          url: 'http://127.0.0.1:3000/login',
          method:'POST',
          data:{code:res.code},
          success:res=>{
            console.log('token'+res.data.token);
            //将token保存为公共数据（便于多页面中访问）
            this.globalData.token = res.data.token;
            //将token保存在缓存中，便于小程序下次登录无须重新获取token
            wx.setStorage({key:'token',data:res.data.token});
          }
        })
      },
      fail:err=>{
        console.log("失败");
        console.log(err);
      }
    })
  },

  //检查登录
  checkLogin:function(callback){
    var token = this.globalData.token;
    if(!token){
      // 从数据缓存中获取token　 
      token = wx.getStorageSync('token')
      if(token){  
        this.globalData.token = token;
      }
      else{  //缓存中也没有则重新从服务器获取
        callback({ is_login: false })
        return ;
      }
    }
    wx.request({
      url: 'http://127.0.0.1:3000/checklogin',
      data:{token:this.globalData.token},
      success:res=>{
        console.log(res.data);
        callback({is_login:res.data.is_login});
      },
      fail:err=>{
        console.log("失败")
      }
    })
  },

  globalData: {
    userInfo: null,
    token:null
  }
})
