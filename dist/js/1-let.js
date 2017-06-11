'use strict';

/**
 * Created by huangjian on 2017/6/2.
 */
{
    var a = 10;
    var b = 10;
}
// console.log(a);
console.log(b);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('------------' + i);
var c = [];

var _loop = function _loop(j) {
    c[j] = function () {
        //在作用域内j 就是原来的j
        console.log(j);
    };
};

for (var j = 0; j < 10; j++) {
    _loop(j);
}
c[8]();

//暂时性死区
var temp = 'temp';
var myfun = function myfun() {
    var temp = 'wei';console.log(temp);
};
myfun();

//调用作用域块内的函数
var d = void 0;
{
    var mymessage = "在作用域内的东西";
    d = function d() {
        return mymessage;
    };
}
console.log(d());
//# sourceMappingURL=1-let.js.map