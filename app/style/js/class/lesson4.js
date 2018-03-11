{
    console.log('a','\u0061');

    console.log('s','\u20BB7');

    console.log('s','\u{20BB7}');
}


{
    let s = "吉利";
    console.log(s.codePointAt(0));
}


{
    let str = "string";
    console.log(str.includes("c"));
    console.log(str.startsWith("str"));
    console.log(str.endsWith("ing"));
}


{
    let str = "abc";
    console.log(str.repeat(3));// 复制
}


{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}

// ES7草案
{
    console.log('1'.padStart(3,"0"));
    console.log('1'.padEnd(4,'0'));
}


// 标签模板

{
    let user = {
        name:"codehtml",
        info:"boy"
    }

    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}







































