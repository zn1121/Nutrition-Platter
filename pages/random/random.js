// pages/random/random.js
Page({

  /**
   * 页面的初始数据t
   */
  data: {
    showModal: false,
    food:[],
    suiji:1
  },
  toShowModal(e) {
    var that = this;
    var random = Math.floor(Math.random() * 327);
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
        that.setData({food:res.data});
        console.log(res.data)
      }
    })
    that.setData({
      suiji:random
    })
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