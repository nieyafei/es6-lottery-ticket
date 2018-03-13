/**
 * 函数扩展
 */

// 参数默认值

{
    function test(x, y = 'world') {
        console.log('default', x, y);

    }
    test('hello');
    test('hello','code html');
}

{
    let x = 'test';
    function test2(x,y=x){
        console.log('作用域',x,y);
        
    }
    test2('nihao')
}

{
    let x = 'test';
    function test2(c,y=x){
        console.log('作用域',c,y);
        
    }
    test2('nihao')
}

// rest参数
{
    function test3(...args){
        for(let v of args){
            console.log(v);
        }
    }
    test3(1,2,3,4)
}

{
    console.log(...[12,3,4]);
    console.log('a',...[12,3,4,5]);
       
}

// 扩展运算符

{
    console.log(...[12,3,4]);
    
}

// 箭头函数
{
    let arraw = v => v*2;
    console.log(arraw(3));
}

// this绑定
{

}

// 尾调用
{
    function tail(x) { 
        console.log(x);
        
     }
    function fx(x) { 
        return tail(x);
     }
    
    fx(234);
}