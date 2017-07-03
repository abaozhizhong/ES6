/**
 * Created by bz on 2017/6/30.
 */
/*
*  18.2Class的继承
* */
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.attr = '这是都有的属性'
    }
    log(){
        console.log('x',this.x,'y',this.y);
    }
    output(){
        return 'hhahaah'
    }
}

class Cicle  extends Point{
    constructor(x,y,color){
        super(x,y);
        //this' is not allowed before super() 倘若没有super这一块的话
        this.color = color;
    }
    tellSuper(){
        let str = super.output(); //通过super关键字调用父类的方法
        return str;
    }
}

var p = new Point(10,20);
var c  = new Cicle(20,30,'yellow');
console.log(p);
console.log(c);
console.log(p.__proto__ == c.__proto__);//他们的原型不是同一个

console.log( c instanceof Point);//c 就是 Point的实例
console.log(c instanceof Cicle);//c 是Cicle 的实例

//类的prototype属性 和__proto__ 属性


class A {

}

class B extends A{

}

