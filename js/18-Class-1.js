/*
 *18.1 Class
 * */
function log() {
    console.log("hahahah,我就是个function");
}

class Person {
    constructor() {
        this.firstName = 'zhong';
        this.lastName = 'qifan';
    }

    tell() {
        alert("老子姓" + this.firstName);
        alert('老子名字叫' + this.lastName);
    }
}
let one = new Person();
Object.assign(one, {log});
console.log("添加function后的one ", one);

var two = new Person();
var three = new Person();
console.log(two == three);
console.log(two.__proto__ == three.__proto__);

//通过实例给原型添加方法  Class 同一个class 均能用
one.__proto__.logByArg = function (arg) {
    console.log('我是传进来的参数',arg);
}

two.logByArg('two也能用啦')
console.log(Person);


//Class 表达式
var TrueClass = class innerClass {
    constructor(){
        this.message = "其实我就是个测试类"
    }
    log(){
        console.log('这样写类真的好方便');
    }
}
console.log(
    TrueClass.name
);
console.log(
    // innerClass.name innderClass仅仅供内部使用
)


