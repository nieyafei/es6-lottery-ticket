/**
 * 对象扩展
 */

// 简洁表示法

{
    let o = 1, k =2;
    let es5 = {
        o:o,k:k
    }
    let es6 = {o,k}

    console.log(es5,es6);
}

{
    let es5_method = {
        hello:function(){
            console.log('hello');
        }
    }

    let es6_method = {
        hello(){
            console.log('hello');
        }
    }
    console.log(es5_method,es6_method);
}

// 属性表示法

{
    let a = 'b';
    let es5_obj = {
        a: 'c'
    }

    let es6_obj = {
        [a]:'c'
    }

    console.log(es5_obj,es6_obj);
    
}


// 扩展运算符

{
    /* let {a,b,...c} = {a:"1",b:"2",c:"3",d:"4"}
    console.log(a,b,c); */
    
}

// Object新增方法
{
    console.log(Object.is('abc','abc'));// ===
    console.log(Object.is([1],[2]));
    
    console.log(Object.assign({a:'a'},{b:'b'}));// 浅copy
    
}












