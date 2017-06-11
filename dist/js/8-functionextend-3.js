"use strict";

var _console, _console3;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by huangjian on 2017/6/5.
 */
/*
*
* 8.3 扩展运算符  ... rest 的逆运算
* */
(_console = console).log.apply(_console, [1].concat([2, 3, 4], [5]));
console.log([].concat(_toConsumableArray(document.querySelectorAll('li')))); //nodelist   转为 array 类型

//函数调用？？？
function mypush(x) {
    var _console2;

    //rest 将参数集中成一个数组
    var z = [];

    for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        y[_key - 1] = arguments[_key];
    }

    (_console2 = console).log.apply(_console2, y); //扩展运算符号 将参数序列变成一个一个数
    z.push.apply(z, y);
    return z;
}
console.log(mypush(23, [6, 7, 8, 9]));

//替代数组的apply方法
//直接序列化参数
var myfun = function myfun(x, y, z) {
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
};
myfun.apply(undefined, ['c', 'n', 'm']);

//求最大值
console.log(Math);
var max = Math.max;

console.log(
//求最大值 直接解参数
max.apply(undefined, [100, 200, 300]));

//堆数组
var arr = [1, 2, 4];
(_console3 = console).log.apply(_console3, arr);
arr.push(1, 2, 3); //原来可以这样。。。。
arr.push.apply(arr, arr);

/*
*
*扩展运算符的应用
* */
//数组合并新写法
//es5 arr1.concat(arr2,arr3)
var arr1 = [];
var arr2 = ['a', "b", 'c', 'd', 'e'];
var arr3 = ['-', '-', '-'];
var arr4 = [].concat(arr2, arr3);
console.log(arr4);

//与解构赋值结合
var first = '第一',
    rest = ['1', '23', '其他'];

console.log(first);
console.log(rest);

//函数返回值的问题

//转化类似数组的对象
var nodelist = document.querySelectorAll('li'); // 其实Array.form() 也是可以的 方式nodelist 对象都可以这样转
var arraylist = [].concat(_toConsumableArray(nodelist));
console.log(arraylist);
//# sourceMappingURL=8-functionextend-3.js.map