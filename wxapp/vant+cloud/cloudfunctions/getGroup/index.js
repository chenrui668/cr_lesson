// 云函数入口文件
const cloud = require('wx-server-sdk');
const env = 'chenrui-data-o5asl';

cloud.init()
// 获取服务器的句柄
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXcontext().OPENID;
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get();
  let retrunResult = [];
  for (let item of groupList.data) {
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      delete: false
    }).get();
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get();
      oneGroup.data[0].createBy = userInfo.data[0];
      oneGroup.data[0].relateUserGroupId = item._id;
      retrunResult.push(oneGroup.data[0]);
    }
    return retrunResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)
  } 
}