var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
const { use } = require('../app');

let save_userinfo = {};

let phoneReg = /^1[3-9]\d{9}$/;
let usernameReg = /^(\w|[\u4e00-\u9fa5]){4,8}$/;
let passwordReg = /^\w{6,12}$/;
// 登录
router.post('/login', function (req, res) {
  let userinfo = req.body;
console.log(userinfo);
  if (save_userinfo[userinfo.username]) {
    if(save_userinfo[userinfo.username].password === userinfo.password){
      var obj = {
        msg: "登录成功",
        status: 1
      }
      res.send(obj);
    }else{
      var obj = {
        msg: "密码错误",
        status: 0
      }
      res.send(obj);
    }
  } else {
    var obj = {
      msg: "手机号不存在",
      status: 0
    }
    res.send(obj);
  }


});

// 注册
router.post('/register', function (req, res) {
  let userinfo = req.body;
  console.log(userinfo);
  let obj = {};

  if (save_userinfo[userinfo.phone]) {
    obj.msg = '手机号已存在'
    obj.code = 0;
  } else if (!phoneReg.test(userinfo.phone)) {
    obj.msg = '手机号不正确';
    obj.code = 0;
  } else if (userinfo.code.toLowerCase() != 'r2b7') {
    obj.msg = '验证码错误';
    obj.code = 0;
  } else if (!usernameReg.test(userinfo.username)) {
    obj.msg = '用户名格式错误';
    obj.code = 0;
  } else if (!passwordReg.test(userinfo.password)) {
    obj.msg = '密码格式错误';
    obj.code = 0;
  } else {
    save_userinfo[userinfo.phone] = userinfo;
    obj = { msg: '注册成功', code: 1 };

  }
  console.log('0.0.0.0', save_userinfo);
  return res.send(obj);


});

module.exports = router;
