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