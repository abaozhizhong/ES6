/**
 * Created by bz on 2017/7/6.
 */
/*
 * 18.8 new.target属性
 * */

//new.target 指向 new 指向的类
class Person {
    constructor(name) {
        if (new.target === Person) {
            throw  new Error('不能用Person new')
        } else {
            this.name = name
        }
    }
}
try{
    var bz = new Person('bz');
}catch(err){
    console.log(err);
}


class Hperson extends Person{  //继承可以new
    constructor(...args) {//
        console.log(new.target);
        super(...args)
    }
}
var one = new Hperson('abaozhi');

