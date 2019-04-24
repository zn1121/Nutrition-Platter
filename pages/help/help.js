// pages/help/help.js
Page({
  data: {
    showModal: false,
    food: [],
    textareaVal: "",
    
  },
  toShowModal(e) {
    var that = this;
    this.setData({
      showModal: true
    });
    wx.request({
      url: 'https://zn1121.com/bangnipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: this.data.textareaVal
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ food: res.data });
      }
    })
    console.log("food", this.data.textareaVal);
    console.log("id=", this.data.foodId)
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  textarea: function (e) {
    this.setData({
      textareaVal: e.detail.value
    })
  },
})