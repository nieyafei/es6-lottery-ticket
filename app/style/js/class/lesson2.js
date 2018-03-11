/**
 * 解构赋值 
 */
{
console.log("解构赋值");
let [a,b] = [4,2];// 数组类型解构赋值
console.log(a,b);
}

{
    let [a,b,...rest] = [1,2,3,4,5,6,7];
    console.log(a,b,rest);
}

// 对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);
}

{
    let a,b,c;
    ({a,b,c=5}={a:1,b:2});
    console.log(a,b,c);
}

{
    let [a,b] = [1,2];
    [a,b] = [b,a];
    console.log(a,b);
}
{
    let a,b;
    function f(){
        return [3,4];
    }
    [a,b]=f();
    console.log(a,b);
}

{
    function f(){
        return [2,3,4,5,6,7,8];
    }
    let a,b,c;
    [a,,,,b] = f();
    console.log(a,b,c);
}

{
    function f(){
        return [2,3,4,5,6,7,8];
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b,c);
}

{
    let obj = {a:1,b:2};
    let {a,b} = obj;
    console.log(a,b);
}

{
    let {a=10,b=5} = {a:3};
    console.log(a,b);
}

{
    let data = {
        title:"nihao",
        list:[
            {
                title:"1n",
                desc:"山东黄金克里斯多夫加速度快"
            }
        ]
    }
    let {title:esTitle,list:[{title:cnTitle}]} = data;
    console.log(esTitle,cnTitle);
}


















