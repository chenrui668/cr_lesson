// miniprogram/pages/index/index.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: []
  },
  countDay (targetDate) {
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
    var currentDate = year + seperator1 + month + seperator1 + strDate;
    var allDay = parseInt((Date.parse(targetDate) - Date.parse(currentDate)) / (24 * 60 * 60 * 1000));
    return allDay;
  },
  addDay (record) {
    for(let i = 0; i < record.length; i ++) {
      record[i].remindDay = this.countDay(record[i].targetDate);
      if(record[i].remindDay >= 0) {
        record[i].isFuture = true;
      } else {
        record[i].isFuture = false;
        record[i].remindDay = -record[i].remindDay;
      }
    }
    this.setData({
      record: record
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    db.collection('record').get({
      success: (res) => {
        let recordData = res.data;
        this.addDay(recordData);
        wx.hideLoading()
      }
    })
  },
  toAdd () {
    wx.navigateTo({
      url: '../add/index'
    })
  },
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      //wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },
  delete (event) {
    const that = this;
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          const id = event.currentTarget.dataset.id;
          db.collection('record').doc(id).remove({
            success() {
              wx.showLoading({
                title: '加载中',
              })
            }
          });
          db.collection('record').get({
            success: (res) => {
              let recordData = res.data;
              that.addDay(recordData);
              wx.hideLoading()
            }
          })
          console.log('删除成功');
        }
      }
    })
  }
})