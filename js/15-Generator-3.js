/**
 * Created by bz on 2017/6/22.
 */
/*
*15.3for of 循环
* */
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    return 'ending'
}
//默认可以进行for of 循环
for(let item of foo()){
    console.log(item);
}
//可以将Generator 函数返回的Iterator作为参数
function * numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 'false'
}
let [x,y,z,w] = numbers();
// console.log(x,y,z,w);

var obj = {name:"this is my name ",age:'1000'};
var obj1 = {name:"我是第二个对象",age:'2000'};
//应用:加上genarator函数循环 就可以对象
// var keys = Object.keys(obj);
// console.log(keys);

function *ObjectEntries(obj) {
    let keys = Object.keys(obj);
    for(let key of keys){
        yield [key,obj[key]];
    }
}
for(let item of ObjectEntries(obj)){
    console.log(item);
}

function * objectEntries() {
    let keys = Object.keys(this);
    for(let key of keys){
        yield [key,this[key]];
    }
}

//或者给对象加上Symbol.iterator属性为objectEntries
obj1[Symbol.iterator] = objectEntries;
for(let item of obj1){
    // console.log(`${key}:${value}`);
    console.log(item);
}