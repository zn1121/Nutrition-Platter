// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1:["荷包蛋","豆角炒肉","小鸡炖蘑菇","蒸熊掌","回锅肉","拔丝鸡蛋","四喜丸子","酸辣粉"],
    showModal: false,
    food: [],
    textareaVal:'',
  },
  toShowModal(e) {
    var that = this;
    this.data.arr2 = this.data.textareaVal.split("、");
    this.setData({
      showModal: true
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name:this.data.textareaVal,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food: res.data });
      }
    })
    console.log("这是传回来的数据", that.data.food);
    console.log("index:",that.data.index)
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  textarea:function(e){
    this.setData({
      textareaVal: e.detail.value
    })
  },
  go:function(e){
    console.log(e);
    console.log("这是用户选择的菜品名称：",this.data.food[parseInt(e.currentTarget.dataset.index)].name)
    wx.navigateTo({
      url: "../help_index/help_index?food_name=" + this.data.food[parseInt(e.currentTarget.dataset.index)].name + "&food_name1=" + this.data.textareaVal 
    })
  }
})