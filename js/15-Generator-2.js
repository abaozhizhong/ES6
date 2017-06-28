/**
 * Created by bz on 2017/6/22.
 */
/*
* 15.2next方法的参数
* */
//!!!next(arg) next方法传参  参数就是上一个yield的参数 意思是将上一个yeild 出来的东西 设为 arg
function * f () {
    for(var i = 0;true;i++){
        var reset = yield i;
        if(reset){
            i=-1;
        }
    }
}
var fun = f();
// console.log(fun.next());
// console.log(fun.next());
// console.log(fun.next());
// console.log(fun.next());
// console.log(fun.next());
// console.log(fun.next(true));

function *foo(x) {
    var y = 2*(yield (x+1));
    var z = yield (y/3);
    return (x+y+z);//5+24+13
}
var a = foo(5);
a.next();//第一次调用next()能识别到yield
// console.log(
//     a.next()//第二次直接跳到yield(y/3) 识别不了y 所以undefined/3不能有结果
// );


// console.log(
//     a.next()
// );
// console.log(
//     a.next()
// );


var b = foo(5);
console.log(
    b.next()
);
console.log(
    b.next(12)
);
console.log(
    b.next(13)
);

function *logThings() {
    console.log('start');
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return 'result'
}

var l = logThings();

l.next();
l.next('lala');
l.next('bababa');
