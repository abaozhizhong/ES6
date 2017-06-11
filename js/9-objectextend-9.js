/**
 * Created by bz on 2017/6/11.
 */
/*
* 9.9对象的扩展运算符
* */
// let z  = {z:"z",y:'y'};
let {a,b,...z} = {a:'a',b:"b",c:'c',d:'d'};
console.log(z);