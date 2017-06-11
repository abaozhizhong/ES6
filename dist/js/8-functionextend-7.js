'use strict';

/**
 * Created by huangjian on 2017/6/9.
 */
/*
* 8.7尾部调用
* */
var a = function a() {
    console.log('i am functiona');
};
var b = function b() {
    console.log('i am functionb');
    if (false) {
        return a();
    }
};

b();
//# sourceMappingURL=8-functionextend-7.js.map