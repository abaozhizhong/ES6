/**
 * Created by bz on 2017/6/28.
 */
/*
* 17.5 aysnc 函数
* */
var fs = require('fs');

var readFile = function (filename,data) {
    return new Promise(function (resloved,rejected) {
        fs.readFile(filename,function (err,data) {
            if(err) rejected(err);
            resloved(data);
        })
    })
}

//语法 async 写在 function前   yield 改成 await
var asReadFile = async function () {
    var f1 = await readFile('/text.txt');
    var f2 = await readFile('./../text.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}
asReadFile();

//async的用法  感觉promise+await 不错不错  就是不会配环境比较麻烦 先用着这个咯 https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=react%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&experimental=false&loose=false&spec=false&code_lz=GYVwdgxgLglg9mABAWwJ62QUziKAKASkQG8BYAKESsQBtMpE4AjAK0QF5ExMB3RABQBOcZDADOmPKEiwEiPIMxiacAG6YAJkTKVqenjDAa4PAHQSoAFRhYc-adHhJCJCnvfVFytZrwByY24_AgBuNw93CAQxODpTFQBzf0BlI0AHZUAcOUB_SOCw3Q8AXwAaACYABnKCcKp8yrzERSgQQSRmFgp8igoAQzFUSEQHWSRpAEYXHT0uni6YBjQMbFxCXL0osBi4xP95m0WGcQAPI6PEQMwc9s7yUeWgA&playground=true
// 例子1 使用async await 编写延时打印
function mytimeout() {
    let obj = new Promise(function (resloved) {
        setTimeout(function () {
            resloved('done');
            console.log('打印东西');
        },2000)
    })
    return obj
}

async function fun1() {
    await mytimeout();
    console.log('mytimeout is done');
}

fun1();



