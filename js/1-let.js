/**
 * Created by huangjian on 2017/6/2.
 */
{
    let a  = 10;
    var b = 10;
}
// console.log(a);
console.log(b);

for(var i =0;i<10;i++){
    console.log(i);
}
console.log('------------'+i);
var c = []
for(let j =0;j<10;j++){
   c[j] = function () { //在作用域内j 就是原来的j
       console.log(j);
   }
}
c[8]();

//暂时性死区
var temp  = 'temp';
var myfun = () =>　{  let temp = 'wei';console.log(temp);}
myfun();

//调用作用域块内的函数
let d ;
{
    let mymessage = "在作用域内的东西";
    d = function () {
        return mymessage
    }
}
console.log(d());
