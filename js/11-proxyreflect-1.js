/**
 * Created by bz on 2017/6/13.
 */
/*
* 11.1 proxy 和 reflect
* */
var obj = {
    name:"abaozhi",
    age:100
}
var proxy = new Proxy(obj,{
    get:function(terget,property){
        // return 100
        console.log('我再get');
        return terget.name;
    }
})
console.log(proxy.name);


//proxy实例作为其他对象的原型实例
var newobj = new Proxy({lover:'monther'},{
    get:function(target,property){
        console.log('---property---');
        console.log(property);
    }
})

var obj1 =  Object.create(newobj);
obj1.name = 'nihao';
console.log(obj1);

//其
