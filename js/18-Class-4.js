/**
 * Created by bz on 2017/7/6.
 */
/*
*
* 18.4 Class取值函数与存值函数
* */
class Person{
    constructor(name,age){
        this.name = name;
        this.age =  age;
        this.sex ='male'
    }
    tell(){
        alert('老子名字叫'+this.name);
    }

    get ioage(){
        return this.age
    }
    set ioage(arg){
        this.age = arg
        console.log(this.age);
    }
}

var bz = new Person('bz',29);
