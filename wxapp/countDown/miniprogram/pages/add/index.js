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
    focus: false,
    type: [],
    typeUrl: '../../images/type-2.png',
    date: ''
  },
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  onLoad: function () {
    let nowDate = this.getNowFormatDate();
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth,
      date: nowDate
    })
    db.collection('type').get({
      success: (res) => {
        this.setData({
          type: res.data
        })
      }
    })
  },
  input () {
    this.setData({
      focus: true
    })
  },
  back () {
    wx.navigateBack();
  },
  bindDateChange (e) {
    this.setData({
      date: e.detail.value
    })
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
  },
  changeTitle(event) {
    const url = event.currentTarget.dataset.url;
    this.setData({
      typeUrl: url,
      showTitle: false
    })
  },
  save() {
    db.collection('record').add({
      data: {
        type: this.data.typeUrl,
        title: this.data.inputValue,
        targetDate: this.data.date,
        remindDay: 0,
        isFuture: true
      },
      success() {
        wx.showToast({
          title: '添加成功',   
          icon: 'success', 
          duration: 1000   
        });
        setTimeout( () => {
          wx.navigateTo({
            url: '../index/index'
          })
        }, 1000)
      }
    })
  }
})