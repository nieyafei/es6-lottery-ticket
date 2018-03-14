// Proxy  Reflect

{
    let obj = {
        time:'2018-03-12',
        name: 'net',
        _r:1234
    }

    let monitor = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },

        // 拦截对象设置属性
        set(target,key,value){
            if(key === 'name'){
                return target[key] = value;
            }else{
                return target[key];
            }
        },
        // 拦截 key in obj
        has(target,key){
            if(key === "name"){
                return target[key]
            }else{
                return false;
            }
        },
        // 拦截删除操作
        deleteProperty(target,key){
            if(key.startsWith('_')){
                delete target[key]
                return true
            }else{
                return target[key];
            }
        },
        // 拦截Object.keys Obejct.getOwnPropertySymbols Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time');
        }
    })

    console.log(monitor.time);
    monitor.name = "nihao";
    console.log(monitor.name);
    console.log('name' in monitor);
    
    delete monitor.time;
    console.log(monitor);

    console.log(Object.keys(monitor));
    

}

{
    let obj = {
        time:'2018-03-12',
        name: 'net',
        _r:1234
    }

    console.log(Reflect.get(obj,'time'));// 读取
    Reflect.set(obj,'name','nihao');
    console.log(obj);
    
    console.log(Reflect.has(obj,'name'));
    

}

// 实例使用
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    // 存在此属性
                    if(!!_validator[key](value)){
                        return Reflect.set(target,key,value)
                    }else{
                        throw Error(`不能设置${key}的值${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`)
                }
            }
        })
    }
    const personValidator = {
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val === 'number' && val > 18
        },
        mobile(val){
            return /1[1-9]{10}/.test(val);
        }
    }
    class Person{
        constructor(name,age,mobile){
            this.name = name;
            this.age = age;
            this.mobile = mobile;
            return validator(this,personValidator)
        }
    }
    const person = new Person('codehtml',20);



}








