/**
 * Created by huangjian on 2017/6/11.
 */
/*
*  9.7属性的遍历
* */
var obj = {
    a:'a',
    b:'b',
    c:"c",
    d:'d'
}
//穿件不可枚举属性
Object.defineProperty(obj,'sex',{
    value:"male",
    enumerable:false
})
console.log(obj);
for (let i in obj ){
    console.log(i);
    console.log(obj[i]);
}
console.log(
    //返回属性名组成的数组 枚举类型
    Object.keys(obj)
);
console.log(
    //包括不可枚举类型
    Object.getOwnPropertyNames(obj)
);
console.log(
    //全都有 包括symbol
    Reflect.ownKeys(obj)
);

