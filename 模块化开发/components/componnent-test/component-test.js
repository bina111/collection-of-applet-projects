// components/componnent-test/component-test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testContent:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hello:'欢迎'
  },

  /**
   * 组件的方法列表
   */

   lifetimes:{
    ready(){
      this.data.testContent.push(14);
      console.log(this.data.testContent)
    }
   },

  methods: {
    onTap:function(){
      console.log(this.data.value);
    }
  }
})
