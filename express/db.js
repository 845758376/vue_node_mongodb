// 定义一个user的Schema，命名为user.js
// 修改上面db.js 新增最后一行，导出mongoose对象
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/fullweb';
// mongodb://yijiebuyi:yijiebuyi@127.0.0.1:27017/admin", {auto_reconnect: true}, done);
// 连接
mongoose.connect(DB_URL, {
  useNewUrlParser: true
});
// 连接成功
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DB_URL);
})
// 连接异常
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error ' + err);
})
// 连接断开
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected ');
})

/**
 * 用户信息
 */
// 定义数据库表存储结构
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String }, // 用户名
  password: { type: String }, // 用户密码
  age: { type: String }, // 用户年龄
  lastLoinDate: { type: Date } // 最近登录一次时间
})
// 生成Model
module.exports = mongoose.model('User', UserSchema);