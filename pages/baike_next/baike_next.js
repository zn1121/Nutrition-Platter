Page({
  data: {
    arr_length: "",
    arr_random: "",
    food_search: "",
    arr_search: [],
  },
  onLoad: function(options) {
    var that = this;
    this.setData({
      food_search: options.food_search,
    })

    wx.request({
      url: 'https://zn1121.com/wiki_baike',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_search: this.data.food_search
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          arr_length: res.data.length,
          arr_random: Math.floor(Math.random() * res.data.length),
        });
        that.setData({
          arr_search: Array(res.data[that.data.arr_random])
        });
      }
    })

  },





})