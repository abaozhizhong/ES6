/**
 * Created by huangjian on 2017/6/5.
 */
/*
* 8.2 rest 参数
*
* */
var fun1 = () => { //只有function关键字才能有arguments
    // console.log(arguments);
}

//原来可以这样定函数
const fun4 = () => {
    console.log('原来可以这样定义函数');
}
fun4('!!!')


// fun1([1,3])  arguments is undefind

function fun2() {
    console.log(arguments);
}

fun2({a:1});
fun2(1,2,3);


function fun3(...values) {
    console.log(values);
    let sum = 0;
    for(var item of values){
        console.log(item.a||item);
    }
}
fun3(1,2,3);
fun3({a:1},{a:2});


