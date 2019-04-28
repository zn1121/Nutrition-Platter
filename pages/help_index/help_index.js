Page({
  data: {
    food_id1: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food_id2: "",//上一页传来的食物的名字，自主拼用户输入的菜名
    food1: [],
    food2: []
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_id1: options.id1,
      food_id2: options.id2
    })

    wx.request({//请求荤菜
      url: 'https://zn1121.com/help_hcid',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_hcid: this.data.food_id1,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
      }
    })
    wx.request({//请求素菜
      url: 'https://zn1121.com/help_scid',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_scid: this.data.food_id2
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food2: res.data });
      }
    })
  },
  
})