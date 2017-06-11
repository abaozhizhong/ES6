'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by huangjian on 2017/6/4.
 */
/*
 *7.1转化类似数数组的对象 Array.from()
 * */
//类似数组对象有length属性
var arraylike = {
    '0': 'a',
    "2": 'b',
    "1": 'c',
    length: 3 //要有length
};
var array = Array.from(arraylike, function (x) {
    console.log(x);
    return x + x;
}); //x=> {console.log(x); return x+x} 类似于map 方法
console.log(array);

//转nodeList 对象
var lis = document.querySelectorAll('li');
console.log(lis); // type nodelist
var lisArray = Array.from(lis);
console.log(lisArray); //type array

//转字符串
var stringArray = Array.from('abaozhi');
console.log(stringArray);

//Array.from类似于map的方法
console.log(array.map(function (a) {
    //map方法 返回一个新的数组
    console.log(a);
    return a + a;
}));

//返回数值类型
function typesOf() {
    return Array.from(arguments, function (value) {
        return typeof value === 'undefined' ? 'undefined' : _typeof(value);
    });
}
console.log(typesOf(null, [], NaN));

//产生一个数组  单单写一个length 属性 屌屌屌
console.log(Array.from({ length: 2 }, function () {
    var x = 1;
    return x++;
}));

//map中用到this关键字 ？？？


/*
 *7.2 Array.of 一组值转换为数组
 * */
console.log(Array.of(1, 2, 3));
console.log(Array.of(1, 2, 3).length);

/*
 *7.3数组实例 copyWith();
 * */
// terget 替换的目标位置
// start替换开始元素
// end 替换的结束元素

console.log([0, 1, 2, 3].copyWithin(1, 2));

/*
 *
 * 7.4find() 与 findIndex()
 * */
var myfindResult = [{ n: 'abaohzi' }, { n: 'aba' }, { n: 'abaoz' }, { n: 'abaozh' }].find(function (x) {
    if (x.n == 'aba') return x.n;
});

var findResult = [0, 1, 2, 3, 5, 4].find(function (value, index, arr) {
    return index > 4;
});

var findIndex = [1, 2, 3, 4].findIndex(function (value, index, arr) {
    return index < 1;
});

/*
 * 7.5数组实例的fill()
 *
 * */
//全部填满
console.log([1, 2, 3].fill(10));
//局部填满
console.log([1, 2, 3, 4, 5, 6].fill("我在这里填", 3, 4));

/*
 * 7.6 entries() keys() values()
 * */
//均返回一个遍历对象
console.log([1, 2].keys());
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = [1, 2].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }

    // for(let elem of [1,2].values()){ values() 不是function
    //     console.log(elem);
    // }
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

var _arr = [1, 2];
for (var _i = 0; _i < _arr.length; _i++) {
    var _item = _arr[_i]; //其实么有values也没关系啦。。。
    console.log(_item);
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ref = _step2.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var index = _ref2[0];
        var elem = _ref2[1];

        console.log(index, elem);
    }

    /*
     *
     *7. 7数组的includes()
     * */
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

console.log([1, 2, 3].includes(2) //包含则返回true
);
console.log([{ N: 'A' }, 'null'].includes({ N: 'A' }) //貌似这样不行耶
);

//第二个参数为搜索起始位置(默认结束为到数组结束)
console.log(nodeIsArrayBuffer[(1, 2, 3, 3, 5)].includes(3, 5));

/*
 *
 * 7.9 数组推导 产生新的数字  ES7 但是babel支持
 * */
// let tuidao = [for(let item of [1, 2, 3]) if(item > 2)];
var a1 = [1, 2, 3, 4];
// var a2 = [ for (i of a1) i*2 ];
console.log(a2);
//# sourceMappingURL=7-arrayextend.js.map