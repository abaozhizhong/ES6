/**
 * Created by bz on 2017/6/26.
 */
/*
*16.4 promise.prototype.catch()
* */

var p1 = new Promise(function () {
    throw new Error('我是个错误哈哈哈') //出错时，状态自动转换成rejected
})
p1.catch(function (data) {  //等同then(null,function(){}); 等同下面代码
    console.log('我是错误的数据',data);
})


// p1.then(function () {
// //    成功是的代码
// },function (data) {
//     console.log('我出错啦');
//     console.log('我是抛处理的错误啦',data);
// })

//catch能够捕获传递过来的错误
p1.then(function () {
    
}).then(function () {
    
}).then(function () {

}).catch(function (data) {
    console.log(data);
})

var returnPromise = function () {
    return new Promise(function (data) {
        throw  new Error('我是个错误希望被捕获,hahhahah');
    })
}

returnPromise().then(function (data) {  //没有写catch就没有捕获到错误
    console.log('成功了哟',data);
}).catch(function (data) {
    console.log(data);
    return '我错了还不行麽'
}).then(function (data) { //catch返回的还是一个Promise对象  //如果没有错误会继续执行then
    console.log('----camry on---');
    console.log(data);
})



