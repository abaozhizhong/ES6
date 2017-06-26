/**
 * Created by bz on 2017/6/26.
 */
/*
 *  16.5 Promise.all()
 * */
function retrunPromis(ms) {
    return new Promise(function (reslove, rejected) {
        setTimeout(function () {
            reslove('成功啦~')
        }, ms)
    })
}

var p1 = retrunPromis(2000);
var p2 = retrunPromis(5000);
Promise.all([p1, p2]).then(function (data) { //当p1 p2状态变成resloved的时候才会执行  all(args).then()
    console.log(data);
})

function retrunPromise(ms) {
    return new Promise(function (reslove, rejected) {
        setTimeout(function () {
            rejected('失败咯~')
        }, ms)
    })
}
var p3 = retrunPromise(10);
var p4 = retrunPromise(5000);
Promise.all([p3, p4]).then(function (data) {//只要p3 p4其中一个执行rejected 就会报错
    console.log(data);
},function (data) {
    console.log(data);
})
//     .catch(function (data) {
//     console.log(data);
// })