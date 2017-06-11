'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by huangjian on 2017/6/2.
 */
//基本用法
var _ref = [1, 2, 3],
    a = _ref[0],
    c = _ref[2],
    d = _ref[3];

var array = [a,, c, d];
console.log(a);
console.log(array); //


// let [x,y,z] = ['x','y','z'];

var _ref2 = new Set(['xx', 'yy', 'zz']),
    _ref3 = _slicedToArray(_ref2, 3),
    x = _ref3[0],
    y = _ref3[1],
    z = _ref3[2];

console.log([x, y, z]);

//默认值
var f = 'f',
    g = 'g',
    _undefined = undefined,
    h = _undefined === undefined ? 'h' : _undefined; //结构值严格等于 undefined 才会等于默认值 h='h'

var e = [f, g, h];
console.log(e);
// var e =  [f,g,h ='h'] = ['f','g',undefined];
// console.log(e);
// console.log(h);
// var i = [j='j'] = [undefined];
// console.log(i);


/*
 *
 *对象的解构
 *
 *  */

var obj;
var _name$age = { name: "abaozhi", age: 23 },
    name = _name$age.name,
    age = _name$age.age;

obj = { name: name, age: age };
console.log(obj);

//先找同名属性，再赋值对应变量
var _foo$bar = { foo: 'aaa', bar: 'bbb' },
    fo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log({ fo: fo, bar: bar });
console.log('-------------------');
console.log(fo);

//声明
var obja = void 0;
var _obja = { obja: "2000" };
obja = _obja.obja;

console.log(obja);

var objb = {
    p: ['hellow', { y: 'bold' }]
};

var _objb$p = _slicedToArray(objb.p, 2),
    x = _objb$p[0],
    _objb$p$ = _objb$p[1],
    y = _objb$p$.y,
    _objb$p$$j = _objb$p$.j,
    j = _objb$p$$j === undefined ? 10 : _objb$p$$j; //j默认赋值为10


console.log({ p: [x, { y: y, j: j }] });
// console.log(p);//p是模式 不是变量 error
console.log(y); //y是变量 不是模式

//小括号
var x;
//()  包括解构的对象  {}默认识别为代码块

//解构便利  轻松将方法赋值到变量上~~~~~
var _x = { x: 10 };
x = _x.x;
var log = Math.log,
    sin = Math.sin,
    cos = Math.cos; //{log,sin,cos} = Math:{log:function(){},sin:function(){},...};

console.log(sin(2 * 3.14 / 4)); //


/*
 *
 *字符串解构
 * * */

var _ilove = 'ilove',
    _ilove2 = _slicedToArray(_ilove, 3),
    i = _ilove2[0],
    l = _ilove2[1],
    n = _ilove2[2];

console.log(i);
var _iamabaozhi = 'iamabaozhi',
    len = _iamabaozhi.length;

window.setTimeout(function () {
    console.log({ length: length });
    console.log(len);
}, 1);
console.log(len);

/*
 * 数值与布尔值解构
 * */
//数值
var _ = 123,
    s = _.toString; //其实就是将Nunber对象的toString 方法赋值给toString嘛。。。。

console.log({ toString: s });
console.log(s === Number.prototype.toString);
//布尔值
// let {toString:s} = true;
// console.log( {toString:s});
// console.log(s===Boolean.prototype.toString);

/*
 * 函数参数解构
 * */
var add = function add(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        _ref5$ = _ref5[0],
        x = _ref5$ === undefined ? 20 : _ref5$,
        _ref5$2 = _ref5[1],
        y = _ref5$2 === undefined ? 20 : _ref5$2;

    return x + y;
};
console.log(add([]));

/*
 *
 * 圆括号问题  。。 为什么用圆括号
 * */

/*
 *
 *!!!!!!!!!!!!!解构的用途~~~~~
 *
 * */
//交换变量得值
var bz = '1';
var zb = '2';
console.log([bz, zb]);
var _ref6 = [zb, bz];
bz = _ref6[0];
zb = _ref6[1];

console.log([bz, zb]); //貌似好屌喔

//重函数返回多个值 取值好方便
//返回一个数组
var example = function example() {
    return [1, 2, 3];
};

var _example = example(),
    _example2 = _slicedToArray(_example, 3),
    ll = _example2[0],
    mm = _example2[1],
    nn = _example2[2];

console.log([ll, mm, nn]);

//返回一个对象
var returnObj = function returnObj() {
    return {
        aage: 18,
        nname: "abaozhi"
    };
};

var _returnObj = returnObj(),
    aage = _returnObj.aage,
    nname = _returnObj.nname;

console.log({ aage: aage, nname: nname });

//快速提取json格式
var jsonDate = {
    id: 42,
    status: 'ok',
    data: [100, 200]
};

var id = jsonDate.id,
    status = jsonDate.status,
    data = jsonDate.data;

console.log(id, status, data);
console.log(data);

//默认参数~~~不用写　｜｜　．．．

//遍历ｍａｐ解构  map是啥呀~~~
var map = new Map();
console.log(map);
map.set('first', 'hellow');
map.set("second", "weiawei");
console.log(map);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        console.log(typeof key === 'undefined' ? 'undefined' : _typeof(key));
        console.log(key + " is:" + value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            _a = _step2$value[0],
            b = _step2$value[1];

        console.log('-------------');
        console.log(_a);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            b = _step3$value[1];

        console.log('-------------');
        console.log(b);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}
//# sourceMappingURL=2-destructuring.js.map