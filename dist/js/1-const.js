'use strict';

/**
 * Created by huangjian on 2017/6/2.
 */
//声明复合类型的常量
var obj = {}; //对象
obj.name = 'bz';
console.log(obj);

var array = [];
array.push('i');
console.log(array);
console.log(array.length);
//array = ['abaozhi'] 报错
//冻结对象obj.freeze()...

var a = 10; //全局
console.log(window.a);
var b = 11; //局部
console.log(window.b);