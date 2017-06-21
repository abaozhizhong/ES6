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
for(let item of obj){
    // console.log(item);//obj[Symbol.iterator] is not a function
}