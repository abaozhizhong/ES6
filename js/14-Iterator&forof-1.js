/**
 * Created by bz on 2017/6/21.
 */
function idMaker(){
    var index = 0;
    return {
        next:function () {
            return {value:index++,done:false}
        }
    }
}

var id = idMaker();
id.next()



function Iterator(array){
    var index = 0;
    return {
        next:function () {
            return   index<array.length? {value:array[index++],done:false}:{value:undefined,done:false}
        }
    }
}

var iter = Iterator([1,2,2,3,3,5,5,4,5]);
iter.next();