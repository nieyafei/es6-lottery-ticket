/**
 * generator
 */

{
    let tell = function* (){
        yield 'a';
        yield 'b';
        return 'c';
    }

    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    for (const value of obj) {
        console.log(value);
    }
}


{
    // 状态机
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }

    let st = state();
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    
}

/* {
    // 状态机
    let state = async function(){
        while(1){
            await 'A';
            await 'B';
            await 'C';
        }
    }

    let st = state();
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    console.log(st.next());
    
} */

{
    // 实例抽奖
    let draw = function(count){
        console.info(`剩余￥{count}次数`)
    }

    let residu = function* (count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }

    let start = residu(5);
    
    let btn = document.createComment('button');
    btn.id='start';
    btn.textContent = '抽奖';
    document.appendChild(bin);
    document.getElementById('start').addEventListener('click',function(){
        start.next();
    },false)
}


{
    // 长轮询
    let ajax = function* (){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                return resolve({code:0})
            },200)
        })
    }

    let pull = function(){
        let gen = ajax();
        gen.next().value.then(function(d){
            if(d.code!==0){
                setTimeout(function(){
                    pull();
                },1000)
            }else{
                console.log(d);
            }
        })
    }

    pull();
}










