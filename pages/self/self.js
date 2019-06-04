// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1: [],
    showModal: false,
    food: [],
    foodurl: [],
    textareaVal: '',
  },
  toShowModal(e) { //根据用户输入的菜品展示模态窗口
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
        food_name: this.data.textareaVal,
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: this.data.textareaVal,

      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  hideModal() { //隐藏模态窗口
    this.setData({
      showModal: false
    });
  },
  textarea: function(e) { //获取用户输入的值
    this.setData({
      textareaVal: e.detail.value
    })
  },
  go: function(e) { //模态窗口跳转二级页面
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.food[parseInt(e.currentTarget.dataset.index)].name + "&food_name1=" + this.data.textareaVal
    })
  },
  onLoad: function() { //自主拼为你推荐获取数据
    var that = this;
    wx.request({
      url: 'https://zn1121.com/zizhupin_tuijian',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function(res) {

        that.setData({
          arr1: res.data
        });
      }
    })
  },
  showModal0() { //第一道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[0].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[0].name,
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[0].name,

      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal1() { //第二道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[1].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[1].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[1].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal2() { //第三道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[2].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[2].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[2].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal3() { //第四道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[3].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[3].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[3].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal4() { //第五道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[4].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[4].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[4].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal5() { //第六道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[5].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[5].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[5].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  },
  showModal6() { //第七道菜点击出模态窗口
    var that = this;
    this.setData({
      showModal: true,
      textareaVal: that.data.arr1[6].name
    });
    wx.request({
      url: 'https://zn1121.com/zizhupin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[6].name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          food: res.data
        });
      }
    })
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: that.data.arr1[6].name,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          foodurl: res.data
        });
      }
    })
  }
})