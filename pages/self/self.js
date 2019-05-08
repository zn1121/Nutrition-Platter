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
        food_name: this.data.textareaVal,
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          food: res.data
        });
        console.log(that.data.food);
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
        console.log("图片", that.data.food);
      }
    })


  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  textarea: function(e) {
    this.setData({
      textareaVal: e.detail.value
    })
  },
  go: function(e) {
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.food[parseInt(e.currentTarget.dataset.index)].name + "&food_name1=" + this.data.textareaVal
    })
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'https://zn1121.com/zizhupin_tuijian',
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
          arr1: res.data
        });
      }
    })
  }
})