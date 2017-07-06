/**
 * Created by bz on 2017/7/6.
 */
/*
*
*18.6 Class的静态方法
* */

//不会被子实例继承（但可以被子类继承），但能通过类调用的方法叫静态方法
class Person {
    constructor(name){
        this.name = name ;
    }
    static hehe (){
        console.log('hehehe,我就是静态方法');
    }
}
var Bz = new Person('BZ');
// Bz.hehe();  hehe is not define
Person.hehe();

class Heperson extends Person{
    constructor(...arg){
        super(...arg)
    }
}

var hhBz= new Heperson('hehebz')
Heperson.hehe();//子类也可以继承父类的静态方法哦