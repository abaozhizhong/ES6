/**
 * Created by bz on 2017/6/28.
 */
/*
*
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

