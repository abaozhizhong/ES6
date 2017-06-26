/**
 * Created by bz on 2017/6/26.
 */
/*
* 16.7 Promise.reslove
* */
var obj = {'hi':"我就是个对象"};
var promiseObj = Promise.resolve(obj);
console.log(promiseObj);

promiseObj.then(function (data) {
    console.log(data);
})