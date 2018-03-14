// Set Map WeakSet WeakMap
{
    let map = new Map();
    let arr = [];
    map.set('t',"a");
    arr.push({t:1});

    console.log(map,arr);

    // 查
    let map_exist = map.has('t');
    let arr_exist = arr.forEach(item=>item.t);


    

    

}