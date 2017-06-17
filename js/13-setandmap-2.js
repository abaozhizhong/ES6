/**
 * Created by zqf on 2017/6/16.
 */
/*
* 13.2 weakset
* */
// var li = document.querySelectorAll('li');
// var li = [1,2,3]; weak成员必须是对象
var li = [[1,3],{name:"abaozhi",age:"18"}];
console.log([...li]);
var ws = new WeakSet(li);


for(let i of [1,2,3]){
    console.log(i);
}


// let myli = document.querySelectorAll('li');
// let myliSet = new Set(myli);
// console.log(myliSet);




//储存dom节点 防止内存泄露???怎么用
