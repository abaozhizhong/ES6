/**
 * Created by zqf on 2017/6/22.
 */
/*
* 15.6 yield *  satement
*
* */

//A genarator function run in other genarator function
function * foo() {
    yield 'a';
    yield 'b';
}

function * bar() {
    yield * foo();//you have to run function foo using ();
    yield 'c';
    yield 'd';
}

for(let item of  bar()){
    console.log(item);
}

//如果被代理的Genarator函数有return语句、 被代理会向代理函数 返回数值
function *fun1() {
    yield 1;
    yield 2;
    return 10;
}

function *fun2() {
    yield 3;
    var  log =  yield  *fun1();
    console.log(log);
    yield 4;
}


console.log('f2------------');
let f2 = fun2();
f2.next();
console.log(
    f2.next()
);
console.log(
    f2.next()
);
console.log(
    f2.next()
);

//生成二叉树的例子
function Tree(left,label,right){
    this.left = left;
    this.label = label;
    this.right = right;
}

function *inorder(t) {
    if(t){
        yield *inorder(t.left);
        yield t.label;
        yield *inorder(t.right);
    }
}

function make(array) {
    if(array.length == 1){
        return new Tree(null,array[0],null);
    }
    return new Tree(make(array[0]),array[1],make(array[2]));
}

let tree = make([
    ['a','b',['c']],
    'd',
    [['e'],'f',['g']]
]);
console.log(tree);
var result = [];
for(let one of inorder(tree)){
    result.push(one);
}
console.log(result);