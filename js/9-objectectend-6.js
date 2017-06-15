/**
 * Created by huangjian on 2017/6/11.
 */
/*
* 9.6属性的可枚举性 enmerable
* */
let obj = {
    name:"abaozhi",
    age:18
}
console.log(
    Object.getOwnPropertyDescriptor(obj,'name')
);
console.log(
    Object.keys(obj)
);

