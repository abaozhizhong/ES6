/**
 * Created by huangjian on 2017/6/5.
 */
/*
*
* 8.3 扩展运算符  ... rest 的逆运算
* */
console.log(1,...[2,3,4],5);
console.log([...document.querySelectorAll('li')]);  //nodelist   转为 array 类型

//函数调用？？？
function mypush(x,...y) {  //rest 将参数集中成一个数组
    let z = [];
    console.log(...y);//扩展运算符号 将参数序列变成一个一个数
    z.push(...y);
    return z
}
console.log(mypush(23,[6,7,8,9]));

//替代数组的apply方法
//直接序列化参数
const myfun = (x,y,z) => {
console.log("x:",x);
console.log("y:",y);
console.log("z:",z);
}
myfun(...['c','n','m']);

//求最大值
console.log(Math);
var {max} = Math;
console.log(
    //求最大值 直接解参数
    max(...[100,200,300])
);

//堆数组
var arr = [1,2,4]
console.log(
    ...arr
);
arr.push(1,2,3);//原来可以这样。。。。
arr.push(...arr);

/*
*
*扩展运算符的应用
* */
//数组合并新写法
//es5 arr1.concat(arr2,arr3)
var  arr1 = [];
var  arr2 = ['a',"b",'c','d','e'];
var  arr3 = ['-','-','-'];
var arr4 = [...arr2,...arr3];
console.log(arr4);

//与解构赋值结合
const [first,...rest] = ['第一','1','23','其他'];
console.log(first);
console.log(rest);

//函数返回值的问题

//转化类似数组的对象
var nodelist = document.querySelectorAll('li');  // 其实Array.form() 也是可以的 方式nodelist 对象都可以这样转
var arraylist =  [...nodelist];
console.log(arraylist);

