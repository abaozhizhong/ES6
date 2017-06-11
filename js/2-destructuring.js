/**
 * Created by huangjian on 2017/6/2.
 */
//基本用法
var [a,,c,d] = [1, 2, 3];
var array = [a, , c, d];
console.log(a);
console.log(array);//


// let [x,y,z] = ['x','y','z'];
var [x,y,z] = new Set(['xx', 'yy', 'zz']);
console.log([x, y, z]);

//默认值
let [f,g,h = 'h'] = ['f', 'g', undefined];  //结构值严格等于 undefined 才会等于默认值 h='h'
let e = [f, g, h];
console.log(e);
// var e =  [f,g,h ='h'] = ['f','g',undefined];
// console.log(e);
// console.log(h);
// var i = [j='j'] = [undefined];
// console.log(i);


/*
 *
 *对象的解构
 *
 *  */

var obj;
let {name, age} = {name: "abaozhi", age: 23};
obj = {name, age};
console.log(obj);

//先找同名属性，再赋值对应变量
var {foo:fo, bar:bar} = {foo: 'aaa', bar: 'bbb'};
console.log({fo, bar});
console.log('-------------------');
console.log(fo);

//声明
let obja;
({obja} = {obja: "2000"});
console.log(obja);

let objb = {
    p: [
        'hellow',
        {y: 'bold'}
    ]
}
var {p:[x,{y, j = 10}]} = objb;  //j默认赋值为10
console.log({p: [x, {y, j}]});
// console.log(p);//p是模式 不是变量 error
console.log(y);//y是变量 不是模式

//小括号
var x;
({x} = {x: 10});  //()  包括解构的对象  {}默认识别为代码块

//解构便利  轻松将方法赋值到变量上~~~~~
let {log, sin, cos} = Math;//{log,sin,cos} = Math:{log:function(){},sin:function(){},...};
console.log(sin(2 * 3.14 / 4));//


/*
 *
 *字符串解构
 * * */
const [i,l,n] = 'ilove';
console.log(i);
let {length:len} = 'iamabaozhi';
window.setTimeout(() => {
    console.log({length});
    console.log(len);
}, 1)
console.log(len);

/*
 * 数值与布尔值解构
 * */
//数值
let {toString:s}  = 123;//其实就是将Nunber对象的toString 方法赋值给toString嘛。。。。
console.log({toString: s});
console.log(s === Number.prototype.toString);
//布尔值
// let {toString:s} = true;
// console.log( {toString:s});
// console.log(s===Boolean.prototype.toString);

/*
 * 函数参数解构
 * */
var add = ([x = 20,y = 20]) => {
    return (x + y)
};
console.log(add([]));

/*
 *
 * 圆括号问题  。。 为什么用圆括号
 * */

/*
 *
 *!!!!!!!!!!!!!解构的用途~~~~~
 *
 * */
//交换变量得值
var bz = '1';
var zb = '2';
console.log([bz, zb]);
[bz, zb] = [zb, bz]
console.log([bz, zb]);//貌似好屌喔

//重函数返回多个值 取值好方便
//返回一个数组
var example = () => {
    return [1,2,3]
}
var [ll,mm,nn]  = example();
console.log([ll,mm,nn]);

//返回一个对象
var returnObj = () => {
    return {
        aage:18,
        nname:"abaozhi"
    }
}

let {aage,nname} = returnObj();
console.log( {aage,nname});


//快速提取json格式
var jsonDate = {
    id:42,
    status:'ok',
    data:[100,200]
}

var {id,status,data} = jsonDate;
console.log(id,status,data);
console.log(data);

//默认参数~~~不用写　｜｜　．．．

//遍历ｍａｐ解构  map是啥呀~~~
var map = new Map();
console.log(map);
map.set('first','hellow');
map.set("second","weiawei");
console.log(map);

for(let [key,value] of map){
    console.log(typeof key);
    console.log(key +" is:"+value);
}

for (let [a,b] of map){
    console.log('-------------');
    console.log(a);
}

for (let [,b] of map){
    console.log('-------------');
    console.log(b);
}