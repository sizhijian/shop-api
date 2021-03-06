var express = require('express'),
    router = express.Router(),
    usersSchema = require('../models/users'),
    mongoose = require('mongoose'),
    dbUrl = require('../config/db.conf');

mongoose.connect(dbUrl.url, {useMongoClient:true});

var User = mongoose.model('users',usersSchema);//将模式编译到模型中model('集合名称',...)会变成全小写

router.options('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.end();
});

/* POST users listing. */
router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    var returnInfo = {
	    state: null,
	    info:""
    };
    console.log(req.body);

    User.create([{
        username: req.body.username,
        password: req.body.password,
        nickname: req.body.nickname
    }],function (error) {
        if(error) {
	        console.log(error);
	        returnInfo.state = 0;
	        returnInfo.info = "注册失败";
	        res.send(returnInfo);
	        return;
        }
	    returnInfo.state = 1;
	    returnInfo.info = "注册成功";
	    res.send(returnInfo);
    });
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Headers", "Content-Type");
    // res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

});

module.exports = router;
