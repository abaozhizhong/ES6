/**
 * Created by huangjian on 2017/6/11.
 */
/*
* 9.2属性名表达式 就是对象属性可以是表达式  然后不能与简介属性一起用 否则报错
* */
var love = 'no';
var obj  = {
    age:"18",
    ['n'+'ame']:"abaozhi",
    [love]:'yes'
}
console.log(obj);



