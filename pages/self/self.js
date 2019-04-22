// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1:["荷包蛋","豆角炒肉","小鸡炖蘑菇","蒸熊掌","回锅肉","拔丝鸡蛋","四喜丸子","酸辣粉"],
    // arr2:["小葱拌豆腐","口水鸡"],
    arr2: [],
    showModal: false,
    food: [],
    textareaVal:''
  },
  toShowModal(e) {
    var that = this;
    this.data.arr2 = this.data.textareaVal.split("、");
    this.setData({
      showModal: true
    });
    console.log(this.data.textareaVal)
    console.log(this.data.arr2)
    wx.request({
      url: 'https://zn1121.com/suijipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food:this.data.arr2
      },
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        that.setData({ food: res.data });
      }
    })
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
  }
})