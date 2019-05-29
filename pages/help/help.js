// pages/help/help.js
Page({
  data: {
    showModal: false,
    food: [],
    textareaVal: "",
    random1:"",
    random2:""
  },
  toShowModal(e) {
    var that = this;
    this.data.random1 = Math.floor(Math.random() * 239);//荤菜
    this.data.random2 = Math.floor(Math.random() * 88);//素菜
    wx.navigateTo({
      url: '../help_index/help_index?id1=' + this.data.random1 + "&id2=" + this.data.random2,
    })
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