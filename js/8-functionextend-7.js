/**
 * Created by huangjian on 2017/6/9.
 */
/*
* 8.7尾部调用
* */
const a = () => {
    console.log('i am functiona');
}
const b = () => {
    console.log('i am functionb');
    if(false){
        return a()
    }
}

b();
