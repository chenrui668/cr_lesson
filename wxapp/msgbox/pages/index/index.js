Page({
  onLoad: function() {
    this.popup = this.selectComponent('#popup');
    // this.test = this.selectComponent('#')
  },
  showPopup: function() {
    // 弹窗
    this.popup.showPopup();
  },
  _error() {
    this.popup.hidePopup();
  },
  _success() {
    this.popup.hidePopup();
  },
  change: function(e) {
    // console.log('catch');
    var mComponent = this.selectComponent('#mComponent');
    mComponent.setText('外部调用了');
  },
  onTextChange() {
    wx.showToast({
      title: '捕抓事件'
    })
  }
})
