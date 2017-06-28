/**
 * Created by bz on 2017/6/28.
 */
/*
 *  17.4 co模块
 * */
var thunckity = require('thunkify');
var fs = require('fs');
var co = require('co');
var readfile = thunckity(fs.readFile);

function *gen() {
    var y1 = yield readfile('/text.txt');
    var y2 = yield readfile('./../text.txt');
    console.log(y1);
    console.log(y1.toString());
    console.log(y2.toString());
}

var g = gen();
co(gen).then(function () { //直接执行这个thunk函数 不用写流程管理函数 。。。。屌屌屌
    console.log('函数执行完毕');
});

