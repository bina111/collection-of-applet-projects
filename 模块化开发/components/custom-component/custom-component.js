// components/custom-component/custom-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[1,2,3,4,5]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addItem:function(){
      var list = this.data.list;
      list.push(list.length+1);
      this.setData({
        list:list
      });
    },
    delItem:function(){
      var list = this.data.list;
      if(list.length>0){
        list.pop();

      }
      this.setData({
        list:list
      });
    }
  }
})
