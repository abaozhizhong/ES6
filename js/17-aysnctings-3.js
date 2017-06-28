/**
 * Created by bz on 2017/6/28.
 */
/*
 * 17.3 理解thunk函数
 * */
//
var thunkity = require('./../node_modules/thunkify');
var fs = require('fs');//为啥这样也可以呢
var readFile = thunkity(fs.readFile);

//不用thunkity读取文件
// fs.readFile('./1-let.js', {encoding: 'utf-8', flag: 'r'}, function (err, data) { 这里读写正常啊。。。。
//     console.log(data);
// })

//使用thunk函数读取文件  单一参数？
// var temp =  readFile('./1-let.js');
// temp(function (err,str) {
//     console.log(str.toString());
// })

function *gen() {
    let a1 = yield 1;
    console.log('a1', a1);
    let a2 = yield 2;
    console.log('a2', a2);
}

var gen1 = function *() {
    var r1 = yield readFile('/text.txt');
    console.log(r1);
    var r2 = yield readFile('./../text.txt');
    console.log(r2);
}

// var rg1 = gen1();
// var rg2 = rg1.next();
// //手动执行  thunk函数
// rg2.value(function (err, data) {
//     if(err) throw  err;
//     console.log(data.toString());
//     var rg3 = rg1.next('这里给力值就不会logUndefind');
//     rg3.value(function (err,data) {
//         if(err) throw  err;
//         console.log(data.toString());
//         rg1.next('最后执行了哟没有return')
//     })
// })

//thunk函数的自动流程管理
function run(g) {
    var gen  = g();
    function next(err,data) {
        if(data){console.log(data.toString());}
        var r = gen.next();
        if(r.done)return;
        r.value(next);
    }
    next();
}
run(gen1);