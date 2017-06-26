/**
 * Created by zqf on 2017/6/25.
 */
/*
* 16.3 Promise 的then
* */
var p1 = new Promise(function (resloved,rejected) {
    setTimeout(function () {
        resloved('args')
    })
})

p1.then(function (data) {
    return data  //这里return 出去的是给下一个的then 的参数0
}).then(function (data2) {
    console.log("我是来自data:",data2);
}) 