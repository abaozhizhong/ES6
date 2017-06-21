/**
 * Created by bz on 2017/6/21.
 */
/*
*
* 14.2数据结构的默认Iterator接口
* */
var arr = [1,2,3,,4,5,6];
console.log(arr);
let iter = arr[Symbol.iterator]();
console.log(iter);

//不能用for of 遍历对象
var obj = {
    name:'bz',
    age:18,
    sex:'men'
}
// for(let item of obj){
//     // console.log(item);//obj[Symbol.iterator] is not a function
// }

var li = document.querySelectorAll('li');
for(let i of li){
    console.log(i);
}


var obj = {
    0:"abaozhi",
    1:"100",
    2:'man',
    length:3,
    [Symbol.iterator]:[][Symbol.iterator]
}

for(let i of obj){
    console.log(i);
}


//就是没动 for in 能遍历对象 为什么这么麻烦用 of 
var nObj ={
    name:'baab',
    age:200,
    sex:'men'
}

for(var i in nObj){
    console.log(i);
    console.log(nObj[i]);
}

