/**
 * Created by huangjian on 2017/6/11.
 */
/*
9.5 object.assign() 有点类似 深度复制
 */
var a = {
    a:"a"
};
var b ={
    b:"b"
}
var c= {
    c:'c'
}

Object.assign(a,b,{});
// Object.assign(a,b,c); //a,b,c属性都有了~
console.log(a);
//Object.assign() 用处
//为对象添加属性
class Point {
    constructor(x,y){
        Object.assign(this,{x,y});
    }
}
var mypoint = new Point(10,20);
console.log(mypoint);

//为对象添加方法 扩展方法
Object.assign(Point.prototype,{
    fun1(){
        console.log("fun1");
    },
    fun2(){
        console.log('fun2');
    }
})
var mypoint1 = new Point(10,100);
mypoint1.fun1();
console.log(mypoint1);

//对象克隆
function cloneObj(obj) {
    return Object.assign({},obj)
}

var newMe =  cloneObj(a);
console.log(newMe);
newMe.age = '1000';
console.log(a);//源对象与另外一个都不影响
console.log(newMe);



//合并多个对象
const mydefault = {
    time:10,
    distant:1000
};

//深度复制问题。。。。。 属性是对象的时候要小心
function run(option) {
    let myoption = Object.assign({},mydefault,option);
    console.log(myoption);
}
run({time:1000,distant:3000})




