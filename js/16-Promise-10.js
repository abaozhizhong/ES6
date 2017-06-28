/**
 * Created by bz on 2017/6/26.
 */
/*
 * 16.10 应用
 * */
// 加载图片
var globalImg = {};
var p1 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498469656592&di=c90660f557f9337ef25e56d996532bc5&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fnature009%2Fhigh%2Fnature1457196.jpg'

function loadImage(path) {
    let pObj = new Promise(function (resloved, rejected) {
        let  img = new Image();
        img.onload = function () {
            resloved(img);
        }
        img.onerror = function () {
            rejected('出错了')
        }
        img.src = path;
        globalImg = img;
    });
    return pObj;
}

let img1 = loadImage(p1);
let body = document.querySelector('body');
console.log(img1);
img1.then(function (img) {
    console.log(img);
    // body.appendChild(img);
});
