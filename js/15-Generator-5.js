/**
 * Created by zqf on 2017/6/22.
 */
/*
* 
* 15.5 Generator.prototype.return()
* */

//using  return()  end the loop
function * mything() {
    yield 1;
    yield 145;
    yield 146;
    yield 14;
    yield 2;
}
var myloop = mything();
myloop.next()
console.log(
      myloop.return('hehe')
);
console.log(
      myloop.next()
);


//if there are finally block,after runing  return() and to run next()
function * mythinge() {
    yield 1;
    try{
        yield 20;
    }finally {
        yield 100;
    }
}

var myloope = mythinge();
console.log(
      myloope.next()
);
console.log('......');
console.log(
      myloope.return(20)//there have argument,than finally block would works
);
console.log(
      myloope.next()
);