/**
 * Created by bz on 2017/6/22.
 */
/*
* 15.1 Generator 简介
*
* */
function* FunGenertor() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending'
}
//貌似浏览器不支持
let fun = FunGenertor();
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());

//yield语句
// yield不能在普通函数执行（必须还是带星号的Genrator函数）
(function(){
    // yield 'a' ;
})()

//yield在表达式中必须用中括号包住
// console.log('我用yield:'+ (yield 123));


//与Iterator接口关系

