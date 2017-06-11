"use strict";

/**
 * Created by huangjian on 2017/5/31.
 */
//箭头函数
var objo = { name: "abaozhi", age: 23 };
var a = function a(b) {
    return b;
};
var b = function b(c, d) {
    return c + d;
};
console.log(b(10, 20));
b(10, 20);

var c = function c() {
    return { x: 10, y: 20 };
};
console.log(c());

var d = function d(objo) {
    return objo.name + ":" + objo.age;
};
console.log(d(objo));

//e 函数名  a 输入参数  {这里面是函数内容}
var e = function e(a) {
    console.log('------------');
    if (a == 'a') {
        console.log(a);
    } else if (a == 'b') {
        console.log('b');
    }
    return 'done';
};
console.log(e('b'));

var f = function f() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return { v1: 20 + a, v2: 30 };
};
console.log(f(20));

// var g = (a,b) => { return [a,b,20] }
var g = function g(a, b) {
    return [a, b];
}; //这样写更简单
console.log('-----返回数组-----');
console.log(g(10, 20));

// var body =  document.querySelector("#body");
// body.addEventListener('click',e => {console.log(e);})

// var ul = document.querySelector('#ul');
// ul.addEventListener("click",e => {console.log(this);})
// ul.addEventListener("click",function (e) {
//     console.log(this);  //箭头函数中this指向是定义函数时候的this  且固定不变
// })

// var Mynew = a => { //箭头函数不能使用在构造函数
//     this.value = 20;
//     this.age  =1230;
// }

// var myObj  = new Mynew();
// console.log(myObj);

//函数嵌套
var h = function h(a) {
    return function (b) {
        console.log(a + b);
    };
};

h('it is for test ')("!");