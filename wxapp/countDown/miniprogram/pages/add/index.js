// miniprogram/pages/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    num: 0,
    height: 0,
    width: 0,
    showTitle: false  
  },
  onLoad: function () {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
  },
  back () {
    wx.navigateBack();
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
      num: e.detail.value.length
    })
  },
  chooseTitle () {
    this.setData({
      showTitle: true
    })
  },
  hideTitle () {
    this.setData({
      showTitle: false
    })
  }
})