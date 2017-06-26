/**
 * Created by bz on 2017/6/26.
 */
/*
* 16.8 Promsise.reject();
* */
//返回一个状态为rejected的对象
var obj = {worg:"我错咯"};
var promiseObj = Promise.reject(obj);

promiseObj.catch(function (data) {
    console.log('------Promise.reject()出来的~~~-----');
    console.log(data);
})

