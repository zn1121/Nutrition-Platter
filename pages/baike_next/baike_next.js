// pages/baike_next/baike_next.js
Page({
  data: {
    arr_length: "",//数组返回长度
    arr_random:"",//出随机数
    food_search:"",
    arr_search:[],//返回数组
    arr_search_show:""//赋值一个渲染前端的对象
  },
  onLoad:function(options){
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
      success: function (res) {
        that.setData({ 
            arr_search: res.data,
            arr_length:res.data.length,
            arr_random: Math.floor(Math.random() * res.data.length - 1),
            
          });
        that.setData({
          arr_search_show: res.data[that.data.arr_random]
        })
        console.log("random",that.data.arr_random)
        console.log("resdata", res.data[that.data.arr_random])
        console.log("random_cai", that.data.arr_search_show)
        console.log(res.data);
      }
    })
    
  },
  




})