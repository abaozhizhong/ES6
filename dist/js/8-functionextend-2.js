'use strict';

/**
 * Created by huangjian on 2017/6/5.
 */
/*
* 8.2 rest 参数
*
* */
var fun1 = function fun1() {} //只有function关键字才能有arguments
// console.log(arguments);


//原来可以这样定函数
;var fun4 = function fun4() {
    console.log('原来可以这样定义函数');
};
fun4('!!!');

// fun1([1,3])  arguments is undefind

function fun2() {
    console.log(arguments);
}

fun2({ a: 1 });
fun2(1, 2, 3);

function fun3() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values);
    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item.a || item);
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
}
fun3(1, 2, 3);
fun3({ a: 1 }, { a: 2 });
//# sourceMappingURL=8-functionextend-2.js.map