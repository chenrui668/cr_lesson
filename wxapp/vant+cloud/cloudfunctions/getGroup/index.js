// 云函数入口文件
const cloud = require('wx-server-sdk');
const env = 'chenrui-data-o5asl';

cloud.init()
// 获取服务器的句柄
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('group').get();
}