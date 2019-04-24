Page({
  data: {
    food_name: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food_name1: "",//上一页传来的食物的名字，自主拼用户输入的菜名
    food1:[],
    food2:[]
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_name: options.food_name,
      food_name1: options.food_name1
    })
    wx.request({//请求第一个菜
      url: 'https://zn1121.com/zizhupin_index',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name:this.data.food_name,
        //food_name1:this.data.food_name1
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
      }
    })
    wx.request({//请求第二个菜
      url: 'https://zn1121.com/zizhupin_index',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        //food_name: this.data.food_name,
        food_name:this.data.food_name1
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food2: res.data });
      }
    })
    console.log("这是第一个菜的数组",this.data.food1);
    console.log("这是第二个菜的数组", this.data.food2);
  },
})