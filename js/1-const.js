/**
 * Created by huangjian on 2017/6/2.
 */
//声明复合类型的常量
const obj = {};//对象
obj.name = 'bz';
console.log(obj);

const array = [];
array.push('i');
console.log(array);
console.log(array.length);
//array = ['abaozhi'] 报错
//冻结对象obj.freeze()...

var a = 10; //全局
console.log(window.a);
let b = 11;//局部
console.log(window.b);

