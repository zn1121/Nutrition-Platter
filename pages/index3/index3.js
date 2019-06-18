Page({
  data: {
    imgUrls: [
      '../../images/06.jpg',
      '../../images/05.jpg',
      '../../images/04.jpg'

    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1500,
    circular: true
  },
  goself() {
    wx.navigateTo({
      url: '../self/self',
    })
  },
  gorandom() {
    wx.navigateTo({
      url: '../random/random',
    })
  },
  gohelp() {
    wx.navigateTo({
      url: '../help/help',
    })
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  gobaike() {
    wx.navigateTo({
      url: '../baike/baike',
    })
  }
})