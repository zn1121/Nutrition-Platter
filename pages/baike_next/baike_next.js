// pages/baike_next/baike_next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Obj: {
    //   caiming: '麻婆豆腐',
    //   guishudi: '四川',
    //   caixi: '川菜',
    //   tip: '生津止渴，健脾，有利健身防病',
    //   culture:
    //     '麻婆豆腐，四川省传统名菜之一，属于川菜。麻婆豆腐始创于清朝同治元年（1862年），在成都万福桥边，有一家原名“陈兴盛饭铺”的店面。店主陈春富（陈森富）早殁，小饭店便由老板娘经营，女老板面上微麻，人称"陈麻婆"。当年的万福桥是一道横跨府河，常有苦力之人在此歇脚、打尖。光顾饭铺的主要是挑油的脚夫。陈氏对烹制豆腐有一套独特的烹饪技巧，烹制出的豆腐色香味俱全，不同凡响，深得人们喜爱，她创制的烧豆腐，则被称为“陈麻婆豆腐”，其饮食小店后来也以“陈麻婆豆腐店”为名。《锦城竹枝词》、《芙蓉话旧录》等书对陈麻婆创制麻婆豆腐的历史均有记述。《锦城竹枝词》云：“麻婆陈氏尚传名，豆腐烘来味最精，万福桥边帘影动，合沽春酒醉先生”。《成都通览》记载陈麻婆豆腐在清朝末年便被例为成都著名食品。'
    // },
    food_search:"",
    arr_search:[]
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
        that.setData({ arr_search: res.data });
        console.log(res.data);
      }
    })
  },
  
})