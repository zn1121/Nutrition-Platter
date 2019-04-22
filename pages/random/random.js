// pages/random/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    food:[],
    suiji:1
  },
  toShowModal(e) {
    var that = this;
    var random = Math.floor(Math.random() * 4);
    this.setData({
      showModal: true
    });
    wx.request({
      url: 'https://zn1121.com/suijipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data:{
        id:random
      },
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        that.setData({food:res.data});
      }
    })
    that.setData({
      suiji:random
    })
    console.log("random",random);
    console.log("随机数",that.data.suiji);
    console.log("sjp_ramdom",that.data.sjp_random)
    console.log("food",that.data.food);
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  },
  onLoad:function(){
    var that = this;
  },
  
})