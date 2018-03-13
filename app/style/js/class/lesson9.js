/**
 * Symbol 新加的原始数据类型
 * 表示独一无二
 */

// 声明
{
    let a1 = Symbol();
    let a2 = Symbol();
    
    console.log(Object.is(a1,a2));// false
    
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(Object.is(a3,a4));
    
}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c':456
    }

    console.log(obj);
    
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value);
    }


    let arr = Object.getOwnPropertySymbols(obj);
    Reflect.ownKeys(obj).map(item=> console.log(item))

}





