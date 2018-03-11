function test(){
    let a = 1;
    console.log(a);
    for(let i = 1;i<3;i++){
        console.log(i);
    }
}

function last(){
    const PI = {
        a:1
    }
    PI.a = 3;
    console.log(PI);
}

last();

test();