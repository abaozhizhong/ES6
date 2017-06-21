/**
 * Created by zqf on 2017/6/20.
 */
/*
* 13.4 weakmap
* */
//键必须是对象(除了) 而且不计入垃圾回收机制
var obj = {};
var map = new WeakMap();
console.log(obj);
// map.set(1,'20');
map.set(obj,'1000');
console.log(map)

//weakmap的dom应用
var li = document.querySelectorAll('li');
console.log(li);
var liMap = new WeakMap();
liMap.set(li,'这是一个dom节点');
console.log(liMap.get(li));
for(let i of li){
    console.log(i.parentNode);
    i.parentNode.removeChild(i);
}
li = null ;//当键名消失的时候，键值随之消失
console.log(liMap.get(li));
