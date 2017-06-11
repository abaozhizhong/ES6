/**
 * Created by huangjian on 2017/6/4.
 */
/*
*
* 8.1 函数的基本用法
* */
//允许对函数的参数设置默认值
function fun1(x='x',y='y') {
    console.log(x,y);
}

function Point(x=0,y=10) {
    this.x = x;
    this.y = y;
}
fun1();
fun1('xx','yy');
var mypoint = new Point();
var mypointo = new Point(x=10,y=20);

//与解构默认值结合使用
function fun2({x,y:[a=20]}) {
    console.log({x,y:[a]});
}
fun2({x:20,y:[20]})
fun2({ y:[]});

//两种写的区别
function m1({x=100,y=200} = {}) {  //有默认解构  {x=100,y=200} 但是函数入口传参得写成{x:11,y:12}
        console.log(x,y);
}
function m2({x,y} = {x:10,y:20}) {//无默认解构
    console.log(x,y);
}
m2();
m2({});//传参了  没有解构默认值
m2({x:100})//传x 没传y
m1({x:11,y:12});

//参数默认值的位置
//一句换,可省略的参数尽量放在尾部

//函数的length 属性

//作用域 反正就是局部  存在生成的先后顺序关系


