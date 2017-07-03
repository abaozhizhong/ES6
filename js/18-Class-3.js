/**
 * Created by bz on 2017/7/3.
 */
/*
 * 18.3 原生构造函数的继承
 * */
class Myarray extends Array {
    constructor(...args) {
        super(...args);
        console.log('----创建一个Myarray数组实例');
        this.user  = 'abaozhi'
    }
}

//总结  __proto__总是指向原型
//prototype 也是指向原型 但是是构造函数的原型

var oarray = new Array(1,2,3,3,5);
//oarray.__proto__ 是原生数组的原型   Array.prototype
var marray = new Myarray(2,'',5,56)
//marray.__proto__ 是Array的原型
// marray.__proto__ == Array.prototype  true
console.log(
    oarray
);
console.log(
    marray
);