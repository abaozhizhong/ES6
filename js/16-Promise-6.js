/**
 * Created by bz on 2017/6/26.
 */
/*
* 16.6 Promise.race()
* */
//参数跟all一样 但是规则不一样
function retrunPromise(ms) {
    return new Promise(function (reslove, rejected) {
        setTimeout(function () {
            reslove('hahha成功咯~')
        }, ms)
    })
}

var p1 = retrunPromise(1000);
var p2 = retrunPromise(7000);
Promise.race([p1,p2]).then(function (data) { //只要p1 或者 p2其中一个状态变成resloved的话就会有执行then
    console.log('--------');
    console.log(data);
});

var p  = Promise.race([setTimeout(function () {
    console.log('我什么也不知道');
},60000),p2]);

p.then(function () {
    
}).catch(function (data) {
    console.log(data);
})