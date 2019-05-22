// miniprogram/pages/add/index.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    num: 0,
    height: 0,
    width: 0,
    showTitle: false,
    type: []
  },
  onLoad: function () {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
    db.collection('type').get({
      success: (res) => {
        this.setData({
          type: res.data
        })
      }
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