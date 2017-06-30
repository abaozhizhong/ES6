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
    }
    log(){
        console.log('x',this.x,'y',this.y);
    }
}

class Cicle  extends Point{
    constructor(x,y,color){
        super(x,y);
        //this' is not allowed before super() 倘若没有super这一块的话
        this.color = color;
    }


}

var one = new Point(10,20);
var two  = new Cicle(20,30);
console.log(one);
console.log(two);