/**
 * Created by bz on 2017/6/22.
 */
/*
* 15.4 Generator.prototype.thow();
* */
let obj = {};
try {
    throw '我是对象抛出的错误'
}catch(e){
    console.log('事件异常',e);
}


var g = function * (){
    while(true){
        try{
            yield;
        }catch(e){
            if(e != 'a') throw e;
            console.log('内部捕获',e);
        }
    }
}
var i = g();
i.next()

try{
        i.throw('a');
        i.throw('b');// if(e != 'a') throw e; 所以这是抛向外部的错误
}catch(e){
        console.log('外部捕获',e);
}

try{
    throw new Error('a');
    throw new Error('b');
}catch(e) {
    console.log('外部捕获',e);
}

//generator 内部没用部署语句块 throw的错误将被外部接受
var f = function *() {
    while(true){
        yield;
        console.log('内部捕获',e);
    }
}
var g = f();
g.next();
try{
    g.throw('a');
    g.throw('b');
}catch (e){
    console.log('外部捕获',e);//结果外外部捕获 a 一旦接收到     g.throw('a');抛出的错误就不会执行 g.throw('b');
}

//
var gen = function * gen() {
    yield console.log('hellow');
    yield console.log('world');
}
var k = gen();
console.log(
    k.next()
);

//Genartor 抛出的错误不影响下一次遍历
try{
    k.throw();
}catch (e){
    k.next();
}
k.next();



var nGen = function * gen() {
    yield console.log('---hellow');
    yield console.log('---world');
}
var j = nGen();
console.log('---',j.next());
try{
    throw new Error();
}catch(e){
    console.log('---',j.next());

}

//
console.log('\\\\\\\\\\\\');
function *foo() {
    var x = yield 10;
    var y =  x.upperCase();
    yield  100;
    yield 1000;
}
var myfoo = foo();
myfoo.next();

try {
    myfoo.next();
}catch (e){
    console.log(e);
}
console.log('....');
console.log(myfoo.next(20));
console.log(myfoo.next(10));



