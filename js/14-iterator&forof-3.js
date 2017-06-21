/**
 * Created by zqf on 2017/6/21.
 */
/*
*
* 14.3 调用用Itertor 的场合
* */
//默认调用
//解构赋值
var set = new Set().add('a').add('b');
var [x,y] = set;

var [a,...rest] = ['a',1,2,2,,3];

//扩展运算符
for (let i of [12,2,3,3,...rest]){
    console.log(i);
}


console.log([...'abaizhi']);