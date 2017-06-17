/**
 * Created by zqf on 2017/6/17.
 */
/*
*13.3 map 结构
* */
const data  = {};
const element = document.querySelectorAll('li');
data[element] = 'element';
console.log(data);


/*
* map结构  键不单单只是字符串  键也可以是对象各种类型的值
* */

const m = new Map();
const o = {name:'abaozhi',age:18};
/*
*  赋值与取值通过set与get
* */
m.set(o,'我的键是对象');
console.log(m.get(o));
console.log(m);

/*
* 刪除該值
*
* */
m.delete(o)
console.log(m.get(o));

/*
* 初次化时添加成员
* */

var mymap = new Map([['name','abaozhi'],['age',100],['birth',1997]]);
console.log(mymap);
console.log(mymap.get('name'));


/*
* 任何具有iterator的接口的数据结构都能作为 new Map的参数
*
* */
var s = new Map([['name','abaozi']]);
var s1 = new Map(s);
var s2 = new Map(s1);
console.log(s1,s2);


/*
*只有对同一个对象的引用 map才视为同一个键
* */
var  w = new Map();

w.set(['a'],555);
console.log(w.get(['a']));

w.set('a',555);
console.log(w.get('a'));

/*
* 只要键严格想等  map结构视为同一个键
* */

w.set(-0,'我是-0');
console.log(w.get(+0));


/*
* 即使键的变量的值是一样（但是指向内存地址不一样）
* */

var k1 = ['bbb'];
var k2= ['bbb'];

w.set(k1,'k1');
w.set(k2,'k2');
console.log(w.get(k1));
console.log(w.get(k2));


/*
* 除了get set 的方法
* */

//.size
console.log(w.size);

//has 返回布尔值
console.log(w.has(k1));

//delete 删除成功返回 true
console.log(w.delete(k1));

//clear 清除所有成员
w.clear();
console.log(w);


//遍历方法 forEach  entries  keys (与set差不多) values()

//数据结构的转换
