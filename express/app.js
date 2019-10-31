var express = require('express')
var app = express();
app.set('view engine', 'ejs');
app.listen(3000); //悄无声息的3000链接。
console.log("http://localhost:3000")
app.use('/static', express.static('public')) //静态文件引入
//跨域问题
const cors = require('cors');
app.use(cors({
	origin: ['http://localhost:8080'],
	methods: ['GET', 'POST'],
}));
//数据库（db.js用来放数据库的链接）
const db = require('./db');

// function getByConditions() {
// 	// var whereStr = {"username": "陈二狗1"};
// 	// var opt = {"username": 1, "_id": 0};
// 
// 	// User.find(whereStr, opt, function (err, docs) {
// 	// 查询年龄大于等20而且小于等于50岁
// 	db.find(function(err, docs) {
// 		if (err) {
// 			console.log("Error: " + err);
// 		} else {
// 			console.log("docs: " + docs);
// 			res.send({docs});
// 		}
// 	})
// }
// getByConditions()
app.post('/product', function(req, res, next) {
	db.find({}, function(err, users) {
		if (err) {
			res.send({
				message: 'error'
			});
			return;
		}
		res.send({
			message: 'success',
			data: users
		});
	});
	// 这数据是自己打的，我们来试试在数据库获取试试，
	// 	var data = {
	// 		code: 0,
	// 		data: {
	// 			name: 'aaa',
	// 			pwd: '123'
	// 		},
	// 		isSuccess: true,
	// 		msg: "请求成功"
	// 	}
	// 
	// res.json(data);
});






//app.use(express.static('public'))//静态文件引入
