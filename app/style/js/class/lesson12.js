/**
 * 类
 */
{
    class Parent{
        constructor(name,age){
            this.name = name;
            this.age =age;
        }
    }

    class Son extends Parent{
        constructor(name,age){
            super(name,age);
        }
    }
}