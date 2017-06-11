'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by huangjian on 2017/6/4.
 */
/*
*
* 8.1 函数的基本用法
* */
//允许对函数的参数设置默认值
function fun1() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';

    console.log(x, y);
}

function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    this.x = x;
    this.y = y;
}
fun1();
fun1('xx', 'yy');
var mypoint = new Point();
var mypointo = new Point(x = 10, y = 20);

//与解构默认值结合使用
function fun2(_ref) {
    var x = _ref.x,
        _ref$y = _slicedToArray(_ref.y, 1),
        _ref$y$ = _ref$y[0],
        a = _ref$y$ === undefined ? 20 : _ref$y$;

    console.log({ x: x, y: [a] });
}
fun2({ x: 20, y: [20] });
fun2({ y: [] });

//两种写的区别
function m1() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$x = _ref2.x,
        x = _ref2$x === undefined ? 100 : _ref2$x,
        _ref2$y = _ref2.y,
        y = _ref2$y === undefined ? 200 : _ref2$y;

    //有默认解构  {x=100,y=200} 但是函数入口传参得写成{x:11,y:12}
    console.log(x, y);
}
function m2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 10, y: 20 },
        x = _ref3.x,
        y = _ref3.y;

    //无默认解构
    console.log(x, y);
}
m2();
m2({}); //传参了  没有解构默认值
m2({ x: 100 }); //传x 没传y
m1({ x: 11, y: 12 });

//参数默认值的位置
//一句换,可省略的参数尽量放在尾部

//函数的length 属性

//作用域 反正就是局部  存在生成的先后顺序关系
//# sourceMappingURL=8-functionextend-1.js.map