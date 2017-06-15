/**
 * Created by zqf on 2017/6/14.
 */

/*
* 13.1 set与map结构
* */

/*set结构不允许重复的元素*/
var s = new Set();
[1,2,4,5,6,6,6,6,6].map(x => s.add(x));
console.log(s);
console.log(s.add({name:'abaozhi'}))

var li = document.getElementsByTagName('li');
var liSet = new Set(li);
console.log(liSet);

var qusli = document.querySelectorAll('li');
var qusliSet = new Set(qusli);
console.log(qusliSet);

/*
 set的属性与方法
*/
// .size  返回成员与属性
//.constructor 构造函数
console.log( (new Set()).constructor);
console.log((new Set()).size);

//add() 添加成员
var news = new Set([1,2]);
news.add(4);
console.log(news);

//delele() 删除某个值 成功返回true
console.log(news.delete(1))
console.log(news);

//has() 表示参数是否为set的成员 没有返回false
console.log(news.has(4));
console.log(news.has(1));

//clear() 清除所有成员 没有返回值
news.clear();
console.log(news);

/*
* 遍历操作
*
* */
var newe = new Set([2,5,6]);
var array = [1,2,3];
console.log(newe)
//keys 返回他的键值的遍历器
console.log(newe.keys());

for (let i of newe.keys()){
    console.log(i)
}

for(let i of array.keys()){
    console.log(i)
}


//values() 返回一个健值的遍历器 键名等于键值？？
for(let i of newe.values()){
    console.log('--value--')
    console.log(i)
}

//entries() 返回键值对的遍历器
for(let i of newe.entries()){
    console.log("--entris--")
    console.log(i)
}

//forEach()
newe.forEach((v,k,a) => {
    console.log(v);
    console.log(k);
    console.log(a);
} )



//改变原来的set结构
// 法一  创建新的结构赋值原来的set结构
var c1 = new Set([5,6,7]);
c1 = new Set([...c1].map(x =>　x*2));
console.log(c1);


//法二 array.from()
c1  = new Set(Array.from(c1,x => x-1));
console.log(c1);


//小用法
//数组去重
var newarray = new Set([1,1,1,1,1,1,2,2,2,2,4,3,3,3,3]);
//转成数组类型
console.log(Array.from(newarray));
console.log([...newarray])

//求并集 交集 差集
var a = new Set([1,2,3]);
var b = new Set([2,3,4]);

let c = new Set([...a,...b]);
var d = new Set([...a].filter(x => b.has(x)));
var e = new Set([...a].filter(x => !b.has(x)));
var g = new Set([...b].filter(x => !a.has(x)));
console.log(c,d,e,g);

console.log(a);//{1,2,3}

