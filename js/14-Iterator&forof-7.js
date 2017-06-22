/**
 * Created by bz on 2017/6/22.
 */
/*
* 14.7for of循环
* */
let li =  document.querySelectorAll('li');
//数组
let arr = ['a','b','c','d'];
for(let item of arr){
    // console.log(item);
}

//for in 与 for of区别
arr.foo = 'foo';
for(let i in arr){
    // console.log(i);
}
for(let i of arr){
    //不会遍历出索引不是数字的值 所以不会打印'foo'
    // console.log(i);
}


//set结构
var nSet = new Set(arr);
for(let item of nSet){
    // console.log(item);
}
//貌似set不能使用 in 循环
for(let key in nSet){
    console.log('in');
    // console.log(key);
}

//map结构
//键值对。。。 怎么老忘记
var nMap = new Map([[2,3],[2,3],[4,5]]);
console.log(nMap);
nMap.set('a','i am a');
//貌似map也不能in 循环
for (var  i  in nMap){
    console.log(i);
}
for(let item of nMap){
    // console.log(item);
}

//计算生成的数据结构
// 数组 map set 均部署了 keys() values() entries() 返回的都是 遍历器对象
for(let item of arr.entries()){
    console.log(item);
}

//类似数组的对象
//字符串
for(let item of 'abaozhi'){
    console.log(item);
}

//DOMlist对象
for(let item of li){
    item.innerText = '我是用of循环写进来的内容'
}

//arguments对象
function fun() {
    console.log(arguments);
    for(let item of arguments){
        console.log(item);
    }
}
fun(1,2,3,3,5);

//对象
//for in 不能与用 break??
for(let i in [1,12,5,2,2,2,0]){
    console.log(i);
    if(i>3){
        console.log('gonna break');
        break;
    }
}