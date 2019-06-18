Page({
  data: {
    food_caixi: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food_taste: "",//上一页传来的食物的名字，自主拼用户输入的菜名
    food1: [],
    food2: []
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_caixi: options.radio_caixi,
      food_taste: options.radio_taste
    })
    wx.request({
      url: 'https://zn1121.com/help_hc',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_hc_taste: this.data.food_taste,
        food_hc_caixi:this.data.food_caixi
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
        console.log(res.data)
        if(res.data[0] == null){
          wx.showModal({
            title: '提示',
            content: '对不起，我们正在更新数据库，敬请期待！',
            success: function (res) {
              if (res.confirm) {
              } else if (res.cancel) {
              }
            }
          })  
        }
      }, 
    })
    wx.request({
      url: 'https://zn1121.com/help_sc',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_sc_taste: this.data.food_taste,
        food_sc_caixi: this.data.food_caixi
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food2: res.data });
        if (that.data.food1[0] != null) {
          if(res.data[0] == null){
            wx.showModal({
              title: '提示',
              content: '对不起，我们正在更新数据库，敬请期待！',
              success: function (res) {
                if (res.confirm) {
                } 
              }
            })
          }
        }
      }
    })
    
  },
  
})