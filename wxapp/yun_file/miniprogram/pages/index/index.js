const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  data: {
    userList: []
  },
  getUserInfo: function(result) {
    console.log(result);
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        // 云数据库中， 传一个json 代表一条记录，
        // 数量
        // 不是结果 是符合条件的数量
        userInfo.where({
          _openid: res.result.openId
        }).count().then(res => {
          if (res.total == 0) {
            userInfo.add({
            data: result.detail.userInfo
            })
            .then(res => {
              console.log(res);
            })
          }else {
            // console.log('加过了');
            wx.navigateTo({
              url: '/pages/add/add'
              
            })
          }
        })
      }
    })
  },
  onLoad: function(options) {
    userInfo.get().then(res => {
      this.setData({
        userList: res.data
      })
    })
  }
})