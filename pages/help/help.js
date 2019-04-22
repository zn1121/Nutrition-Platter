// pages/help/help.js
Page({
  data: {
    showModal: false,
    food: [],
    food_name:"",
    searchValue:""

  },
  toShowModal(e) {
    var that = this;
    this.setData({
      showModal: true
    });
    wx.request({
      url: 'https://zn1121.com/suijipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        name: that.food_name
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ food: res.data });
      }
    })
    console.log("food", that.data.food);
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  // eatFood:function(e){
  //   this.setData({
  //     food_name: e.detail.value
  //   })
  //   console.log("food_name",this.food_name)
  // },
  
})