/**
 * Created by huangjian on 2017/6/11.
 */

/*9.1属性的简介表示*/
var name='abaozhi';
//简写属性
var person = {name};
console.log(person);

function functionname(x,y) {
    return {x,y}
}
console.log(functionname(10,20)) ;
functionname(10,30)
//简写方法
var obj= {
    method() {
        console.log('这样可以将写方法');
    }
}
obj.method ();
//简写综合
var birth = 1993;
var zqf = {
    name:"bz",
    birth,
    tell (){
        console.log('我是男生');
    }
}
console.log(zqf);

//赋值器与取值器的应用
var cart  ={
    _wheel:4,
    get wheels (){
        return this._wheel;
    },
    set wheels(value){
        if(value>10){
            console.warn('too much');
        }
        this._wheels = value;
    }
}
console.log(cart );
cart.wheel = 20
console.log(cart );
