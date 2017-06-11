/**
 * Created by huangjian on 2017/6/6.
 */
/*
 *
 * 8.6函数绑定
 * bind 不支持ie8
 * */
var obj = {
    name: 'abaozhi',
    age: 18
}

const fun = (num = 0, so) => {
    //这里this 是 undefine的  箭头函数是没有this的！！！紧记
    // this.name = "bz";
    // this.age = "18";
    // console.log(this.age);
    // console.log(this.name);
    console.log(num);
    console.log(so);
}
function Fun1(num = 10, ha) {
    this.name = "bz";
    this.age = 18;
    this.tell = function (a, b) {
        console.log(this.name);
        console.log(this.age);
        console.log(a);
        console.log(b);
    }
}
//ES5
//obj1.tell.bind({name:"mm",age:20}) 绑定
//obj1.tell.bind({name:"mm",age:20})() 执行
var obj1 = new Fun1();
obj1.tell.bind({name: "mm", age: 20})();

var testObj = {
    a: 'a',
    myfun: function () {
        console.log(this.a);
    }
}

console.log((::testObj.myfun()));


//ES6写法
var obj2tell = (new Fun1()).tell;
obj::obj2tell(20, 30);


// obj::fun()  ES7语法
// fun.bind(obj); //绑定 this

// obj::fun(...arguments) ES7语法
// const mynum = [10,20];
// fun.apply(obj,mynum);
// obj::fun(...[1,2,3]);
