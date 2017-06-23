/**
 * Created by bz on 2017/6/23.
 */
/*
 * 16.1Promise对象的
 * */
//创建一个promise实例
// var promise = new Promise(function (reslove,reject) {
// //    some code
//     if(){
//         reslove(value);
//     }else{
//         reject(error);
//     }
// })
//
// promise.than(function () {
//     console.log('调用成功');
// },function(){
//     console.log('调用失败');
// })

//简单应用例子
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');//'done'作为resolve的参数
    })
}

timeout(5000).then((value) => {
    console.log(value);
})

//异步加载图片的例子
var src = 'https:timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498208890776&di=3346afa8ca60f73155b1ee7825199ae8&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fnature009%2Fhigh%2Fnature1457196hahhahahaha.jpg';
let mp = new Promise((resolve,reject)=>{
    let img = new Image();
    img.onload = function () {
        console.log('图片加载完成啦');
        resolve(img)
    };
    img.onerror = function () {
        console.log('图片加载失败');
        resolve('我是参数')
    }
    img.src=src;
})

mp.then(function (arg) {
    console.log('------加载成功后的参数----');
    console.log(arg);
},function (arg) {
    console.log('------失败后的-----');
    console.log(arg);
})

//ajax实例
var getJSON = function(url){
    var promise = new Promise(function (reslove,reject) {
        var client  = new XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });
    
    function handler() {
        if( this.readyState !== 4){
            return
        }
        if(this.status ==200 ){
            reslove(this.response);
        }else{
            reject(new Error(this.statusText));
        }
    }

    return promise
}
// getJSON('../data.json').then(function (data) {
//     console.log('请求成功了');
//     console.log(data);
// },function (data) {
//     console.log('请求失败了');
//     console.log(data);
// })


var p1 = new Promise(function (reslove,reject) {
    setTimeout(() => reject(new Error('fail')),3000);
})

var p2 = new Promise(function (reslove,reject) {
    setTimeout(() => reslove(p1),0);
})

p2.then(result => {
    console.log(result);
})
//     .catch(error  => {
//     console.log(error);
// })